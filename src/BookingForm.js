import React, {useState, useRef} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css'
import restaurant from './images/restaurant.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faChampagneGlasses, faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';

export  const  BookingForm = ({
      availableTimes,
      dispatch,
      setFormData,
      formData,
      submitForm,
    }) => {

      const inputRef = useRef(null);
      const [isDateSelected, setIsDateSelected] = useState(false);
      const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
      const [isTimeOpen, setIsTimeOpen] = useState(false);

      const handleDatePickerOpen = () => {
        setIsDatePickerOpen(true);
      };
    
      const handleDatePickerClose = () => {
        setIsDatePickerOpen(false);
      };

      // style controlling for Time Selection 
      const handleTimeOpen = () => {
        setIsTimeOpen(true);
        inputRef.current.focus()
      };
    
      const handleTimeClose = () => {
        inputRef.current.blur()
        setIsTimeOpen(false);
      };

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
              time: "Select Time",
              occasion: "None",
              fname: "",
              lname: "",
              requests: "",
              email: ""
            });
            setIsDateSelected(false);
            alert(`Reservation successfull for: ${formData.fname} ${formData.lname}. A confirmation email will be sent to your address with the details of your reservation.`);
          };

          const handleDateSelection = (date) => {
            setIsDateSelected(true);
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
      <div className="form-container">
          <div className="booking-form">
                <h2> Reservations </h2>
              <form onSubmit={handleSubmit}  >
                    <div className="form">
                    <div className="icon-wraper">
                      <label htmlFor="res-date"> Date</label>
                      <DatePicker  className={isDatePickerOpen ? "res-date-inactive " : "res-date-active"} name= "date"
                        placeholderText="Select Date"
                        selected={isDateSelected ? formData.date : null} 
                        onChange={(date) => { handleDateChange(date); handleDateSelection(date); }}
                        onFocus={handleDatePickerOpen}
                        onBlur={handleDatePickerClose}
                        min={new Date().toISOString().split("T")[0]}
                        />
                      <FontAwesomeIcon icon={ isDatePickerOpen ? faChevronUp : faChevronDown} className={isDatePickerOpen ? "icon-2-inactive " : "icon-2-active"} />
                      <FontAwesomeIcon icon={faCalendar} fontSize={25} className={isDatePickerOpen ? "icon-inactive " : "icon-active"} />
                    </div>
                    <div className="icon-wraper">
                      <label htmlFor="res-time">Choose time</label>
                            <FontAwesomeIcon icon={faClock} fontSize={25} className="time-icon" />
                            <input
                              type="text"
                              ref={inputRef}
                              className={isTimeOpen ? "res-date-inactive " : "res-date-active"}
                              list="time-options"
                              // placeholder="Select Time"
                              onFocus={handleTimeOpen}
                              onBlur={handleTimeClose}
    
                              
                            />
                            <datalist id="time-options">
                              {availableTimes.availableTimes.map((time, idx) => (
                                <option key={idx} value={time} 
                                onChange={(e) => { handleTimeSelection(e, time); handleChange(e)}}
                                disabled={availableTimes.selectedTime === time}>{time}</option>
                              ))}
                            </datalist>
                            {/* <select className="time-input" > <option defaultValue=""> Select Time  </option>
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
                            </select> */}
                            <FontAwesomeIcon icon={ isTimeOpen ? faChevronUp : faChevronDown} className={ isTimeOpen ? "icon-2-inactive" : "icon-2-active"}/>
                    </div>
                    <div className="icon-wraper">
                      <label htmlFor="guests">Number of guests</label>
                      <FontAwesomeIcon icon={faUser} fontSize={25} className="guests-icon" />
                      <input type="number" placeholder="1" min="1" max="10" id="guests" className="guests-input"
                      name="guests" value={formData.guests} 
                      onChange={handleChange}
                      />
                        
                    </div>
                    <div className="icon-wraper">
                    <label htmlFor="occasion">Occasion</label>
                    
                    <FontAwesomeIcon icon={faChampagneGlasses} fontSize={25} className="occasion-icon" />
                    <select id="occasion" name="occasion" className="occasion-input" value={formData.occasion} onChange={handleChange}>
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
                            <div>
                               <input type="submit" value="Make Your reservation"/>
                             </div>

                    </div>

              </form>

            </div>

                  <div>
                        <img src={restaurant}  width={200}  alt="restaurant inside"></img>
                        <img src={restaurant}  width={200}  alt="restaurant inside"></img>
                        <img src={restaurant}  width={200}  alt="restaurant inside"></img>
                    </div>
                    
      </div>
    )
}