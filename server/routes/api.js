const express = require("express");
const router = express.Router();

/* api page. */

router.get("/", function (req, res, next) {
  res.json({ message: "Welcome to the marketplace application." });
});

module.exports = router;
