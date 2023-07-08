const mongoose = require("mongoose");
const modelOptions = require("./model.options");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    displayname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },
    salt: {
      type: String,
      required: true,
      select: false, // The salt field should not be included in query results by default
    },
  },
  modelOptions // Apply the model options defined in the model.options.js file
);

// Define methods on the user schema
userSchema.methods.setPassword = function (password) {
  // Generate random salt
  this.salt = crypto.randomBytes(16).toString("hex");

  // Hash the password using the salt
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

userSchema.methods.validPassword = function (password) {
  // Hash the provided password using the same salt
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");

  // Compare the hashed passwords
  return this.password === hash;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
