import React from 'react'
import logo from './images/img.png'
import Email from '@mui/icons-material/EmailOutlined';
import Contact from '@mui/icons-material/AddIcCallOutlined';
import Location from '@mui/icons-material/AddLocationAltOutlined';
import { Button } from '@mui/material';
const Main = () => {
  return (
    <div className='main'>
      <div className='contact'>
        <img src={logo} height='150px' width='150px' />
        <p><a href='#'><Email/>aditya123@gmail.com</a></p>
        <p><a href='#'><Contact/>1234567890</a></p>

        <p><a href="#"><Location/>Bhimavaram</a></p>
      </div>
      <div className='form'>
        <h1>Get In Touch</h1>
        <form action="#">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input className='message' type="text" placeholder='Type your Message Here' />
          <a>          <Button variant="contained" color="success" className='submit-btn'>Submit</Button></a>
        </form>
      </div>
    </div>
  )
}

export default Main