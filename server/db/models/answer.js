'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Dog}) {
      this.belongsTo(Dog, {foreignKey: 'dogId'})
      // define association here
    }
  }
  Answer.init({
    dogId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Dogs',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};