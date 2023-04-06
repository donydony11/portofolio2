import React from 'react'
import Contact  from "./Contact"

import Logo from '../assets/logo.png'

const Header = () => {
  return (<header className='py-8' >

  <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
        <a href='#'>
        <img src={Logo} alt='Logo' className='w-100% h-100% mr-[200px]' />
        </a>

        <button className='btn btn-lg cursor-pointer' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Work with me</button>

      </div> 

  </div>
  </header>
  )  
}

export default Header;
