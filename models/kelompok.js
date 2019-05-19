"use strict";
module.exports = (sequelize, DataTypes) => {
  const Kelompok = sequelize.define(
    "Kelompok",
    {
      // Attributes
      namaKelompok: DataTypes.STRING,
      status: DataTypes.STRING,

      // Foreign Key
      TutorId: DataTypes.INTEGER,
      JadwalId: DataTypes.INTEGER,
      MahasiswaId: DataTypes.INTEGER
    },
    {}
  );
  Kelompok.associate = function(models) {
    // associations can be defined here
    Kelompok.belongsTo(sequelize.models.Tutor, {
      foreignKey: "TutorId"
    });

    Kelompok.belongsTo(sequelize.models.Jadwal, {
      foreignKey: "JadwalId"
    });

    Kelompok.belongsTo(sequelize.models.Mahasiswa, {
      foreignKey: "MahasiswaId"
    });
  };
  return Kelompok;
};
