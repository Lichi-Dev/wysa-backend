const User = require("../models/userSchema");

const sleepChange = async (req, res) => {
  const { sleepchange } = req.body;
  const id = req.params.id;
  try {
    const existingUser = await User.findOne({ _id: id });
    if (!existingUser) {
      return res.status(400).json({ message: "User doesn't exists" });
    }
    console.log(existingUser);
    const result = await User.findByIdAndUpdate(
      id,
      { $set: { "formdata.sleepchange": sleepchange } },
      { returnOriginal: false }
    );
    res.status(201).json({ user: result, message: "Submitted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = sleepChange;
