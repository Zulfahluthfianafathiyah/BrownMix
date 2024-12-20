
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kritik_saran extends Model {
    static associate(models) {
    }
  }
  kritik_saran.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pesan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "kritik_saran",
      tableName: "kritik_saran",
    }
  );
  return kritik_saran;
};
