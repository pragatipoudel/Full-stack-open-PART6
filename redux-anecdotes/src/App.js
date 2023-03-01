import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newanecdote'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { filterChange } from './reducers/filterReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())}, [dispatch])
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