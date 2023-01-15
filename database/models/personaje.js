'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      personaje.belongsToMany(models.pelicula,{
        as : "peliculas",
        through : "personajePelicula",    //Pivot table
        foreignKey : "personajeId",   // id que hace referencia a la tabla actual
        otherKey : "peliculaId"         //FK Pivot
    })
     
}
  };
  personaje.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    historia: DataTypes.STRING,
    

  }, {
    sequelize,
    modelName: 'personaje',
  });
  return personaje;
};