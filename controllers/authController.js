const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = {
  signup: (req, res) => {
    const { nama, password, username, email } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    // cek apakah username sudah ada ?
    User.findOne({ where: { username: username } }).then(findUsername => {
      if (findUsername) {
        res.status(403).json({ message: "Username sudah terpakai" });
      } else {
        User.create({
          nama: nama,
          username: username,
          email: email,
          password: hashPassword,
          role: "mahasiswa"
        })
          .then(user => {
            res.status(201).json({
              message: "Success Sign Up New User Mahasiswa",
              data: user
            });
          })
          .catch(err => {
            res.status(500).json({
              message: "Email sudah terpakai"
            });
          });
      }
    });
  },
  signin: (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    User.findOne({
      where: {
        username: username
      }
    })
      .then(user => {
        if (user != null) {
          const checkPassword = bcrypt.compareSync(password, user.password);
          if (checkPassword === true) {
            req.session.user = {
              username: user.username,
              nama: user.nama,
              role: user.role,
              email: user.email
            }
            const userLogin = req.session.user;
            res.redirect("/dashboardv1", { user: userLogin });
          } else {
            res.redirect("/")
          }
        } else {
          res.redirect("/")
        }
      })
      .catch(err => {
        res.status(200).json({
          message: err.message
        });
      });
  },
  signout: (req, res) => {
    req.session.destroy(function (err) {
      // cannot access session here]
      if (err) {
        console.log(err)
      } else {
        res.redirect('/')
      }
    })
  }
};
