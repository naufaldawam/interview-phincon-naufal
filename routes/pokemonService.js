const axios = require('axios');

var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', async function(req, res, next) {
    var contoh = axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data
       
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    res.send(await contoh);
  
});

router.get('/:id', async function(req, res, next) {
    var pokemon = {} 
    var contoh = axios.get('https://pokeapi.co/api/v2/pokemon/' + req.params.id)
    .then(function (response) {
        // handle success
        console.log(response.data);
        
        pokemon.id = response.data.id
        pokemon.name = response.data.name
        pokemon.height = response.data.height
        pokemon.types = response.data.types
        pokemon.moves = response.data.moves
        return pokemon
       
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    res.send(await contoh);
  
});

module.exports = router;
