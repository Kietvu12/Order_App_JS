import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext)
    return (
        <div className='food-item'>
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
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem