var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("tutor/dashboard");
});

router.get("/peserta", function (req, res, next) {
  res.render("tutor/peserta");
});

router.get("/nilai", function (req, res, next) {
  res.render("tutor/nilai");
});

router.get("/keahlian", function (req, res, next) {
  res.render("tutor/keahlian");
});

module.exports = router;
