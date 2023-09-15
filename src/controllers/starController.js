const joi = require('joi');


const stars = [{

    "id": 1,
    "name": "Sirius",
    "type": "Estrella binaria, Secuencia Principal (tipo A1V)",
    "distancia": "8.6 años luz",
    "mass": "2.02 masas solares",
    "radius": "1.711 radios solares",
    "temperature": "9,940 K",
    "luminosity": "25.4 luminosidades solares",
    "age": "200-300 millones de años",
    "composition": {
        "hydrogen": "71%",
        "helium": "27%",
        "otros_elementos": "2%"
    },
    "stellar_history": "Sirius es una de las estrellas más brillantes en el cielo nocturno y es una estrella binaria compuesta por Sirius A y Sirius B. Es una estrella blanca de la secuencia principal que ha consumido la mayor parte de su hidrógeno y se encuentra en una etapa avanzada de su vida."
}]

// Function fot get the all stars
function allStarts (req,res){
    const filterStars = req.query.name ? stars.filter((star) => star.name.toLowerCase().includes(req.query.name.toLowerCase()))
    : stars;

    res.json({
        filterStars
    })
    
}


// Function for create a new star
function createStar(req,res){

    const Schema = joi.object({
        id: joi.number().integer().min(1).required(),
        name: joi.string().required(),
        type: joi.string().required(),
        distancia: joi.string().required(),
        mass: joi.string().required(),
        radius: joi.string().required(),
        temperature: joi.string().required(),
        luminosity: joi.string().required(),
        age: joi.string().required(),
        composition:joi.object({
            hydrogen: joi.string().required(),
            helium: joi.string().required(),
            otros_elementos: joi.string().required()
        }).required(),
        stellar_history: joi.string().required()
    }) 

    const {error} = Schema.validate(req.body);

    if (error) {
        return res.status(400).json({

            error: 'Failed to create a new star'
        });
    
    const newStar = req.body;
    stars.push(newStar);
    res.status(201).json({newStar})
    
    }


}


// function for filter stars
function getStarById(req, res) {
    const starId = parseInt(req.params.id);
    const star = stars.find((s) => s.id === starId);

        if (!star) {
        return res.status(404).json({ error: 'Estrella no encontrada' });
        }

        res.json(star);
    }

module.exports={
    allStarts,
    createStar,
    getStarById
}