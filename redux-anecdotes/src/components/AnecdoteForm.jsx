import { useDispatch } from "react-redux"
import { asObject, createByObject, createNewAnecdote } from "../reducers/anecdoteReducer"
import { notificationCreator } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdoteService"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (e) => {
        e.preventDefault()
        const { value } = e.target.anecdote

        
        
        const anecdoteObject = asObject(value)
        dispatch(createNewAnecdote(anecdoteObject))

        /*

        try {
            await anecdoteService.postAnecdote(anecdoteObject)
        } catch (err) {
            console.error(err)
            return alert('Virhe!')
        }

        dispatch(createByObject(anecdoteObject))

        */
 

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