import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Service from './Components/Service'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
<Navbar/>
<Hero/>
<Features/>
<Service/>
<Footer />

    </div>
  )
}

export default App
