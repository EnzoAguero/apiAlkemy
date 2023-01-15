'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personajePelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      personajePelicula.belongsTo(models.pelicula,{
        as : 'pelicula',
        foreignKey: 'peliculaId', 
        onDelete : 'cascade'
      }),
      personajePelicula.belongsTo(models.personaje,{
        as : 'personaje',
        foreignKey: 'personajeId', 
        onDelete : 'cascade'
      })
    }
  };
  personajePelicula.init({
    peliculaId: DataTypes.INTEGER,
    personajeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'personajePelicula',
  });
  return personajePelicula;
};