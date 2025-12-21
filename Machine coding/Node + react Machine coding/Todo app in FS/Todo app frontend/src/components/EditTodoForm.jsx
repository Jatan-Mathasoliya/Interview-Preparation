import { useState } from 'react'
import '../styles/form.css'

function EditTodoForm({ todo, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description || '',
    status: todo.status || 'pending',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) {
      alert('Please enter a title for your todo')
      return
    }
    onSubmit(formData)
  }

  return (
    <form className="todo-form edit-form" onSubmit={handleSubmit}>
      <h2>Edit Todo</h2>

      <div className="form-group">
        <label htmlFor="title">Todo Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="What do you need to do?"
          maxLength="100"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add more details (optional)"
          rows="4"
          maxLength="500"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">⏳ Pending</option>
          <option value="in-progress">🔄 In Progress</option>
          <option value="completed">✓ Completed</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          ✓ Update Todo
        </button>
        <button type="button" className="cancel-btn" onClick={onCancel}>
          ✕ Cancel
        </button>
      </div>
    </form>
  )
}

export default EditTodoForm
