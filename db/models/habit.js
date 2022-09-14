'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habit extends Model {
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
  Habit.init({
    userId: DataTypes.INTEGER,
    kindOfSig: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    quitDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Habit',
  });
  return Habit;
};