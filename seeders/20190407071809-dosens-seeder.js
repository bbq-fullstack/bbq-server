"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Dosens",
      [
        {
          nama: "Adi",
          nik: "11223344",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: "Khotib",
          nik: "11223345",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama: "Derry",
          nik: "11223346",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Dosens", null, {});
  }
};
