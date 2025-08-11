import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-primary">Hello, Bootstrap in Vite!</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </div>
  )
}

export default App
