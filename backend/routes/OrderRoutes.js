const express = require("express");
const { CreateOrder, getAllOrders } = require("../controllers/orderController");
const auth = require("../middlewares/Auth");


const orderRoutes = express.Router();
orderRoutes.post("/create",auth,CreateOrder)
orderRoutes.get("/get",getAllOrders)



module.exports = orderRoutes;