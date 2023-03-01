import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationMessage } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

    const sortedAnecdotes = [...filteredAnecdotes]
    sortedAnecdotes.sort((a, b) => {
        return b.votes - a.votes
    })

    const handleClick = (id) => {
        dispatch(voteAnecdote(id))
        const anecdoteToVote = anecdotes.find(a => a.id === id)
        dispatch(notificationMessage(`You voted ${anecdoteToVote.content}`))
        setTimeout(() => {
            dispatch(notificationMessage(''))
        }, 5000)
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

export default AnecdoteList

