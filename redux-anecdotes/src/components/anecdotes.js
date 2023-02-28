import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'


const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const sortedAnecdotes = [...anecdotes]
    sortedAnecdotes.sort((a, b) => {
        return b.votes - a.votes
    })
    const handleClick = (id) => {
        dispatch(handleVote(id))
    } 

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={e => handleClick(anecdote.id)}>vote</button>
            </div>
            </div>
            )}
        </div>
    )
}

export default Anecdotes

