const db = require('../../database/models');
const { Op } = require("sequelize");

module.exports = {
list : (req,res) => {
    db.personaje.findAll()
    .then(character => {
        let response = {
            meta: {
                status : 200,
                total : character.length,
                url: 'api/characters'
            },
            data: character 
        }
        res.json(response)
    }).catch(error => console.log(error))
},
Relation : (req,res) => {
    db.personajePelicula.findByPk(req.params.id,{
        include : ['personaje','pelicula']
    })
    .then(character => {
        let response = {
            meta: {
                status:200,
                total : character.length,
                url: 'api/character/:id'
            },
            data: character
        }
        res.json(response)
    }).catch(error => console.log(error))
},
create : (req,res) => {
    db.personaje.create(
        {
            ...req.body
        }
    ).then(character => {
        let response = {
            meta: {
                status:200,
                url: 'api/character/create/' + character.id
            },
            message : 'personaje agregado con éxito'
        }
        res.json(response)
        
    }).catch(error => console.log(error))

},
update : (req,res) => {
        let personajeId = req.params.id;
        db.personaje.update(
            {
                ...req.body
            },
            {
                where: {id: personajeId}
        })
        .then(response => {
                response ={
                    meta: {
                        status: 200,
                        total: response.length,
                        url: 'api/character/update/:id'
                    },
                    data:response,
                    message: 'Personaje actualizado'
                }
                res.json(response)
            }
        
        )}
}