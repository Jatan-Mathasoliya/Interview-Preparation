import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'
import EditTodoForm from './EditTodoForm'
import '../styles/todolist.css'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [toast, setToast] = useState(null)

  const API_BASE_URL = 'http://localhost:3000'

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:3000/todos')
      if (!response.ok) throw new Error('Failed to fetch todos')
      const data = await response.json()
    console.log('Fetched todos:', data)
      setTodos(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddTodo = async (todoData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      })
      if (!response.ok) throw new Error('Failed to add todo')
      const newTodo = await response.json()
      setTodos([...todos, newTodo])
      setShowAddForm(false)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error adding todo:', err)
    }
  }

  const handleEditTodo = async (todoData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${editingTodo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      })
      if (!response.ok) throw new Error('Failed to update todo')
      const updatedTodo = await response.json()
      setTodos(todos.map(todo => todo.id === editingTodo.id ? updatedTodo : todo))
      setEditingTodo(null)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error updating todo:', err)
    }
  }

  const handleUpdateStatus = async (todoId, newStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/update-status/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!response.ok) throw new Error('Failed to update status')
      const updatedTodo = await response.json()
      setTodos(todos.map(todo => todo.id === todoId ? updatedTodo : todo))
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error updating status:', err)
    }
  }

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${todoId}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete todo')
      setTodos(todos.filter(todo => todo.id !== todoId))
      setError(null)
      showToast('✓ Task deleted successfully!')
    } catch (err) {
      setError(err.message)
      console.error('Error deleting todo:', err)
    }
  }

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2000)
  }

  if (loading) {
    return <div className="loading">Loading todos...</div>
  }

  return (
    <div className="todo-list-container">
      {toast && <div className="toast-notification">{toast}</div>}
      {error && <div className="error-message">⚠️ {error}</div>}

      <div className="add-todo-button-container">
        <button
          className="add-todo-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? '✕ Cancel' : '+ Add New Todo'}
        </button>
      </div>

      {showAddForm && (
        <div className="form-wrapper">
          <AddTodoForm
            onSubmit={handleAddTodo}
            onCancel={() => setShowAddForm(false)}
          />
        </div>
      )}

      {editingTodo && (
        <div className="form-wrapper">
          <EditTodoForm
            todo={editingTodo}
            onSubmit={handleEditTodo}
            onCancel={() => setEditingTodo(null)}
          />
        </div>
      )}

      <div className="todos-container">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet! Click "Add New Todo" to get started 🚀</p>
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={() => setEditingTodo(todo)}
              onDelete={() => handleDeleteTodo(todo.id)}
              onStatusChange={handleUpdateStatus}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default TodoList