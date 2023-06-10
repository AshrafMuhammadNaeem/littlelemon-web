
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
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
