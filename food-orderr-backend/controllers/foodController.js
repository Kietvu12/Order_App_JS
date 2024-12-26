import foodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  console.log(req.files);
  let image_filenames = req.files.map((file) => file.filename);

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filenames,
    recommended: req.body.recommended === "true",
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added", data: food });
    console.log("data", food);
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
    const searchId = req.query._id;
    const searchQuery = req.query.name || "";

    let foods;
    if (searchId && ObjectId.isValid(searchId)) {
      foods = await foodModel.find({ _id: searchId });
    } else if (searchQuery) {
      foods = await foodModel.find({
        name: { $regex: searchQuery, $options: "i" },
      });
    } else {
      return res.json({
        success: false,
        message: "No search criteria provided",
      });
    }

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
const getProductDetails = async (req, res) => {
  try {
    const product = await foodModel.findById(req.params._id);
    if (product) {
      res.json({ success: true, data: product });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { addFood, listFood, removeFood, searchFood, getProductDetails };
