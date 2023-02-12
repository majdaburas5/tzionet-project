const mongoose = require("mongoose");
let products = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      unique: true,
    },
    Category: {
      type: String,
    },
    Picture: {
      type: String,
    },
    Price: {
      type: Number,
    },
  },
  {
    collection: "Products",
  }
);

module.exports = mongoose.model("Products", products);
