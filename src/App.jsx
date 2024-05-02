import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Quizzical</h1>
      <p>Test your trivial knowledge!</p>
      <button>Start quiz</button>
      </div>
    </>
  )
}

export default App
