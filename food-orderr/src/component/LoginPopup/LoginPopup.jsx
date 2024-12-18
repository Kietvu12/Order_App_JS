import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LoginPopup = ({ setShowLogin }) => {
    const navigate = useNavigate()
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("sign up")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }
    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url
        if (currState === "Login") {
            newUrl += "api/user/login"
        }
        else {
            newUrl += "api/user/register"
        }
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
            if (response.data.role === "admin") {
                navigate("/admin/add");
            } else {
                navigate("/");
            }
        } else {
            alert(response.data.message);
            console.log("Error");
        }
    }
    return (
        <div className="login-popup">
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your name' required />}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} id="" placeholder='Your email' required />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Your Password' required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? <p>Create new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup