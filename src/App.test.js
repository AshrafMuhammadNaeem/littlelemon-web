import { render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//  Test for BookingForm
test("find the BookingForm heading", () =>{
  render(<BookingForm />);
  // add heading in a vairiable
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});
