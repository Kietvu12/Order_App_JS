import React, { useEffect, useState, useRef } from 'react';
import "./List.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { MapPin, MoreVertical, Search, Edit2, Trash2 } from 'lucide-react';
import useOutsideClick from '../../../hook/useOutsideClick';

const List = () => {
  const url = "https://ayafood.vn";

  const [list, setList] = useState([]);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const menuRef = useRef();
  useOutsideClick(menuRef, () => {
    if (visibleMenu !== null) {
      setVisibleMenu(null);
    }
  });
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        throw new Error('Error fetching data');
      }
    } catch (error) {
      toast.error(error.message || "Error");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        fetchList();
        toast.success(response.data.message);
      } else {
        throw new Error('Error removing food');
      }
    } catch (error) {
      toast.error(error.message || "Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const toggleMenu = (id) => {
    if (visibleMenu === id) {
      setVisibleMenu(null);
    } else {
      setVisibleMenu(id);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input type="text" placeholder="Search here" className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
        <button className="text-gray-600 hover:text-gray-800">Recently</button>
      </div>

      <div className="hidden md:grid grid-cols-8 gap-4 px-4 py-3 bg-gray-50 rounded-t-lg">
        <input type="checkbox" className="rounded border-gray-300" />
        <div className="col-span-1">ID</div>
        <div className="col-span-1">Menu</div>
        <div className="col-span-1">Name</div>
        <div className="col-span-1">Category</div>
        <div className="col-span-1">Description</div>
        <div className="col-span-1">Price</div>
        <div className="col-span-2">Action</div>
      </div>

      <div className="divide-y divide-gray-200">
        {list.map((item) => (
          <div key={item._id} className="grid grid-cols-1 md:grid-cols-8 gap-4 px-4 py-4 items-center">
            <div>{item._id}</div>
            <input type="checkbox" className="rounded border-gray-300 md:col-span-1" />
            <img src={`${url}/image/${item.image}`} alt={item.name} className="w-12 h-12 object-cover rounded-lg md:col-span-1" />
            <div className="flex flex-col justify-center md:col-span-1">
              <h3 className="font-medium">{item.name}</h3>
            </div>
            <div className="text-sm text-gray-600 md:col-span-1">{item.category}</div>

            <div className="md:col-span-1">
              <span className="text-orange-500 font-medium">$ {item.price}</span>
            </div>
            <div className="md:col-span-1 flex items-center justify-between gap-4">
              <button className="p-1.5 hover:bg-gray-100 rounded-lg" onClick={() => toggleMenu(item._id)}>
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
              {visibleMenu === item._id && (
                <div ref={menuRef} className="absolute mt-10 shadow-lg bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
                  <ul>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => console.log('Edit', item._id)}>
                      <Edit2 className="inline h-4 w-4 mr-2 text-gray-600" /> Edit
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => removeFood(item._id)}>
                      <Trash2 className="inline h-4 w-4 mr-2 text-gray-600" /> Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
