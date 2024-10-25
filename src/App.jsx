import { useState } from 'react'
import TechnologiesPic from './Components/TechnologiesPic'
import SocialLinks from './Components/SocialLinks'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
        <SocialLinks/>
        <TechnologiesPic/>
        </BrowserRouter>
    </>
  )
}

export default App
