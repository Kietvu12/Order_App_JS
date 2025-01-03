/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from "react-router-dom"
import { MinusIcon, PlusIcon, StarIcon } from 'lucide-react'


const FoodItem = ({ id, name, price, image }) => {
    const navigate = useNavigate()
    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext)

    const detailFood = (_id) => {
        navigate(`/food/${_id}`)
    }

    const handleAddToCart = (e) => {
        e.stopPropagation()
        addToCart(id)
    }

    const handleRemoveFromCart = (e) => {
        e.stopPropagation()
        removeFromCart(id)
    }

    return (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            onClick={() => detailFood(id)}
        >
            <div className="relative">
                <img
                    src={url + "image/" + image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 m-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ${price.toFixed(2)}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{name}</h3>

                {!cartItem[id] ? (
                    <button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center"
                        onClick={handleAddToCart}
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Add to Cart
                    </button>
                ) : (
                    <div className="flex items-center justify-between bg-gray-100 rounded-full">
                        <button
                            className="p-2 text-orange-500 hover:text-orange-600 transition-colors duration-200"
                            onClick={handleRemoveFromCart}
                        >
                            <MinusIcon className="h-5 w-5" />
                        </button>
                        <span className="font-semibold text-gray-700">{cartItem[id]}</span>
                        <button
                            className="p-2 text-orange-500 hover:text-orange-600 transition-colors duration-200"
                            onClick={handleAddToCart}
                        >
                            <PlusIcon className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodItem

