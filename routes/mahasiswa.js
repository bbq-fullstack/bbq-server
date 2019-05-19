var express = require("express");
var router = express.Router();

var order = [
  {
    id: 1,
    name: "James",
    drink: "Coffee"
  },
  {
    id: 2,
    name: "John",
    drink: "Latte"
  }
];

router.get("/", function (req, res, next) {
  res.render("mahasiswa/dashboard", { result: "" });
});

router.get("/data", function (req, res, next) {
  res.send({ result: order });
});


router.get("/profile", function (req, res, next) {
  res.render("mahasiswa/profile");
});

router.get("/jadwal", function (req, res, next) {
  res.render("mahasiswa/jadwal");
});

router.get("/tutor", function (req, res, next) {
  res.render("mahasiswa/tutor");
});

router.get("/nilai", function (req, res, next) {
  res.render("mahasiswa/nilai");
});

router.get("/cetak-registrasi", function (req, res, next) {
  res.render("mahasiswa/cetak-registrasi");
});

module.exports = router;
