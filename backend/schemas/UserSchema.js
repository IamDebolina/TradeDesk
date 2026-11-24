const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving, so plain passwords are never stored
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { UserSchema };