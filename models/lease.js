'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lease.belongsToMany(models.Article, {
        through: "Articles_Lease",
        foreignKey: {
          name:"lease_id"
        },
        timestamps:false
      })
    }
  }
  Lease.init({
    lease_id: { 
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    user_id:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Lease',
    timestamps:false,
  });
  return Lease;
};