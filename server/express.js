require("dotenv").config();

// modules
const express = require("express");
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const logger = require("morgan");

// helpers
const ExpressError = require("./helpers/ExpressError");

// routes
const apiRouter = require("./routes/api");
const productRouter = require("./routes/products");

// database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.info("Connected to MongoDB");
});

// app setup
const app = express();

// mount middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

// security
app.use(mongoSanitize());

// mount routes
app.use("/api", apiRouter);
app.use("/api/products", productRouter);

// catch 404
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// error handler
app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({ message });
});

module.exports = app;
