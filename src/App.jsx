import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>First React App</h1>
      <p>This is the first React App</p>

      <div className="button-wrap flex-row">
        <button onClick={() => setCount((count) => count + 1)}>Test Count {count == 0? "" : count}</button>
        <button>Other Page</button>
      </div>
    </>
  )
}

export default App