import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`A new anecdote ${content} was added`, 5))
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