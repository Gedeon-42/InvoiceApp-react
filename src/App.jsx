import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Invoice from './components/Invoice/Invoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        
        <Invoice/>
      </div>
    </>
  )
}

export default App
