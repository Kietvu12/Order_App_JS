import foodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = req.file ? `${req.file.filename}` : "";

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
    recommended: req.body.recommended === "true",
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added", data: food });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Failed to add food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Remove" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
const searchFood = async (req, res) => {
  try {
    const searchQuery = req.query.name || ""; // Lấy từ khóa tìm kiếm từ query string
    const foods = await foodModel.find({
      name: { $regex: searchQuery, $options: "i" }, // Không phân biệt chữ hoa/thường
    });

    if (foods.length > 0) {
      res.json({ success: true, data: foods });
    } else {
      res.json({ success: false, message: "No matching food found" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Search failed" });
  }
};

export { addFood, listFood, removeFood, searchFood };
