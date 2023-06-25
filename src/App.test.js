import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './BookingForm';
import { BookingPage } from './BookingPage';
import { initializeTimes, updateTimes } from "./BookingPage";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//  Test for BookingForm
test("find the BookingForm heading", () =>{
  render(<BookingPage />);
  // add heading in a vairiable
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});


// Unit test for initializeTimes
test("initializeTimes returns the expected initial state", () => {
  // render(<BookingForm />);
  const expectedInitialState = [
    '17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'
  ];
  const initialState = initializeTimes();
  expect(initialState).toEqual(expectedInitialState);
});

// Unit test for updateTimes
test("updateTimes returns the same state value", () => {
  // render(<BookingForm />);
  const state = [
    '17:00 pm', '18:00 pm', '19:00', '20:00', '21:00', '22:00'
  ];
  const selectedDate = "2023-06-18"; // example selected date
  const updatedState = updateTimes(state, selectedDate);
  expect(updatedState).toEqual(state);
});

