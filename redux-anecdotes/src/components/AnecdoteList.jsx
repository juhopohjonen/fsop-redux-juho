import { useDispatch, useSelector } from "react-redux"
import { createVote } from "../reducers/anecdoteReducer"
import { notificationCreator } from "../reducers/notificationReducer"

const AnecdoteList = () => {

    const includeUnCaseSensitively = (a, b) => a.toLowerCase().includes(b.toLowerCase()) 

    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => {
        console.log(state)

        const anecs = state.filter
                ? state.anecdotes.filter(anecdote => includeUnCaseSensitively(anecdote.content, filter))
                : state.anecdotes
                
        console.log(anecs)
        return anecs
    })  

    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdoteToVote = anecdotes.find(anecdote => anecdote.id === id)

        dispatch(createVote(id))
        dispatch(notificationCreator(`You voted anecdote '${anecdoteToVote.content}'`))

        setTimeout(() => {
            dispatch(notificationCreator(''))
        }, 5000)
    }
    
    return (
        <>


            {anecdotes
                .slice()
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList