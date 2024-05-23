import { useDispatch } from "react-redux"
import { createNewAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (e) => {
        e.preventDefault()
        const { value } = e.target.anecdote
        dispatch(createNewAnecdote(value))
    }
        
    return (
        <>
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