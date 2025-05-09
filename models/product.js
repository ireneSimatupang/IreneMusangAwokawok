'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, {
        through: models.Purchase,
        foreignKey: "productID",
        otherKey: "userId"
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true, // Menambahkan opsi timestamps
  });
  return Product;
};