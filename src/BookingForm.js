import React from "react";
import { useState } from "react";

export  const  BookingForm = () => {
    const [date, setDate] = useState()
    const [time, setTime] = useState("17:00")
    const [guestnumber, setGuestnumber] = useState("1")
    const [occasion, setOccasion] = useState("Birthday")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        console.log(date);
        console.log(guestnumber);
        console.log(occasion);
        setDate();
        setTime("17:00")
        setGuestnumber("1")
        setOccasion("Birthday");
        
    }
    return(
      <div className="booking-form">
            <form onSubmit={handleSubmit}  style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={e => setDate (e.target.value)}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestnumber} onChange={(e) => setGuestnumber(e.target.value)}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Work Promotion">Work Promotion</option>
                        <option value="Engagement">Engagement</option>
                    </select>
                    <input type="submit" value="Make Your reservation"/>
            </form>
      </div>
    )
}