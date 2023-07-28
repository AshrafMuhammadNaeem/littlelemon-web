import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faChampagneGlasses, faPerson, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export  const  BookingForm = ({
      availableTimes,
      dispatch,
      setFormData,
      formData,
      submitForm,
    }) => {
    

      const handleTimeSelection = (e, time) => {
            e.preventDefault();
            dispatch({ type: "SELECT_TIME", payload: time });
          };

          const handleSubmit = (e) => {
            e.preventDefault();
            submitForm(formData);
            setFormData({
              date: new Date(),
              guests: "",
              time: "",
              occasion: "None",
              fname: "",
              lname: "",
              requests: "",
              email: ""
            });
            alert(`Reservation successfull for: ${formData.fname} ${formData.lname}. A confirmation email will be sent to your address with the details of your reservation.`);
          };

          const handleDateSelection = (date) => {
            
            dispatch({ type: "SELECT_DATE", payload: date});
          };

          // onChange={(date) => handleChange({ target: { name: "date", value: date } })}

          const handleDateChange = (date) => {
            setFormData((data) => ({
              ...data,
              date,
            }));
          };
        
          // const handleDateChangeAndSelection = (date) => {
          //   handleDateChange(date);
          //   handleDateSelection(e); // You can pass `date` or `e` here depending on what `handleDateSelection` expects
          // };
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((data) => ({
              ...data,
              [name]: value,
            }));
          };

        

    return(
      <div className="booking-form">
        <h2> Booking Form </h2>
            <form onSubmit={handleSubmit}  >
              <div className="form">
              <div className="icon-wraper">
              <label htmlFor="res-date"> Date</label>
               <DatePicker  id="res-date" name= "date"
                placeholderText="Select Date"
                selected={formData.date ? null : "Select Date"} 
                onChange={(date) => { handleDateChange(date); handleDateSelection(date); }} 
                min={new Date().toISOString().split("T")[0]} 
                />
              <FontAwesomeIcon icon={faChevronDown} className="icon-2" />
              <FontAwesomeIcon icon={faCalendar} fontSize={30} className="icon" />
              </div>
              <div>
              <label htmlFor="res-time">Choose time</label>
                    <FontAwesomeIcon icon={faClock} fontSize={20} /><select>
                                        {availableTimes.availableTimes.map((time, idx) => (
                                          <option key={idx}
                                          value={time}
                                          onChange={(e) => {
                                            handleTimeSelection(e, time);
                                            handleChange(e);
                                          }}
                                          disabled={availableTimes.selectedTime === time}>
                                            {time}</option>

                                        ))}
                    </select>
              </div>
              <div>
              <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange}/>
                   
              </div>
              <div>
              <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
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