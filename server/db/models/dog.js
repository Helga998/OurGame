'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Answer) {
      this.belongsTo(Answer, {foreignKey: 'dogId'})

      // define association here
    }
  }
  Dog.init({
    breed: DataTypes.TEXT,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT
    
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};