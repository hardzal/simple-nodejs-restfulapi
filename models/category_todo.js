'use strict';
module.exports = (sequelize, DataTypes) => {
  const category_todo = sequelize.define('category_todo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  category_todo.associate = function (models) {
    // associations can be defined here
    category_todo.hasMany(models.todo, {
      foreignKey: 'category_id',
      as: 'todos'
    });
  };
  return category_todo;
};