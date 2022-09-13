import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Math-Magician" element={<Home />} />
        <Route path="/Math-Magician/calculator" element={<Calculator />} />
        <Route path="/Math-Magician/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
