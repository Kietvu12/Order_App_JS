import React, { useContext, useState, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lọc danh sách món ăn khi category thay đổi
  useEffect(() => {
    setLoading(true);
    const filtered = food_list.filter(
      (item) => category === 'All' || category === item.category
    );
    setFilteredFoods(filtered);
    setLoading(false);
  }, [category, food_list]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : filteredFoods.length > 0 ? (
        <div className="food-display-list">
          {filteredFoods.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <p className="empty-text">No dishes found in this category.</p>
      )}
    </div>
  );
};

export default FoodDisplay;
