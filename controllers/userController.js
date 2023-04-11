const { User, userValidation } = require("../models/UserModel.js");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const user = new User(req.body);

    await user.save();
    res
      .status(200)
      .json({ email: user.email, message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = user.generateJWT();

    res
      .status(200)
      .header("x-auth-token", token)
      .json({ email: user.email, message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, loginUser };
