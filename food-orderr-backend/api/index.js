import express from "express";
import cors from "cors";
import { connectDB } from "../config/db.js";
import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRouter.js";
import "dotenv/config";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRouter.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(
  cors({
    origin: "https://ayafood.vn",
  })
);

connectDB();

app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});
