const mongoose = require("mongoose");
const modelOptions = require("./model.options");

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.types.ObjectId,
      ref: "User",
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
      type: String,
      required: true,
    },
    mediaRate: {
      type: Number,
      required: true,
    },
  },
  modelOptions
);

const favoriteModel = mongoose.model("favorite", favoriteSchema);

module.exports = favoriteModel;
