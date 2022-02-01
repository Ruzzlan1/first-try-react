// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Info from './components/Info'
import MainContent from './components/Content'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid">
      <div className="container shadow">
        <Info />
        <MainContent
          title="About"
          article="I am frontend developer with a particular interest in making things
          simple and automating daily tasks.I try to my best every day.Sometimes
          not my best :d. But that is life.Everyone has problems,then fuck it :)"
        />
        <MainContent
          title="Interests"
          article="I just typo nerd guy doing nerdy things :d.I playing games a lot.I love photographing,and also i do sports (dont lie)"
        />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App
