import React from 'react'
import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Body state={props.state} disputch={props.disputch} />
      <Footer />
    </div>
  )
}

export default App
