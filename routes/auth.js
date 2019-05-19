var express = require("express");
var router = express.Router();
var { signup, signin, signout } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout)

module.exports = router;
