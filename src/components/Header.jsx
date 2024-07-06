import React from 'react'
import Logo from './header/Logo'
import Navbar from './header/Navbar'

const Header = () => {
  return (
    <header className="bg-blue-950">
      <div className="container mx-auto px-2 flex md:flex-row flex-col items-center md:items-end justify-between">
      <Logo />
      <Navbar />
      </div>
    </header>
  )
}

export default Header