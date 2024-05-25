import { useDispatch } from "react-redux"
import { createNewAnecdote, newAnecdote } from "../reducers/anecdoteReducer"
import { notificationCreator } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (e) => {
        e.preventDefault()
        const { value } = e.target.anecdote
        
        dispatch(createNewAnecdote(value))
        dispatch(notificationCreator(`You created a new anecdote '${value}'`))
        setTimeout(() => {
            dispatch(notificationCreator(''))
        }, 5000)

    }
        
    return (
        <>

            <h2>create new</h2>


            <form
                onSubmit={create}
            >
                <input
                    name="anecdote"
                />

                <button
                    type="submit"
                >
                    create
                </button>
            </form>
        </>
    )
}

export default AnecdoteForm