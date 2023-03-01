import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notificationMessage } from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(notificationMessage(`A new anecdote ${content} was added`))
        setTimeout(() => {
            dispatch(notificationMessage(''))
        }, 5000)
    }

    return (
        <div>
            <h2>Create New</h2>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AnecdoteForm