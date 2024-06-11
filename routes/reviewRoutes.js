const express = require("express");

const router = express.Router();

const { authticateUser } = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.route("/").post(authticateUser, createReview).get(getAllReviews);

router
  .route("/:id")
  .get(getSingleReview)
  .patch(authticateUser, updateReview)
  .delete(authticateUser, deleteReview);

module.exports = router;
