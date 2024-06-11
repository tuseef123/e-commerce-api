const express = require("express");
const router = express.Router();
const {
  authticateUser,
  unauthorizedUser,
} = require("../middleware/authentication");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router
  .route("/")
  .get(authticateUser, unauthorizedUser("admin", "owner"), getAllUsers);

router.route("/showMe").get(authticateUser, showCurrentUser);

router.route("/updateUser").patch(authticateUser, updateUser);

router.route("/updateUserPassword").patch(authticateUser, updateUserPassword);

router.route("/:id").get(authticateUser, getSingleUser);

module.exports = router;
