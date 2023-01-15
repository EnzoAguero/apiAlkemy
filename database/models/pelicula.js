'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pelicula.belongsTo(models.genero, {
        as: "genero",
        foreignKey: "generoId"
    }),
    /* pelicula.belongsTo(models.personajePelicula,{
      as : 'personaje',
      foreignKey: 'personajeId', 
      onDelete : 'cascade'
    }), */
    pelicula.belongsTo(models.personaje,{
      as : 'personaje',
      foreignKey: 'id', 
      through : "personajePelicula",
      otherKey : "personajeId",
      onDelete : 'cascade'
    })
    }
  };
  pelicula.init({
    titulo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    fechaDeCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER,
    personajeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};