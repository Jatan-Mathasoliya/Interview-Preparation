import { useState } from 'react'
import '../styles/todoitem.css'

function TodoItem({ todo, onEdit, onDelete, onStatusChange }) {
  const [isChangingStatus, setIsChangingStatus] = useState(false)

  const handleStatusChange = (e) => {
    onStatusChange(todo.id, e.target.value)
    setIsChangingStatus(false)
  }

  return (
    <div className={`todo-item ${todo.status || 'pending'}`}>
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && <p className="todo-description">{todo.description}</p>}
        <div className="todo-meta">
          <span className={`todo-status ${todo.status || 'pending'}`}>
            {(todo.status || 'pending').toUpperCase()}
          </span>
        </div>
      </div>

      <div className="todo-actions">
        <div className="status-selector">
          <select
            value={todo.status || 'pending'}
            onChange={handleStatusChange}
            className="status-select"
          >
            <option value="pending">⏳ Pending</option>
            <option value="in-progress">🔄 In Progress</option>
            <option value="completed">✓ Completed</option>
          </select>
        </div>

        <button
          className="edit-btn"
          onClick={onEdit}
          title="Edit todo"
        >
          ✎ Edit
        </button>

        <button
          className="delete-btn"
          onClick={onDelete}
          title="Delete todo"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
