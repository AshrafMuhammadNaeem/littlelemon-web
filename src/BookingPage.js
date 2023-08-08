
import React, { useReducer, useState } from 'react';
import { BookingForm } from './BookingForm';
import { fetchAPI, submitAPI } from "./Api";
import { CustomerDetails } from './CustomerDetails';


export const BookingPage = () => {

  const today = new Date();

  
  const [formData, setFormData] = useState({
    date: today,
    guests: "1",
    time: "",
    occasion: "None",
    requests: "",
    fname: "",
    lname: "",
    email: "",
  });

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      console.log(formData);
      setFormData({
        date: today,
        guests: "",
        time: "",
        occasion: "None",
        requests: "",
        fname: "",
        lname: "",
        email: "",
      });
    }
  };

  const initializeTimes = () => {
    const availableTimes = fetchAPI(today);

    return {
      selectedTime: null,
      availableTimes: availableTimes,
    };
  };

  
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "SELECT_TIME":
        return {
          ...state,
          selectedTime: action.payload,
        };
      case "SELECT_DATE":
        return {
          ...state,
          availableTimes: fetchAPI(action.payload),
        };
      default:
        return state;
    }
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
       <BookingForm
      dispatch={dispatch}
      initializeTimes={initializeTimes}
      availableTimes={availableTimes}
      submitForm={submitForm}
      formData={formData}
      setFormData={setFormData}
    />
    <CustomerDetails 
    formData={formData}
    submitForm={submitForm}
    setFormData={setFormData}
    />

    </div>
  );

};
