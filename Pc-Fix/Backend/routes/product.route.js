var express = require("express")
const router = express.Router()
let product = require("../models/Products");


router.get("/getProducts", (req, res) => {
    product.find({},(error, data) => {
        res.json(data);
    });
})

router.get("/getProducts/:productId", (req, res) => {
    product.find({productId: req.params.productId},(error, data) => {
        res.json(data);
    });
})
module.exports = router;