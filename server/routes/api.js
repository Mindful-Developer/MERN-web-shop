const express = require("express");
const router = express.Router();
const catchAsync = require("../helpers/catchAsync");
const api = require("../controllers/api");

// api route.
router.route("/")
    .get(catchAsync(api.display));

module.exports = router;
