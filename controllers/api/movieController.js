const db = require('../../database/models');
const { Op } = require("sequelize");

const movieController = {

    /* Ejercicio 7 */
    list: (req, res) => {
        db.pelicula.findAll({
            /* include: ['genero'], */
            attributes : ['titulo','fechaDeCreacion','imagen']
        })
        .then(movies => {
            let empty = {
                message : 'No se encuentran peliculas'
            }
            if(!movies.length) {
                return res.status(404).json(empty)
            }
                let response = {
                    meta: {
                        url: '/api/movies',
                        total:movies.length
                    },
                    data:movies
                }
                res.send(response)
            }).catch(error => console.log(error))

            /* Fin ejercicio 7 */
},

/* Ejercicio 8 */
detail : (req,res) => {
    db.pelicula.findByPk(req.params.id,{
        include : [
            { association : "genero",},
            { association : "personaje"},
        ]
     }).then(movie => {
         if(movie) {
             let response = {
                 meta : {
                     status:200,
                     url : '/detail' + movie.id
                 },
                 data:movie
             }
             return res.json(response)
         } else {
             const errorMsg = new Error()
             errorMsg.response = {
                 status:400,
                 message: 'Pelicula inexistente'
             }
             return res.json(errorMsg)
         }
     }).catch(error => console.log(error))
     
}

/* Fin ejercicio 8 */
}

module.exports = movieController