import { ANECDOTES_API } from "../constants"
import axios from 'axios'

const getAnecdotes = async () => {
    const res = await axios.get(ANECDOTES_API)
    return res.data
}

const postAnecdote = async (anecdoteObject) => {
    const res = await axios.post(ANECDOTES_API, {...anecdoteObject})
    return res.data
}

const voteAnecdote = async (anecdoteId, originalAnecdoteObject, totalVotesAfter) => {
    const res = await axios.put(`${ANECDOTES_API}/${anecdoteId}`, {
        ...originalAnecdoteObject,
        votes: totalVotesAfter
    })
}

const anecdoteService = {
    getAnecdotes,
    postAnecdote,
    voteAnecdote
}

export default anecdoteService