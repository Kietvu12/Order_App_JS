import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from "react-router-dom";
const FoodItem = ({ id, name, price, image }) => {

    const navigate = useNavigate();
    const detailFood = (_id) => {
        navigate(`/food/${_id}`);
    };
    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext)
    return (
        <div className='food-item group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'
            onClick={() => detailFood(id)}
        >
            <div className="relative h-[250px] overflow-hidden">
                <img src={url + "image/" + image} alt="" className=' w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 max-h-[350px] h-20' />
                {!cartItem[id]
                    ? <img className='absolute bottom-2 right-2 cursor-pointer w-[35px]' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem