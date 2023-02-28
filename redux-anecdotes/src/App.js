import React from 'react'
import Anecdotes from './components/anecdotes'
import AnecdoteForm from './components/newanecdote'


const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <AnecdoteForm />
    </div>
  )
}

export default App