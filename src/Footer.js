import React from "react";

export const Footer = () => {
    return(
        <footer>
            <img src= {require("./images/Asset 18@4x.png")} alt="Logo" height={300} width={200}/>
            <h4>Doormat <br/> Navigation</h4>
            <ul>
            <li><a href='#'> Home</a> </li>
            <li><a href='#'> About</a> </li>
            <li><a href='#'> Menu</a> </li>
            <li><a href=''> Reservations</a> </li>
            <li><a href=''> Order</a> </li>
            <li><a href=''> LogIn</a> </li>
            </ul>
            <h4>Contact </h4>
            <p>Address</p>
            <p>PhoneNumber</p>
            <p>Email</p>
        </footer>
    )
}