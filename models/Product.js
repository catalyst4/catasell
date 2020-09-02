const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({

    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImages: [{
        productImage: {
            type: String,
            required: true
        }
    }],
    productPrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number
    },
    productQty: {
        type: Number
    }

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;