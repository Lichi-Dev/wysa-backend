const express = require("express");
const router = express.Router();
const createUser = require("../controllers/createUser.js");
const loginUser = require("../controllers/loginUser.js");
const sleepChange = require("../controllers/sleepChange.js");
const sleepstruggle = require("../controllers/sleepStruggle.js");
// Creating user
router.post("/signup", createUser);
router.post("/login", loginUser);
router.patch("/sleepchange/:id", sleepChange);
router.patch("/sleepstruggle/:id", sleepstruggle);
module.exports = router;
