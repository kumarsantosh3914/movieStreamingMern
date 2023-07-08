const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/movieStreaming");
};

module.exports = connect;
