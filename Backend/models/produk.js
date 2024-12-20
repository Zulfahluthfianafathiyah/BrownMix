
//buatkan models/produk.js

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    static associate(models) {
    }
  }
  produk.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      gambar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      varian_rasa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bentuk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "produk",
      tableName: "produk",
    }
  );
  return produk;
};
