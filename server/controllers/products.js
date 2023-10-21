const Product = require("../models/product");

// fetches all products from the database and also allows for searching by name
module.exports.getAll = async (req, res) => {
    const search = req.query.name || "";
    const products = await Product.find({ name: { $regex: search, $options: "i" } });
    res.json(products);
}

// creates a new product in the database
module.exports.create = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product created successfully!", product: product });
}

// deletes all products from the database
module.exports.deleteAll = async (req, res) => {
    await Product.deleteMany({});
    res.json({ message: "All products deleted successfully!" });
}

// fetches a single product from the database
module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.json({ message: "Product not found!" });
    }
    res.json({ message: "Product retrieved successfully!", product: product });
}

// updates a single product in the database
module.exports.modify = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { ...req.body });
    if (!product) {
        return res.json({ message: "Product not found!" });
    }
    await product.save();
    res.json({ message: "Product updated successfully!", product: product });
}

// deletes a single product from the database
module.exports.deleteOne = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        return res.json({ message: "Product not found!" });
    }
    res.json({ message: "Product deleted successfully!" });
}
