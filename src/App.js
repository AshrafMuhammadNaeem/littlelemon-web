
import { About } from './About';
import './App.css';
import { BookingPage } from './BookingPage';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
// import { Router,Routes, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>

        <Router>
              <Header />
              
              
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<About />} />
                <Route path="/reservation" element={<BookingPage />} />
                <Route path="/order" element={<About />} />
                <Route path="/logIn" element={<About />} />
              
              
              <Footer />
         </Router>

    </>
  );
}

export default App;
