import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import "./App.css"
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'

const App = () => {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
          <Header/>
          <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  )
}

export default App 