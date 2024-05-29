import axios from "axios"

const API_URI = 'http://localhost:3001/anecdotes'

export const fetchAnecdotes = async () => {
    const res = await axios.get(API_URI)
    return res.data
}

export const postAnecdote = async (anecdote) => {
    const res = await axios.post(API_URI, anecdote)
    return res.data
}

export const putAnecdote = async (anecdote) => {
    const res = await axios.put(`${API_URI}/${anecdote.id}`, anecdote)
    return res.data
}