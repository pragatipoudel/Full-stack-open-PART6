import { useMutation, useQueryClient } from "react-query"
import { useNotificationDispatch } from "./anecdoteContext"
import { createAnecdote } from "./requests"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
      dispatch(`A new anecdotes ${newAnecdote.content} was added`)
      setTimeout(() => {
        dispatch('')
      }, 5000)
    },
    onError: (error) => {
      dispatch(error.response.data.error)
      setTimeout(() => {
        dispatch('')
      }, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
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
