const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(400).send("No JWT Provided");
    return;
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    console.log(error);
  }
  next();
};
