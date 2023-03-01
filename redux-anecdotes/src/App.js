import React from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newanecdote'
import { filterChange } from './reducers/filterReducer'


const App = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>AnecdoteList</h2>
      <div>
        filter <input name='filter' onChange={(e) => dispatch(filterChange(e.target.value))}/>
      </div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App