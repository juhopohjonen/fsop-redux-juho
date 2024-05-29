import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postAnecdote } from "../requests"
import { useNotificationDispatch } from "../reducers/NotificationContextProvider"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation(
    { 
      mutationFn: postAnecdote,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      }
    }
  
  )


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    if (content.length < 5) {
      dispatch({
        type: 'CHANGE',
        payload: 'Length of an anecdote must be atleast 5 characters.'
      })

      return setTimeout(() => {
        dispatch({
          type: 'RESET'
        })
      }, 5000)
    }

    const newAnecdote = {
      content,
      votes: 0,
      id: crypto.randomUUID()
    }

    console.log(newAnecdote)
    newAnecdoteMutation.mutate(newAnecdote)

    dispatch({
      type: 'CHANGE',
      payload: `You created anecdote ${content}`
    })

    setTimeout(() => {
      dispatch({
        type: 'RESET'
      })
    }, 5000)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
