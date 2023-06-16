
import { About } from './About';
import './App.css';
import { BookingPage } from './BookingPage';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>

       <Header/>
       <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<About />} />
                <Route path="/reservation" element={<BookingPage />} />
                <Route path="/order" element={<About />} />
                <Route path="/logIn" element={<About />} />
              </Routes>
            </Main>
          }
        />
      </Routes>
       <Footer/>

    </>
  );
}

export default App;
