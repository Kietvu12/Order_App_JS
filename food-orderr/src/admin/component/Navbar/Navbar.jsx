import React, { useContext } from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'

const AdminNavbar = () => {
  const navigate = useNavigate()
  const {token, setToken} = useContext(StoreContext)
  const logOut = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
}
  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <div className="navbar-profile">
                        <img src={assets.profile_image} alt="" />
                        <ul className="navbar-profile-dropdown">
                            <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Log out</p></li>
                        </ul>
                    </div>
    </div>
  )
}

export default AdminNavbar