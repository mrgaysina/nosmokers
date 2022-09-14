'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trigger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Trigger.init({
    userId: DataTypes.INTEGER,
    trigger: DataTypes.TEXT,
    action: DataTypes.TEXT,
    translation: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Trigger',
  });
  return Trigger;
};