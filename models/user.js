'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.belongsTo(models.role, {
      foreignKey: 'role_id',
    })
  };
  return user;
};