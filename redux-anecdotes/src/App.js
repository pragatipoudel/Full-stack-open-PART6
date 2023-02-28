import React from 'react'
import Anecdotes from './components/anecdotes'
import NewAnecdote from './components/newanecdote'


const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App