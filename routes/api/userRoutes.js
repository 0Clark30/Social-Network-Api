const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser)

// /api/students/:studentId
router.route("/:userId").get(getUser).delete(deleteUser).put(updateUser);


module.exports = router;
