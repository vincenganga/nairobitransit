import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Routes from './pages/Routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Render your passenger discovery dashboard layout directly here
  return (
    <Routes />
  )
}

export default App