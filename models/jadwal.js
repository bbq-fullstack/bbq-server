"use strict";
module.exports = (sequelize, DataTypes) => {
  const Jadwal = sequelize.define(
    "Jadwal",
    {
      // Attributes
      hari: DataTypes.STRING,
      jam: DataTypes.STRING,

      // Foreign Key
      TutorId: DataTypes.INTEGER,
      MahasiswaId: DataTypes.INTEGER,
      AstorId: DataTypes.INTEGER
    },
    {}
  );
  Jadwal.associate = function(models) {
    // associations can be defined here
    Jadwal.belongsTo(sequelize.models.Tutor, {
      foreignKey: "TutorId"
    });

    Jadwal.belongsTo(sequelize.models.Mahasiswa, {
      foreignKey: "MahasiswaId"
    });

    Jadwal.belongsTo(sequelize.models.Astor, {
      foreignKey: "AstorId"
    });
  };
  return Jadwal;
};
