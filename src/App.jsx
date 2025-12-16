import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Checkout from './pages/checkout';
import Access from './pages/access.jsx';
import Viewbook from './pages/viewbook.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/access" element={<Access/>} />
        <Route path="/viewbook" element={<Viewbook/>} />
      </Routes>
    </Router>
  );
}

export default App
