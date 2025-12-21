import React from 'react'
import '../src/styles/main.css'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 My Todo App</h1>
      </header>
      <main className="app-main">
        <TodoList />
      </main>
    </div>
  )
}

export default App
