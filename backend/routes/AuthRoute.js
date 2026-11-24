const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");

const cookieOptions = {
  httpOnly: true, // JavaScript in the browser can't read it (safer)
  sameSite: "lax",
  maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
};

const createToken = (id) =>
  jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: "3d" });

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
    }

    const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "An account with this email already exists" });
    }

    const user = await UserModel.create({ email, username, password });
    res.cookie("token", createToken(user._id), cookieOptions);
    res.status(201).json({
      success: true,
      message: "Signed up successfully",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });
    const isMatch = user && (await bcrypt.compare(password, user.password));
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    res.cookie("token", createToken(user._id), cookieOptions);
    res.json({
      success: true,
      message: "Logged in successfully",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
  res.json({ success: true, message: "Logged out" });
});

// VERIFY: dashboard calls this to check if the user is logged in
router.get("/verify", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findById(id);
    if (!user) return res.json({ status: false });
    res.json({ status: true, user: user.username });
  } catch {
    res.json({ status: false });
  }
});

module.exports = router;