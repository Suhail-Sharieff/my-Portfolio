import { useState } from 'react'
import TechnologiesPic from './Components/TechnologiesPic'
import SocialLinks from './Components/SocialLinks'
import { BrowserRouter } from 'react-router-dom'
import Introduction from './Components/Introduction'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Introduction />
        <SocialLinks />
        <TechnologiesPic />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
