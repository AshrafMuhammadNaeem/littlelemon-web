import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



export const Footer = () => {
    return(

    <footer className="bg-dark py-3">
        <div className="container flex">
            <div>
             <img src= {require("./images/Asset 18@4x.png")} alt="Logo" height={350} width={200}/>
             <p>Copyright &copy; 2022</p>
            </div>

            <nav className="">
               <h4>Doormat <br/> Navigation</h4>
             <ul>
                <li><a href='#'> Home</a> </li>
                <li><a href='#'> About</a> </li>
                <li><a href='#'> Menu</a> </li>
                <li><a href=''> Reservations</a> </li>
                <li><a href=''> Order</a> </li>
                <li><a href=''> LogIn</a> </li>
             </ul>
            </nav>
            <div>
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