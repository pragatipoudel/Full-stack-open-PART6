import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newanecdote'
import Notification from './components/Notification'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { filterChange } from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])
  return (
    <div>
      <h2>AnecdoteList</h2>
      <Notification />
      <div>
        filter <input name='filter' onChange={(e) => dispatch(filterChange(e.target.value))}/>
      </div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App