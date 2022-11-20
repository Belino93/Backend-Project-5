'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsToMany(models.Lease, {
        through: "Articles_Lease",
        foreignKey: {
          name:"article_id"
        },
        timestamps:false
      })
    }
  }
  Article.init({
    article_id: { 
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    }
  }, {
    sequelize,
    modelName: 'Article',
    timestamps:false,
  });
  return Article;
};