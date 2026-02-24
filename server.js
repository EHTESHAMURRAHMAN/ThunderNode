const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, () => {
    console.log("Server running on port 4000");
});