import React from 'react'
import logo1 from './images/logo1.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="container flex">
      <img src={logo1} alt="Logo" width={350}></img>
      <nav className='tabs'>
        <ul className='tab'>
          <li><Link to="/" className='nav-item'> Home</Link> </li>
          <li><Link to="/about" className='nav-item'> About</Link> </li>
          <li><a href='#'> Menu</a> </li>
          <li><a href=''> Reservations</a> </li>
          <li><a href=''> Order</a> </li>
          <li><a href=''> LogIn</a> </li>
        </ul>

      </nav>
    </header>
  )
}
