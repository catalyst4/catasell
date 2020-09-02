const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isSysAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isOwner: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    authTokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    permissions: [{
        addProduct: {
            type: Boolean,
            required: true,
            default: false
        },
        editProduct: {
            type: Boolean,
            required: true,
            default: false
        },
        deleteProduct: {
            type: Boolean,
            required: true,
            default: false
        },
        addOrder: {
            type: Boolean,
            required: true,
            default: false
        },
        editOrder: {
            type: Boolean,
            required: true,
            default: false
        },
        deleteOrder: {
            type: Boolean,
            required: true,
            default: false
        }
    }]

});

const User = mongoose.model('User', UserSchema);

module.exports = User;