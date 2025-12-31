import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart.jsx';
import Checkout from './pages/checkout.jsx';
import Access from './pages/access.jsx';
import Viewbook from './pages/viewbook.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Access/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/access" element={<Access/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/viewbook" element={<Viewbook/>} />
      </Routes>
    </Router>
  );
}

export default App
