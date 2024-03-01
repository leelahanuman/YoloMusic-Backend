const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
router.post("/post", async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !username || !password) {
    rs;
    res.status(200).json({ message: "check a ll the credentials" });
    return;
    r;
  }

  const checkUser = await User.findOne({ email });
  // console.log({checkUser});
  if (checkUser) {
    res.status(401).json({ message: "user already exists" });
    return;
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashPassword });
  const token = jwt.sign(
    {
      email,
      username,
    },
    process.env.SECRET_KEY
  );
  res.status(201).json({ token });
});

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "check the user" });
    return;
  }
  const findUser = await User.findOne({ email });
  if (!findUser) {
    res.status(401).json({ message: "Invalid login credentials" });
    return;
  }
  const compareUserPassword = await bcrypt.compare(password, findUser.password);
  if (compareUserPassword === false) {
    res.status(401).json({ message: "Invalid login credentials" });
    return;
  }
  const token = jwt.sign(
    {
      email,
      username: findUser.username,
    },
    process.env.SECRET_KEY
  );
  res.status(200).json({ token });
});

//getting User
router.get("/get", async (req, res) => {
  const token = req.headers.authtoken;
  const authtoken = jwt.decode(token, process.env.SECRET_KEY);
  res.status(201).json(authtoken);
});

module.exports = router;
