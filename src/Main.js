import React from "react";
import imgfood from './images/imgfood.jpg'

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
            <section>
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