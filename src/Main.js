import React from "react";

export const Main = () => {
    return(
        <main>
            <section className="Intro bg-primary my-2 py-2">
                        <div className="restaurant-section">
                <div className="content">
                    <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Frankfurt</h2>
                    <p>Subcontinent's food is known for its rich flavors, aromatic spices, and diverse range of dishes. At our restaurant, we proudly serve authentic Indian cuisine that will tantalize your taste buds. Experience the true essence of India through our carefully crafted menu, featuring traditional favorites and innovative creations. Whether you're craving spicy curries, savory biryanis, or delectable desserts, we have something to satisfy every palate. Reserve a table today and embark on a culinary journey through India.</p>
                    <button className="reserve-button">Reserve a Table</button>
                    </div>
                    <div className="image">
                    <img src="./images/restaurant-food" alt="Indian Food" />
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