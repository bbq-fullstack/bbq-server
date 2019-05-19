var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { akun: "login" });
});

router.get("/register", function (req, res, next) {
  res.render("index", { akun: "register" });
});

/* GET login page from template adminlte. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

/* GET dashboardv1 page from template adminlte. */
router.get("/dashboardv1", function (req, res, next) {
  res.render("dashboard-v1");
});

module.exports = router;
