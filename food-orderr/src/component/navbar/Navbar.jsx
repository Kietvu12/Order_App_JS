import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { Mail, Phone, MapPin, ChevronDown, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
        }
    }, [setToken, token])

    const logOut = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div className='w-full'>
            <div className="bg-[#37A345] text-white py-2 px-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Address, Fax 99 Roving St, Big City PKU</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>hello@awesomesite.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+123-234-1234</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-gray-200 transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><Youtube className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><Instagram className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar'>
                <Link to='/' className="flex items-center gap-2">
                    <img src={assets.logoaya} alt="Logo" className="logo" />
                    <span className="text-gray-900 font-semibold text-lg">Ayafood</span>
                </Link>
                <div className="navbar-menu">
                    <ul className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0">
                        <li><a href="/" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">Trang Chủ</a></li>
                        <li><a href="/about-us" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">Về chúng tôi</a></li>
                        <a href="/menu" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium ">Thực đơn</a>

                    </ul>
                </div>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="Search Icon" />
                    <div className="navbar-search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="Cart Icon" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token ? (
                        <button onClick={() => setShowLogin(true)}>Sign In</button>
                    ) : (
                        <div className="navbar-profile">
                            <img src={assets.profile_icon} alt="Profile Icon" />
                            <ul className="navbar-profile-dropdown">
                                <li onClick={() => navigate('/myorder')}>
                                    <img src={assets.bag_icon} alt="Orders Icon" />
                                    <p>Orders</p>
                                </li>
                                <hr />
                                <li onClick={logOut}>
                                    <img src={assets.logout_icon} alt="Logout Icon" />
                                    <p>Log Out</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
