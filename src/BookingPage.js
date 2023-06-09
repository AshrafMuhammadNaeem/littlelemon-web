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

function updateTimes(state, selectedDate) {
  return fetchAPI(selectedDate);
}

function initializeTimes() {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
}

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function (date) {
  return new Promise((resolve, reject) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }

    // Simulating asynchronous behavior with a setTimeout
    setTimeout(() => {
      resolve(result);
    }, 1000); // Simulate 1 second delay

    // In a real-world scenario, you would make an actual API request here
    // using fetch or axios and return the Promise that resolves to the data
  });
};

const submitAPI = function (formData) {
  return true;
};

export const BookingPage = () => {
  const [data, setData] = useState();
  const [time, dispatch] = useReducer(updateTimes, null, initializeTimes);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchAPI(new Date());
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const availableTimes = ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];

  return (
    <>
      <BookingForm time={time} dispatch={dispatch} availableTimes={availableTimes} />
    </>
  );
};
