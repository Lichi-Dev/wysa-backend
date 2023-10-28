const User = require("../models/userSchema");

const sleepChange = async (req, res) => {
  const { sleepchange } = req.body;
  const id = req.params.id;
  try {
    const existingUser = await User.findOne({ _id: id });
    if (!existingUser) {
      return res.status(400).json({ message: "User doesn't exists" });
    }
    const result = await User.findByIdAndUpdate(id, {
      formdata: { sleepchange: sleepchange },
    });
    res.status(201).json({ user: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = sleepChange;
