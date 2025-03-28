const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");
const postRoutes = require("./routes/postRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
