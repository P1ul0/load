import { useState } from 'react'

import './App.css'
import { LoadGlobal } from './Component/Load/Load'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadGlobal/>
    </>
  )
}

export default App
