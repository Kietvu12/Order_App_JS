import express from "express";
import {
  addFood,
  listFood,
  removeFood,
  searchFood,
  getProductDetails,
} from "../controllers/foodController.js";

import multer from "multer";

const foodRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
foodRouter.post("/add", upload.array("images", 5), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/search", searchFood);
foodRouter.get("/:_id", getProductDetails);
export default foodRouter;
