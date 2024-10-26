import { useState } from 'react'
import TechnologiesPic from './Components/TechnologiesPic'
import SocialLinks from './Components/SocialLinks'
import { BrowserRouter } from 'react-router-dom'
import Introduction from './Components/Introduction'
import Footer from './Components/Footer'
import ProjDS from './Components/ProjDS'

function App() {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <>
      <BrowserRouter>
        <Introduction />
        <SocialLinks />
        <TechnologiesPic />
        <ProjDS/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
