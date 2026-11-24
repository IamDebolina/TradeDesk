require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModels } = require("./models/PositionsModels");
const { OrdersModels } = require("./models/OrdersModels");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModels.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModels({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order Saved!");
});

// Online only: the backend also serves the frontend and dashboard
if (process.env.NODE_ENV === "production") {
  const frontendBuild = path.join(__dirname, "../frontend/build");
  const dashboardBuild = path.join(__dirname, "../dashboard/build");

  app.use("/dashboard", express.static(dashboardBuild));
  app.get("/dashboard{/*splat}", (req, res) =>
    res.sendFile(path.join(dashboardBuild, "index.html"))
  );

  app.use(express.static(frontendBuild));
  app.get("/{*splat}", (req, res) =>
    res.sendFile(path.join(frontendBuild, "index.html"))
  );
}

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection failed:", err.message));