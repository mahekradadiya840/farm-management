const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const farmRoutes = require("./routes/farmRoutes");

dotenv.config();

const app = express();


// DATABASE
connectDB();


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTES
app.use("/api/farms", farmRoutes);


// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});