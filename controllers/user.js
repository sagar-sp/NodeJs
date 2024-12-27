const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(401).json({ msg: "User not found" });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  const user = await User.findById(req.params.id);
  await User.deleteOne(user);
  res.json({ status: "Success" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (!body || !body.email) {
    return res.status(400).json({ msg: "All Fields are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    jobTitle: body.job_title,
  });

  return res.status(201).json({ msg: "Success" });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
