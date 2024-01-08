import React from 'react'
import './App.css';
import effect from './components/images/shade.png';
import Main from './components/main'

const App = () => {
  return (
    <div className='page'>
      <img className='top' src={effect} height='150px' width='150px' />
      <img className='bottom' src={effect} height='150px' width='150px' />
      <div className='container'>
        <Main />
      </div>
    </div>
  )
}

export default App