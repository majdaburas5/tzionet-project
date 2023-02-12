var express = require("express");
const router = express.Router();
let user = require("../models/users");

router.post("/createUser", (req, res) => {
  user.create(req.body, (error, data) => {
    console.log(error);
    res.json(data);
  });
});

router.get("/getUser", (req, res) => {
  user.find({}, (error, data) => {
    res.json(data);
  });
});

module.exports = router;
