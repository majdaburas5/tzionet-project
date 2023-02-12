var express = require("express");
const router = express.Router();
let cart = require("../models/cart");


router.get("/getCart", (req, res) => {
    cart.find({}, (error, data) => {
    res.json(data);
  });
});

router.post("/addToCart", (req, res) => {
    cart.create(req.body, (error, data) => {
    console.log(req.body);
    res.json(data);
  });
});


router.delete("/deleteCartItem/:id", (req, res) => {
  cart.findByIdAndRemove({_id : req.params.id},(error,data)=>{
    console.log("cart removed");
  })
});

module.exports = router;
