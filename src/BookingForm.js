import React from "react";
import { useState } from "react";
import styles from './BookingForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faChampagneGlasses, faPerson } from '@fortawesome/free-solid-svg-icons';

export  const  BookingForm = (props) => {
    const { availableTimes, dispatch } = props;

    // const availableTimes = ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];
    const [date, setDate] = useState()
    // const [time, setTime] = useState("17:00")
    const [guestnumber, setGuestnumber] = useState("1")
    const [occasion, setOccasion] = useState("Birthday")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        alert("Reservation form successfully submitted")
        setDate();
        // props.setTime("17:00")
        setGuestnumber("1")
        setOccasion("Birthday");
        
    }
    return(
      <div className="booking-form">
        <h2> Booking Form </h2>
            <form onSubmit={handleSubmit}  >
              <div className="form"> 
              <div>
              <label htmlFor="res-date"> <FontAwesomeIcon icon={faCalendar} fontSize={20} />Choose date</label>
              <FontAwesomeIcon icon={faCalendar} fontSize={20} /> <input type="date" id="res-date" value={date} onChange={(e) => { setDate(e.target.value); dispatch(e.target.value); }}/>
              </div>
              <div>
              <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={props.time} onChange={(e) => props.setTime(e.target.value)}>
                                        {availableTimes.map((availableTime) => (
                                          <option value={availableTime}>{availableTime}</option>

                                        ))}
                    </select>
              </div>
              <div>
              <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestnumber} onChange={(e) => setGuestnumber(e.target.value)}/>
                   
              </div>
              <div>
              <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Work Promotion">Work Promotion</option>
                        <option value="Engagement">Engagement</option>
                    </select>
              </div>

                      <div>
                      <label htmlFor="indoor">Indoor seating</label>
                      <input type="radio" id="indoor" name="indoor seating" value= "Indoor Seating"/>
                      </div>
                      <div>
                      <label htmlFor="indoor">Outdoor seating</label>
                      <input type="radio" id="outdoor" name="outdoor seating" value= "Outdoor Seating"/>
                      </div>
                     

              </div>
              
                    <input type="submit" value="Make Your reservation"/>
            </form>
      </div>
    )
}