const User = require("../models/userSchema");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { nickname, password } = req.body;
  try {
    const existingUser = await User.findOne({ nickname: nickname });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bycrypt.hash(password, 10);
    const result = await User.create({
      nickname: nickname,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { nickname: result.nickname, id: result._id },
      process.env.SECRET_KEY
    );
    res
      .status(201)
      .json({
        user: result,
        token: token,
        message: "User created successfully",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = createUser;
