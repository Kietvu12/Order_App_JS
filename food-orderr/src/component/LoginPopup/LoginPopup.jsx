import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import ApiLogin from '../../api/ApiLogin';


const LoginPopup = ({ setShowLogin }) => {
    const navigate = useNavigate();
    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();

        const apiCall = currState === "Login" ? ApiLogin.login : ApiLogin.register;
        const response = await apiCall(url, data);

        if (response.success) {
            setToken(response.token);
            localStorage.setItem("token", response.token);
            setShowLogin(false);
            if (response.role === "admin") {
                navigate("/admin/add");
            } else {
                navigate("/");
            }
        } else {
            alert(response.message);
        }
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? null : (
                        <input
                            type="text"
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            placeholder="Your name"
                            required
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        placeholder="Your email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        placeholder="Your Password"
                        required
                    />
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? (
                    <p>Create new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
