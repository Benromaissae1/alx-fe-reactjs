import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
