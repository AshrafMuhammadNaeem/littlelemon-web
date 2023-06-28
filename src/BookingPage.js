import React, {useReducer, useEffect} from 'react'
import { BookingForm } from './BookingForm'

function updateTimes(state, selectedDate) {
  // Logic to update availableTimes based on the selectedDate
  // For now, return the same available times
  return ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];
}

function initializeTimes() {
  // Logic to initialize availableTimes
  return ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];
}




export const BookingPage = () => {
  const [time, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const availableTimes = ['17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'];
  return (
    <>
      <BookingForm time={time} dispatch={dispatch} availableTimes={availableTimes} />
    </>
  )
}
