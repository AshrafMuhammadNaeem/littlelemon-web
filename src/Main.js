import React from "react";
import imgfood from './images/imgfood.jpg'
import greeksalad from './images/greeksalad.jpg'
import biryani from './images/biryani.jpg'
import lemondessert from './images/lemondessert.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faStar } from '@fortawesome/free-solid-svg-icons';
import customer1 from './images/customer1.JPG';
import customer2 from './images/customer2.JPG';
import customer3 from './images/customer3.JPG';
import customer4 from './images/customer4.JPG';


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
                    <img src={imgfood} alt="Indian Food"  width={300} height={350} />
                    </div>
                </div>
                </div>

            </section>
            <section className="container">
               <div className="specials">
                    <h2> This Week's Specials!</h2>
                    <button className="btn-primary">
                        Online Menu
                    </button>
                </div>
                <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <img src= {greeksalad} alt="GreekSalad" className= "dish" />
                    </div>
                    <div className="card-content">
                        <div className="price">
                        <h6>Greek Salad</h6>
                        <p>$19.99</p>
                        </div>

                        <p>The famous Greek salad of crispy lettuce, peppers, olives,
                           and ours Frankfurt style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <div className="delivery">
                        <p>Order a deliver</p> <FontAwesomeIcon icon={faMotorcycle} fontSize={20} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src= {biryani} alt="Biryani" className= "dish" />
                    </div>
                    <div className="card-content">
                        <div className="price">
                        <h6>Biryani</h6>
                        <p>$22.99</p>
                        </div>

                        <p>Cooked in traditional Desi ghee with crispy chicken and Pakistani special spices. 
                            Served with special raita and extra chilled Coke.
                        </p>
                        <div className="delivery">
                        <p>Order a deliver</p> <FontAwesomeIcon icon={faMotorcycle} fontSize={20} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src= {lemondessert} alt="Lemon Dessert" className= "dish" />
                    </div>
                    <div className="card-content">
                        <div className="price">
                        <h6>Lemon Dessert</h6>
                        <p>$15.99</p>
                        </div>

                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagines.
                        </p>
                        <div className="delivery">
                        <p>Order a deliver</p> <FontAwesomeIcon icon={faMotorcycle} fontSize={20} />
                        </div>
                    </div>
                </div>

                </div>
            </section>
            {/* Testimonials Section */}
            <section className="Testimonials">
                <h1 id="review"> Testimonials </h1>
                <div className="cards">
                    <div className="card-1">
                        <div className="review-container">
                           <h5> Rating 5/5 <FontAwesomeIcon icon={faStar} /></h5>
                           <div className="customer-img">
                             <img src={customer1} alt="customer" width={50} />
                             <h6> Biyyah</h6>
                           </div>
                           <p><em>Great experience </em> </p>

                        </div>
                    </div>

                    <div className="card-2">
                        <div className="review-container">
                           <h5> Rating 5/5 <FontAwesomeIcon icon={faStar} /></h5>
                           <div className="customer-img">
                             <img src={customer2} alt="customer" width={50} />
                             <h6> Sonya</h6>
                           </div>
                           <p><em>Loved it! </em> </p>

                        </div>
                    </div>

                    <div className="card-3">
                        <div className="review-container">
                           <h5> Rating 4/5 <FontAwesomeIcon icon={faStar} /></h5>
                           <div className="customer-img">
                             <img src={customer3} alt="customer" width={50} />
                             <h6> Harun</h6>
                           </div>
                           <p><em>Amazing atmosphere</em> </p>

                        </div>
                    </div>

                    <div className="card-4">
                        <div className="review-container">
                           <h5> Rating 5/5 <FontAwesomeIcon icon={faStar} /></h5>
                           <div className="customer-img">
                             <img src={customer4} alt="customer" width={50} />
                             <h6> Saleem</h6>
                           </div>
                           <p><em>Recommend this </em> </p>

                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="about">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Frankfurt</h2>
                        <p>
                        Welcome to our restaurant! Owned by Naeem and Ahmad, our culinary haven is nestled in the vibrant city of Frankfurt. With a passion for gastronomy, we bring together the best of two worlds - Indian and Mediterranean cuisine. Our extensive menu features a tantalizing fusion of flavors, offering a delightful culinary journey for all palates. Naeem's expertise as a seasoned chef ensures each dish is crafted with love and precision, showcasing the authentic essence of both cultures. Join us for a memorable dining experience where the aromas, spices, and warm hospitality transport you to a world of culinary bliss.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}