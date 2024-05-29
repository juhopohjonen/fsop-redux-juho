import { createSlice, current } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)
const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote(state, action) {
      const anecdoteToVote = state.find(anec => anec.id === action.payload.id)
      anecdoteToVote.votes += 1
    },
    newAnecdote(state, action) {
      const anecdote = asObject(action.payload.content)
      state.push(anecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    createByObject(state, action) {
      state.push(action.payload)
    }
  }
})

export const createVote = (id) => {
  return {
    type: 'anecdotes/vote',
    payload: {
      id
    }
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (anecdoteObject) => {
  return async dispatch => {
    await anecdoteService.postAnecdote(anecdoteObject)
    dispatch(createByObject(anecdoteObject))
  }
}

export const voteAnecdote = (anecdote) => {

  const votesBefore = anecdote.votes

  return async dispatch => {
    await anecdoteService.voteAnecdote(anecdote.id, anecdote, votesBefore + 1)
    dispatch(vote({ id: anecdote.id }))
  }
}

export default anecdoteSlice.reducer
export const { newAnecdote, vote, setAnecdotes, createByObject } = anecdoteSlice.actions
