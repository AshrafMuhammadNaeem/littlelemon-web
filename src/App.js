
import { About } from './About';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
     

       <Header/>
       <Main/>
       <Routes>
         <Route path="/about" element={<About />}></Route>
         <Route path="/menu" element={<About />}></Route>
         <Route path="/reservation" element={<About />}></Route>
         <Route path="/order" element={<About />}></Route>
         <Route path="/logIn" element={<About />}></Route>
       </Routes>
       <Footer/>
       

    </>
  );
}

export default App;
