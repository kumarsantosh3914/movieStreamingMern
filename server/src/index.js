const express = require("express");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  await connect();
  console.log(`mongo db connected`);
});
