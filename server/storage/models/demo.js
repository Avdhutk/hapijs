'use strict';

module.exports = (sequelize, DataTypes) => {
  const Demo = sequelize.define('demo', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Demo;
};
