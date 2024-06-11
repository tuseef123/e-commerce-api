const express = require("express");
const router = express.Router();

const {
  authticateUser,
  unauthorizedUser,
} = require("../middleware/authentication");

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

router
  .route("/")
  .post(authticateUser, createOrder)
  .get(authticateUser, unauthorizedUser("admin"), getAllOrders);

router.route("/showAllMyOrders").get(authticateUser, getCurrentUserOrders);

router
  .route("/:id")
  .get(authticateUser, getSingleOrder)
  .patch(authticateUser, updateOrder);

module.exports = router;
