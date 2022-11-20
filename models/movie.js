'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Article, {
        foreignKey: {
          name: 'article_id',
          allowNull:false
        }
      })
    }
  }
  Movie.init({
    movie_id: {
      type : DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    overview: DataTypes.TEXT,
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps:false,

  });
  return Movie;
};

