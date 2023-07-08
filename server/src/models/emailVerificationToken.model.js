const mongoose = require("mongoose");
const modelOptions = require("./model.options");

const emailVerificationTokenSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    verificationToken: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "10m",
    },
  },
  modelOptions
);

const emailVerificationTokenModel = mongoose.model(
  "emailVerificationToken",
  emailVerificationTokenSchema
);

module.exports = emailVerificationTokenModel;
