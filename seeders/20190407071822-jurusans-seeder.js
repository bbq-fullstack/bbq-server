"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Jurusans",
      [
        {
          namaJurusan: "S1 Teknik Informatika",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          namaJurusan: "S1 Sistem Informasi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          namaJurusan: "S1 Sastra Inggris",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Jurusans", null, {});
  }
};
