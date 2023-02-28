import React from 'react'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newanecdote'


const App = () => {
  return (
    <div>
      <h2>AnecdoteList</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App