'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  todo.associate = function (models) {
    // associations can be defined here
    todo.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user'
    });
    todo.belongsTo(models.category_todo, {
      foreignKey: 'category_id',
      as: 'category_todo'
    });
  };
  return todo;
};