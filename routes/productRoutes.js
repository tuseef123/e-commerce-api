const express = require("express");
const router = express.Router();
const {
  authticateUser,
  unauthorizedUser,
} = require("../middleware/authentication");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/")
  .post(authticateUser, unauthorizedUser("admin"), createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post(authticateUser, unauthorizedUser("admin"), uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authticateUser, unauthorizedUser("admin"), updateProduct)
  .delete(authticateUser, unauthorizedUser("admin"), deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);
module.exports = router;
