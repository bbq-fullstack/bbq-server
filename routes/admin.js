var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("admin/dashboard");
});

router.get("/mahasiswa", function (req, res, next) {
  res.render("admin/mahasiswa");
});

router.get("/status-mahasiswa", function (req, res, next) {
  res.render("admin/status-mahasiswa");
});

router.get("/tutor", function (req, res, next) {
  res.render("admin/tutor");
});

router.get("/astor", function (req, res, next) {
  res.render("admin/astor");
});

router.get("/jadwal", function (req, res, next) {
  res.render("admin/jadwal");
});

router.get("/jadwal/input", function (req, res, next) {
  res.render("admin/jadwal-input");
});

router.get("/kelompok-jadwal-kosong", function (req, res, next) {
  res.render("admin/kelompok-jadwal-kosong");
});

router.get("/kelompok-jadwal-peserta", function (req, res, next) {
  res.render("admin/kelompok-jadwal-peserta");
});

router.get("/informasi-bbq", function (req, res, next) {
  res.render("admin/informasi-bbq");
});

router.get("/informasi-agenda", function (req, res, next) {
  res.render("admin/informasi-agenda");
});

router.get("/informasi-tutor", function (req, res, next) {
  res.render("admin/informasi-tutor");
});

module.exports = router;
