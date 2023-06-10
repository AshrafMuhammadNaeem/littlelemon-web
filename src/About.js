import React from 'react'

export const About = () => {
  return (
    <section className="about-section">
                <div className="about">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Frankfurt</h2>
                        <p>
                        Discover the perfect fusion of Indian and Mediterranean cuisine at our restaurant in Frankfurt. Owned by Naeem and Ahmad, our passion for gastronomy shines through in every dish. With an extensive menu and expertly crafted flavors, we offer a delightful culinary journey for all. Experience the authentic essence of both cultures as Naeem, a seasoned chef, creates dishes with love and precision. Join us for a memorable dining experience where aromas, spices, and warm hospitality transport you to a world of culinary bliss.
                        </p>
                    </div>
                    <div className="about-img">
                        <img src= {require("./images/Mario and Adrian A.jpg")} alt="Naeem & Ahmad photo" width={500} className="img1"/>
                    </div>
                </div>
            </section>
  )
}
