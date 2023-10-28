const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  formdata: { type: Object, defaultValue: {} },
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
