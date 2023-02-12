const mongoose = require("mongoose");
let users = new mongoose.Schema(
    {
        userName: {
            type: String,
            unique : true,
        },
        password: {
            type: String,
        },
    },
    {
        collection: "Users",
    }
);

module.exports = mongoose.model("Users", users);