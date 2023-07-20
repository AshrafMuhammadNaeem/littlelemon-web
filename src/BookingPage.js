// import React, { useReducer, useEffect, useState } from 'react';
// import { BookingForm } from './BookingForm';

// function updateTimes(state, selectedDate) {
//   // Call the fetchAPI function here and pass the selectedDate
//   const availableTimes = fetchAPI(selectedDate);
//   return availableTimes;
// }

// function initializeTimes() {
//   // Call the fetchAPI function here with today's date
//   const today = new Date().toISOString().split('T')[0];
//   const availableTimes = fetchAPI(today);
//   return availableTimes;
// }

// const seededRandom = function (seed) {
//   var m = 2**35 - 31;
//   var a = 185852;
//   var s = seed % m;
//   return function () {
//       return (s = s * a % m) / m;
//   };
// }

// const fetchAPI = function(date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for(let i = 17; i <= 23; i++) {
//       if(random() < 0.5) {
//           result.push(i + ':00');
//       }
//       if(random() < 0.5) {
//           result.push(i + ':30');
//       }
//   }
//   return result;
// };
// const submitAPI = function(formData) {
//   return true;
// };

// // function fetchAPI(date) {
// //   // Implement the logic to fetch the available times from the API
// //   // Example:
// //   // return fetch('/api/availableTimes?date=' + date)
// //   //   .then(response => response.json())
// //   //   .then(data => data.availableTimes);
// //   // Replace this with the actual API call or fetch logic
// //   // to retrieve the available times for the specified date
// // }

// export const BookingPage = () => {
//   const [data, setData] = useState();

//   const [time, dispatch] = useReducer(updateTimes, null, initializeTimes);

//   const fetchData = () => {
//     // Fetch the data from the API using the fetchAPI function
//     const apiData = fetchAPI(new Date());
//     console.log(apiData)
//     setData(apiData);
    
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const availableTimes = ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];

//   return (
//     <>
//       <BookingForm time={time} dispatch={dispatch} availableTimes={availableTimes} />
//     </>
//   );
// };

import React, { useReducer, useEffect, useState } from 'react';
import { BookingForm } from './BookingForm';
import { fetchAPI, submitAPI } from "./Api";


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
    <BookingForm
      dispatch={dispatch}
      initializeTimes={initializeTimes}
      availableTimes={availableTimes}
      submitForm={submitForm}
      formData={formData}
      setFormData={setFormData}
    />
  );

};
