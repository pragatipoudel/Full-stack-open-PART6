import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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

export default NewAnecdote