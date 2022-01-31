// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interest'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid">
      <div className="container shadow">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App
