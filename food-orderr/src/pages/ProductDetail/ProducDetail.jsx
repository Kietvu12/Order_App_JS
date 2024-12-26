import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { StoreContext } from '../../context/StoreContext';

const ProductDetails = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(0);
    const url = "http://localhost:4000"

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${url}/api/food/${_id}`);
                setProduct(response.data.data);
                if (cartItem && typeof cartItem === 'object') {
                    const quantity = cartItem[_id];
                    if (quantity) {
                        setQuantity(quantity);
                    }
                } else {
                    console.error('cartItem is not properly structured:', cartItem);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetails();
    }, [_id, cartItem]);



    const handleAddToCart = () => {
        setQuantity(prev => prev + 1);
    };

    const handleRemoveFromCart = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-none">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start" >
                <div className="flex flex-col-reverse">
                    <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                        <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                            {(product.image || []).map((img, index) => (
                                <button
                                    key={index}
                                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                >

                                    <span className="sr-only">Image {index + 1}</span>
                                    <span className="absolute inset-0 rounded-md overflow-hidden">
                                        <img src={`${url}/image/${img}`} alt="" className="w-full h-full object-center object-cover" />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full aspect-w-1 aspect-h-1">
                        <img
                            src={(product.image && `${url}/image/${product.image[0]}`) || '/default-image.jpg'}
                            alt={product.name}
                            className="w-full h-full object-center object-cover sm:rounded-lg"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
                    <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">${product.price}</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>
                        <p className="text-base text-gray-900">{product.description}</p>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center">
                            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                            <div className="ml-4">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button
                                        type="button"
                                        className="p-2 text-gray-600 hover:text-gray-700"
                                        onClick={() => {
                                            removeFromCart(product._id);
                                            handleRemoveFromCart();
                                        }}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 text-gray-900">{quantity}</span>
                                    <button
                                        type="button"
                                        className="p-2 text-gray-600 hover:text-gray-700"
                                        onClick={() => { addToCart(product._id); handleAddToCart() }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex space-x-3 mb-4 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <a href='/cart'>
                                    <button
                                        type="button"

                                        className="min-w-0 flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"

                                    >
                                        <ShoppingCart className="mr-2 h-5 w-5" aria-hidden="true" />
                                        Add to cart
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-medium text-gray-900">Nutrition Information</h3>
                        <div className="mt-4 prose prose-sm text-gray-500">
                            <ul role="list">
                                {product.nutrition && Object.entries(product.nutrition).map(([key, value]) => (
                                    <li key={key}>
                                        <span className="font-medium text-gray-900 capitalize">{key}:</span> {value}
                                        {key === 'calories' ? '' : 'g'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
                        <div className="mt-4 prose prose-sm text-gray-500">
                            <ul role="list">
                                {(product.ingredients || []).map(ingredient => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default ProductDetails;
