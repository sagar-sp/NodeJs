const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// router.get("/users", async (req, res) => {
//   const allUsers = await User.find({});
//   const html = `<ul>
//     ${allUsers
//       ?.map((user) => `<li>${user.firstName}${user.lastName}</li>`)
//       .join("")}
//     </ul>`;
//   res.send(html);
// });

module.exports = router;
