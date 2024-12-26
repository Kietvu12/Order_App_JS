import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);
    const url = "http://localhost:4000/";

    const addToCart = async (itemId) => {
        const newCartItem = { ...cartItem, [itemId]: (cartItem[itemId] || 0) + 1 };
        setCartItem(newCartItem);
        if (token) {
            await axios.post(`${url}api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
        }
    };

    const removeFromCart = async (itemId) => {
        if (cartItem[itemId] > 1) {
            setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } else {
            const updatedCart = { ...cartItem };
            delete updatedCart[itemId];
            setCartItem(updatedCart);
        }
        if (token) {
            await axios.post(`${url}api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
        }
    };

    const getTotalCartAmount = () => {
        return Object.keys(cartItem).reduce((total, itemId) => {
            const itemInfo = food_list.find(product => product._id === itemId);
            return total + (itemInfo ? itemInfo.price * cartItem[itemId] : 0);
        }, 0);
    };

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}api/food/list`);
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    };

    const loadCartData = async () => {
        if (token) {
            try {
                const response = await axios.post(`${url}api/cart/get`, {}, { headers: { Authorization: `Bearer ${token}` } });
                setCartItem(response.data.cartData);
            } catch (error) {
                console.error("Failed to load cart data:", error);
            }
        }
    };

    useEffect(() => {
        fetchFoodList();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            loadCartData();
        }
    }, []);

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
