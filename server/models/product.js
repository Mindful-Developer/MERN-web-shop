const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String
    }
    // Don't need to reference the category model here, I guess.
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Categories'
    // }
});

module.exports = mongoose.model('Product', ProductSchema);
