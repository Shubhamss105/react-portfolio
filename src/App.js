import React from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import HomeNew from './components/HomeNew'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <HomeNew/>
      <Services/>
      <Projects/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
