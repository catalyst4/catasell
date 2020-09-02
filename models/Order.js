const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = Schema({

    orderNumber: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        requireed: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;