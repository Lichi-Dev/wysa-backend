const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  sleepchange: { type: Array, default: [] },
  sleepstruggle: { type: String, default: "" },
});

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  formdata: FormDataSchema,
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
