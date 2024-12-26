import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets'; // Ensure this path is correct for your assets
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000";
  const [images, setImages] = useState([]); // State to hold the uploaded images
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // Handler for text input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handler for file input changes
  const onImageChangeHandler = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + images.length > 5) {
      toast.error("Cannot upload more than 5 images.");
      return;
    }
    setImages(prevImages => [...prevImages, ...files]);
  };

  // Form submission handler
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    images.forEach(image => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImages([]);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error adding product: " + error.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Images (max 5)</p>
          <label htmlFor="image-upload">
            {images.length > 0 ? images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="uploaded-image" />
            )) : <img src={assets.upload_area} alt="Upload placeholder" />}
          </label>
          <input
            id="image-upload"
            type="file"
            onChange={onImageChangeHandler}
            multiple
            hidden
            accept="image/*"
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            placeholder="Type here"
            rows="6"
            value={data.description}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="add-category-price flex-row">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" value={data.category} onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="$20"
              value={data.price}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button className="add-btn" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
