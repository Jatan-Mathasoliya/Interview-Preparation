import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [isOpen, setisOpen] = useState(false)

  const openModel = () => {
    setisOpen(true)
  }

  const closeModel = () => {
    setisOpen(false)
  }

  return (
    <main>
      {isOpen ? (
        <Modal closeModel={closeModel}>
          <h1>Welcome to the Modal!</h1>
          <p>This is the content inside the modal.</p>
        </Modal>
      ) : (
        <button onClick={openModel}>Open Modal</button>
      )}
    </main>
  )
}

export default App