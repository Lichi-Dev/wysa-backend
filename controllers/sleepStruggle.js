const User = require("../models/userSchema");

const sleepStruggle = async (req, res) => {
  const { sleepstruggle } = req.body;
  const id = req.params.id;
  try {
    const existingUser = await User.findOne({ _id: id });
    if (!existingUser) {
      return res.status(400).json({ message: "User doesn't exists" });
    }
    const result = await User.findByIdAndUpdate(
      id,
      { $set: { "formdata.sleepstruggle": sleepstruggle } },
      { returnOriginal: false }
    );
    res.status(201).json({ user: result, message: "Submitted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = sleepStruggle;
