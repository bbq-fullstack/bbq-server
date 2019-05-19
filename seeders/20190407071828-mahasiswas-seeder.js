"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Mahasiswas",
      [
        {
          npm: "13312231",
          nama: "Andi",
          tglLahir: new Date(),
          alamat: "Jalan Raya Z.A Rajabasa",
          bacaQuran: "Lancar",
          nomorHp: "081215679294",
          jenisKelamin: "Pria",
          jadwalKosong: "1a",
          status: "aktif",
          KelasId: 1,
          DosenId: 1,
          JurusanId: 1,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          npm: "13312232",
          nama: "Dina",
          tglLahir: new Date(),
          alamat: "Jalan Raya Bandar Jaya",
          bacaQuran: "Belum Lancar",
          nomorHp: "081215679295",
          jenisKelamin: "Wanita",
          jadwalKosong: "1a",
          status: "nonaktif",
          KelasId: 1,
          DosenId: 1,
          JurusanId: 1,
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Mahasiswas", null, {});
  }
};
