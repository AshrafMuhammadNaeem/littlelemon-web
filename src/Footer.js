import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



export const Footer = () => {
    return(

    <footer className="bg-dark py-3">
        <div className="container flex">
            <div>
             <img src= {require("./images/Asset 18@4x.png")} alt="Logo" height={350} width={200}/>
             <p>Copyright &copy; 2023</p>
            </div>

            <nav className="footer-nav">
               <h4>Doormat <br/> Navigation</h4>
             <ul>
                <li><Link to="/" className='nav-item'> Home</Link> </li>
                <li><Link to="/about" className='nav-item'> About</Link> </li>
                <li><Link to="/menu" className='nav-item'> Menu</Link> </li>
                <li><Link to="/reservation" className='nav-item'> Reservations</Link> </li>
                <li><Link to="/order" className='nav-item'> Order</Link> </li>
                <li><Link to="/login" className='nav-item'> LogIn</Link> </li>
             </ul>
            </nav>
            <div className='footer-nav'>
                <h4>Contact </h4>
                <p>Address</p>
                <p>PhoneNumber</p>
                <p>Email</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faFacebook}  className="social-icon"/>
                <FontAwesomeIcon icon={faInstagram}  className="social-icon"/>
            </div>
        </div>
    </footer>
    )
}