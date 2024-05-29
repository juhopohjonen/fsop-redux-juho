import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { fetchAnecdotes, postAnecdote, putAnecdote } from './requests'
import { useNotificationDispatch } from './reducers/NotificationContextProvider'

const App = () => {

  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()



  const anecdoteMutation = useMutation({
    mutationFn: putAnecdote,
    onSuccess: (votedAnecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {

    anecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'CHANGE',
      payload: `You voted anecdote ${anecdote.content}`
    })

    setTimeout(() => {
      dispatch({
        type: 'RESET'
      })
    }, 5000)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: fetchAnecdotes
   })


  console.log(JSON.parse(JSON.stringify(result)))

  let anecdotes = []

  if (result.isError) {
    return (
      <>
        Query failed due to server connection failure.
      </>
    )
  }

  if (result.isPending) {
    return <>Loading...</>
  }

  anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />


    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
