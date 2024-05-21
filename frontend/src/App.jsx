import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Example API call to test the connection
    const fetchData = async () => {
      try {
        const response = await axios.get(`${https://m1wala-g.onrender.com}/'/',/cart','/myorders','/verify');
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch data from the API');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
