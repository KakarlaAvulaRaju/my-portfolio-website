import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
