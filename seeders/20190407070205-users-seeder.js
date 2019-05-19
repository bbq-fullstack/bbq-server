"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync("rahasia", 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          nama: "M Fari M",
          username: "fari_admin1",
          password: password,
          role: "admin",
          email: "fari_madyan@andaglos.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // mahasiswa yang statusnya nanti sudah aktif
          nama: "Andi",
          username: "13312231",
          password: password,
          role: "mahasiswa",
          email: "andi@andaglos.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // mahasiswa yang belum di aktifkan
          nama: "Dina Belum Aktif",
          username: "13312232",
          password: password,
          role: "mahasiswa",
          email: "dina@andaglos.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: "Ade sanjaya",
          username: "adesanjaya",
          password: password,
          role: "tutor",
          email: "adesanjayn@andaglos.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
