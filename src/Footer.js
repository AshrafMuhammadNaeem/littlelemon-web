import React from "react";

export const Footer = () => {
    return(

    <footer className="">
        <div className="flex">
            <div>
             <img src= {require("./images/Asset 18@4x.png")} alt="Logo" height={300} width={200}/>
            
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
            <div class="social">
                <a href="#"><i class="fab fa-github fa-2x"></i></a>
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
    </footer>
    )
}