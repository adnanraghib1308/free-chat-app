const mongoose = require("mongoose");

const UserDetails = new mongoose.Schema(
  {
    user_name: String,
    email: String,
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserDetails", UserDetails);
