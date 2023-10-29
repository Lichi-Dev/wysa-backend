const User = require("../models/userSchema");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { nickname, password } = req.body;
  try {
    const existingUser = await User.findOne({ nickname: nickname });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const matchedPassword = await bycrypt.compare(
      password,
      existingUser.password
    );
    if (!matchedPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { nickname: existingUser.nickname, id: existingUser._id },
      process.env.SECRET_KEY
    );
    res
      .status(201)
      .json({
        user: existingUser,
        token: token,
        message: "User logged in successfully",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = loginUser;
