import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiUseReducer from './components/BaiUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaiUseReducer/>
    </>
  )
}

export default App
