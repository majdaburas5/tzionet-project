const express = require("express");
const app = express();
const PORT = 8000;
var productsRoute = require("./routes/product.route");
var usersRoute = require("./routes/users.route");
var cartRoute = require("./routes/cart.route");

const cors = require("cors");
app.use(cors());
//body parser
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//Import the mongoose module
var mongoose = require("mongoose");
//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/AutoShop";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//path
const path = require("path");

// Connecting frontend (angular) project
app.use(express.static(path.join(__dirname, "dist/AutoShop")));
// Backend routing
app.use("/api", usersRoute);
app.use("/api", productsRoute);
app.use("/api", cartRoute);
// Frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/AutoShop/index.html"));
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
