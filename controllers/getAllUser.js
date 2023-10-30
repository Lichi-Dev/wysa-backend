const userSchema = require("../models/userSchema");

const getAllUser = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(200).json({
      users: users,
      message: "All Users fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getAllUser;
