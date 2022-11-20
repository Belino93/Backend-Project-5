'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Show.belongsTo(models.Article, {
        foreignKey: {
          name: 'article_id',
          allowNull:false
        }
      })
    }
  }
  Show.init({
    show_id:{
      type : DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    overview: DataTypes.TEXT,
    first_air_date: DataTypes.DATEONLY,
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    next_chapter: DataTypes.DATEONLY,
    special_event: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'Show',
    timestamps:false,
  });
  return Show;
};