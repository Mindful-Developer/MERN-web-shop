const express = require("express");
const router = express.Router();
const catchAsync = require("../helpers/catchAsync");
const products = require("../controllers/products");

// product route
router.route("/")
    .get(catchAsync(products.getAll))
    .post(catchAsync(products.create))
    .delete(catchAsync(products.deleteAll));

router.route("/:id")
    .get(catchAsync(products.getOne))
    .put(catchAsync(products.modify))
    .delete(catchAsync(products.deleteOne));

module.exports = router;
