import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import UserLayout from './layouts/UserLayout';
import Home from './pages/user/Home';
import Marketplace from './pages/user/Marketplace';
import ProductDetail from './pages/user/ProductDetail';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Categories from './pages/user/Categories';
import SellProduct from './pages/user/SellProduct';
import Dashboard from './pages/admin/Dashboard';
import ApproveListings from './pages/admin/ApproveListings';
import ManageCategories from './pages/admin/ManageCategories';
import ManageProducts from './pages/admin/ManageProducts';
import ManageUsers from './pages/admin/ManageUsers';
import { Otp } from './pages/user/otp';

const HowItWorks = () => <div className="p-20 text-center text-2xl font-bold text-on-surface bg-background">How It Works Page Coming Soon</div>;

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/marketplace" element={<UserLayout><Marketplace /></UserLayout>} />
      <Route path="/product/:id" element={<UserLayout><ProductDetail /></UserLayout>} />
      <Route path="/categories" element={<UserLayout><Categories /></UserLayout>} />
      <Route path="/how-it-works" element={<UserLayout><HowItWorks /></UserLayout>} />
      <Route path="/sell-product" element={<UserLayout><SellProduct /></UserLayout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/approve-listings" element={<ApproveListings />} />
      <Route path="/admin/categories" element={<ManageCategories />} />
      <Route path="/admin/products" element={<ManageProducts />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="*" element={<UserLayout><Home /></UserLayout>} />
      <Route path='/otp' element={<Otp/>}/>
      </Routes>
    </>
  );
}


export default App;

