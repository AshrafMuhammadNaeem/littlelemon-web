import React, {useState, useReducer} from 'react'
import { BookingForm } from './BookingForm'


function reducer(selectedDate) {
    
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}


export const BookingPage = () => {

  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const [time, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <BookingForm time={time} dispatch={dispatch}/>
    </>
  )
}
