const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose').default;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // CART
    cart: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Item"
            },
            name: String,
            price: Number,
            image: String,
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],

    // WALLET
    wallet: {
        balance: {
            type: Number,
            default: 0
        },
        history: [
        {
            action: String,   // "Added", "Purchase", etc.
            amount: Number,
            date: String
        }
     ]
    },
    saved: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Item"
            },
            name: String,
            price: Number,
            image: String
        }
    ],
    cards: [
        {
            cardNumber: String,
            name: String,
            expiry: String
        }
    ],
    addresses: [
        {
            name: String,
            phone: String,
            city: String,
            pincode: String,
            address: String
        }
    ],
    orders: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Item"
            },
            name: String,
            price: Number,
            image: String,
            status: {
                type: String,
                default: "Processing"
            },
            deliveryDate: String,
            createdAt: {
                type: Date,
                default: Date.now
            },
            address: Object,
        }
    ],
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);