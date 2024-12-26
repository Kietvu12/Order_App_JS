import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrder = () => {
    const [data, setData] = useState([]);
    const { url, token } = useContext(StoreContext);

    const fetchOrder = async () => {
        const response = await axios.post(`${url}api/order/userorder`, {}, { headers: { token } });

        setData(response.data.data);
    };

    useEffect(() => {
        if (token) {
            fetchOrder();
        }
    }, [token]);
    function formatDate(dateString) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(dateString);
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const year = date.getFullYear().toString().substr(2);

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = ((hours + 11) % 12 + 1);
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return `${day}-${month}-${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((order, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-center mb-2">Order</h2>
                            <p className="text-gray-500 text-center text-sm">{formatDate(order.date)}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <p className="text-gray-600 mb-1">Name</p>
                                <p className="font-medium">{order.address.firstName} {order.address.lastName}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-1">Address</p>
                                <p className="font-medium">{order.address.street}, {order.address.state}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-1">Phone</p>
                                <p className="font-medium">{order.address.phone}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-4">Order Menu</h4>
                            <div className="space-y-4">
                                {order.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-orange-500">+${item.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-lg font-semibold">Total</h4>
                            <p className="text-xl font-semibold text-orange-500">
                                ${order.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                            </p>
                        </div>

                        <div className={`${order.statusColor} py-4 rounded-lg text-center font-medium`}>
                            {order.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;
