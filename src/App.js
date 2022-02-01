// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Info from './components/Info'
import MainContent from './components/Content'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { portfolio } from '../data.js'

function App() {
  // return from data
  const Content = portfolio.map((prt) => {
    return <MainContent title={prt.title} content={prt.content} />
  })
  return (
    <div className="grid">
      <div className="container shadow">
        <Info />
        {Content}
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App
