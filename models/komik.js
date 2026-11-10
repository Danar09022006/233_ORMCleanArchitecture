module.exports = (sequelize, DataTypes) => {
  const komik = sequelize.define("komik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
    },
  });
  return komik;
};
