import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import Categories from '@pages/categories.jsx';
import Cart from '@pages/cart.jsx';
import Checkout from '@pages/checkout.jsx';
import Access from '@pages/access.jsx';
import Viewbook from '@pages/viewbook.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/access" element={<Access />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/viewbook" element={<Viewbook />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App
