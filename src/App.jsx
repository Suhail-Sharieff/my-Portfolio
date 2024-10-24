import { useState } from 'react'
import TechnologiesPic from './Components/TechnologiesPic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TechnologiesPic/>
    </>
  )
}

export default App
