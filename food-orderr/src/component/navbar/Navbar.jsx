import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { Mail, Phone, MapPin, Menu, ChevronDown, Facebook, Twitter, Youtube, Instagram, User } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const navigate = useNavigate()
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
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Youtube className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-gray-200 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar'>
                <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
                <div className="navbar-menu">
                    <ul className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0">
                        <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">HOMEPAGE</a></li>
                        <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">ABOUT US</a></li>
                        <li className="relative group">
                            <a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium inline-flex items-center gap-1">MENU<ChevronDown className="w-4 h-4" /></a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium inline-flex items-center gap-1">PAGE<ChevronDown className="w-4 h-4" /></a>
                        </li>
                        <li><a href="#" className="block py-2 text-gray-900 hover:text-[#37A345] font-medium">RESERVATION</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                        : <div className="navbar-profile">
                            <img src={assets.profile_icon} alt="" />
                            <ul className="navbar-profile-dropdown">
                                <li onClick={() => navigate('/myorder')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                <hr />
                                <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Log out</p></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
