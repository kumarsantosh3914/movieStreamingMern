const mongoose = require("mongoose");
const modelOptions = require("./model.options");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true,
    },
    mediaId: {
      type: String,
      required: true,
    },
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaPoster: {
      tyep: String,
      required: true,
    },
  },
  modelOptions
);

const reviewModel = mongoose.model("review", reviewSchema);

module.exports = reviewModel;
