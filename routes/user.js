const express = require("express");
const router = express.Router();
const createUser = require("../controllers/createUser.js");
const loginUser = require("../controllers/loginUser.js");
const sleepChange = require("../controllers/sleepChange.js");
const sleepstruggle = require("../controllers/sleepStruggle.js");
const getAllUser = require("../controllers/getAllUser.js");
const getOneUser = require("../controllers/getOneUser.js");
// Creating user
router.post("/signup", createUser);
router.post("/login", loginUser);
router.patch("/sleepchange/:id", sleepChange);
router.patch("/sleepstruggle/:id", sleepstruggle);
router.get("/all", getAllUser);
router.get("/:id", getOneUser);
module.exports = router;
