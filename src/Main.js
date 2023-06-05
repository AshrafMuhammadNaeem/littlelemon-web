import React from "react";
import imgfood from './images/imgfood.jpg'
import greeksalad from './images/greeksalad.jpg'
import biryani from './images/biryani.jpg'
import lemondessert from './images/lemondessert.jpg'

export const Main = () => {
    return(
        <main>
            <section className="restaurant-section">
                        <div className="">
                <div className="content">
                    <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Frankfurt</h2>
                    <p>We are a family owned sub-continent restaurant, focused on traditional recipes served with a modern twist. </p>
                    <button className="reserve-button">Reserve a Table</button>
                    </div>
                    <div className="image">
                    <img src={imgfood} alt="Indian Food" width={300} height={350} />
                    </div>
                </div>
                </div>

            </section>
            <section className="container special-section">
                <div className="jumbotron">
                    <h2> This week's specials</h2>
                    <button className="btn-primary">
                        Order online
                    </button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={greeksalad} alt="Greek Salad" className="grreksalad" width={200} height={200}/>
                        <h6>Greek Salad</h6>
                        <p>$19.99</p>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives,
                           and ours Frankfurt style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order a deliver</p> <i className="delivery-icon"></i>
                    </div>
                    <div className="card">
                        <img src={biryani} alt="Biryani" className="biryani" width={200} height={200}/>
                        <h6>Biryani</h6>
                        <p>$19.99</p>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives,
                           and ours Frankfurt style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order a deliver</p> <i className="delivery-icon"></i>
                    </div>
                    <div className="card">
                        <img src={lemondessert} alt="Lemon Dessert" className="lemondessert" width={200} height={200}/>
                        <h6>Lemon Dessert</h6>
                        <p>$19.99</p>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives,
                           and ours Frankfurt style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <p>Order a deliver</p> <i className="delivery-icon"></i>
                    </div>

                </div>


                This weeks Specials
            </section>
            <section>
                Testimonials
            </section>
            <section>
                About us
            </section>
            
            
            
        </main>
    )
}