import React, {useState} from 'react'
import { BookingForm } from './BookingForm'


export const BookingPage = () => {
  const [time, setTime] = useState("17:00")
  return (
    <>
      <BookingForm time={time} setTime={setTime}/>
    </>
  )
}
