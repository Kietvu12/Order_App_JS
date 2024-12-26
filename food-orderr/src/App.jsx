import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOrder/MyOrder'
import Add from './admin/pages/Add/Add'
import List from './admin/pages/List/List'
import Order from './admin/pages/Order/Order'
import AdminNavbar from './admin/component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './admin/component/SideBar/SideBar'
import Menu from './pages/Menu'
import ProtectedRoute from './hook/ProtectedRoute'
import NotFound404 from './component/404/404'
import AdminWrapper from './hook/AdminWrapper'
import AboutUs from './pages/Abuot us/AbuotUs'
import ProductDetail from './pages/ProductDetail/ProducDetail'




const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isProductDetailRoute = location.pathname.includes('/food/');
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <ToastContainer />
        {isAdminRoute ? <AdminNavbar /> : <Navbar setShowLogin={setShowLogin} />}
        <hr />

        {isProductDetailRoute ? (
          <Routes>
            <Route path='/food/:_id' element={<ProductDetail />} />
          </Routes>
        ) : (
          <div className="flex">
            {isAdminRoute && <SideBar />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<PlaceOrder />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/verify' element={<Verify />} />
              <Route path='/myorder' element={<MyOrder />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/food/:_id' element={<ProductDetail />} />

              <Route element={<AdminWrapper />}>
                <Route path="/admin/add" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Add />
                  </ProtectedRoute>
                } />
                <Route path="/admin/list" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <List />
                  </ProtectedRoute>
                } />
                <Route path="/admin/order" element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Order />
                  </ProtectedRoute>
                } />
              </Route>

              <Route path="*" element={<NotFound404 />} />
              <Route path='/404' element={<NotFound404 />} />
            </Routes>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;