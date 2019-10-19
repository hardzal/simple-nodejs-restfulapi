'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  role.associate = function (models) {
    // associations can be defined here
    role.hasMany(models.user, {
      foreignKey: 'role_id',
    })
  };
  return role;
};