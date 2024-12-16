import React, { useEffect, useState, useContext } from "react";
import ApiFood from "../../../api/apiFood";
import { StoreContext } from "../../../context/StoreContext";
import { assets } from "../../../assets/assets";
import "../../../component/FoodItem/FoodItem.css"
const url = "http://localhost:4000/";

const MenuGrid = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  // Fetch dữ liệu từ API khi component được render
  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await ApiFood.listFood();
      if (response.success) {
        setMenuItems(response.data);
      } else {
        console.error("Failed to fetch menu items:", response.message);
      }
      setLoading(false);
    };

    fetchMenuItems();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item._id} // ID từ MongoDB
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={url + "image/" + item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {!cartItem[item._id] ? (
                <img
                  className=" absolute bottom-2 right-2 cursor-pointer w-[35px]"
                  onClick={() => addToCart(item._id)}
                  src={assets.add_icon_white}
                  alt="Add to Cart"
                />
              ) : (
                <div className="food-item-counter absolute bottom-2 right-2 flex items-center gap-2">
                  <img
                    onClick={() => removeFromCart(item._id)}
                    src={assets.remove_icon_red}
                    alt="Remove"
                    className="cursor-pointer"
                  />
                  <p className="text-black font-bold">{cartItem[item._id]}</p>
                  <img
                    onClick={() => addToCart(item._id)}
                    src={assets.add_icon_green}
                    alt="Add"
                    className="cursor-pointer"
                  />
                </div>
              )}
              {item.recommended && (
                <span
                  className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-amber-500 text-white rounded"
                >
                  RECOMMENDED
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-amber-600">
                  ${item.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
