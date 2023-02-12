const mongoose = require("mongoose");
let Cart = new mongoose.Schema(
    {
        productName: {
            type: String,
        },
        userName: {
            type: String,
        },
        picture: {
            type: String,
        },
        price: {
            type: Number,
        },

    },
    {
        collection: "Cart",
    }
);

module.exports = mongoose.model("Cart", Cart);