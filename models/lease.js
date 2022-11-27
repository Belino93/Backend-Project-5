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
      Lease.hasMany(models.Movie, {
        foreignKey:'movie_id'
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
    refund:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'Lease',
    
  });
  return Lease;
};