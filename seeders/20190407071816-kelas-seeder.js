"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Kelas",
      [
        {
          namaKelas: "TI 15 A",
          DosenId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          namaKelas: "TI 15 B",
          DosenId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          namaKelas: "TI 15 C",
          DosenId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Kelas", null, {});
  }
};
