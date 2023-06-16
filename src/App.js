
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
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<Main><About /></Main>} />
        <Route path="/menu" element={<Main><About /></Main>} />
        <Route path="/reservation" element={<Main><BookingPage /></Main>} />
        <Route path="/order" element={<Main><About /></Main>} />
        <Route path="/logIn" element={<Main><About /></Main>} />
       </Routes>
       <Footer/>

    </>
  );
}

export default App;
