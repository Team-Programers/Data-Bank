import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './pages/user/Home';
import Marketplace from './pages/user/Marketplace';
import ProductDetail from './pages/user/ProductDetail';
import Login from './pages/user/Login';
import Register from './pages/user/Register';

import SellProduct from './pages/user/SellProduct';

const Categories = () => <div className="p-20 text-center text-2xl font-bold text-on-surface bg-background">Categories Page Coming Soon</div>;
const HowItWorks = () => <div className="p-20 text-center text-2xl font-bold text-on-surface bg-background">How It Works Page Coming Soon</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/marketplace" element={<UserLayout><Marketplace /></UserLayout>} />
      <Route path="/product/:id" element={<UserLayout><ProductDetail /></UserLayout>} />
      <Route path="/categories" element={<UserLayout><Categories /></UserLayout>} />
      <Route path="/how-it-works" element={<UserLayout><HowItWorks /></UserLayout>} />
      <Route path="/sell-product" element={<UserLayout><SellProduct /></UserLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<UserLayout><Home /></UserLayout>} />
    </Routes>
  );
}


export default App;

