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
          <li><Link to="/menu" className='nav-item'> Menu</Link> </li>
          <li><Link to="/reservation" className='nav-item'> Reservations</Link> </li>
          <li><Link to="/order" className='nav-item'> Order</Link> </li>
          <li><Link to="/login" className='nav-item'> LogIn</Link> </li>
        </ul>

      </nav>
    </header>
  )
}
