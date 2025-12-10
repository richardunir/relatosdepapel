import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Checkout from './pages/checkout';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App
