const userSchema = require("../models/userSchema");

const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userSchema.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      user: user,
      message: "User fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getOneUser;
