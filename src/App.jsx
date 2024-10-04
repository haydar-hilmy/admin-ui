import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='main'>
        <h1>First React App</h1>
        <p>This is the first React App</p>

        <div className="button-wrap flex-row">
          <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>Test Count {count == 0 ? "" : count}</button>
          <button className='btn btn-secondary'>Second Btn</button>
        </div>
      </section>
    </>
  )
}

export default App