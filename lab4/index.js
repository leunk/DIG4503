//Lab4 - 
//create node project
//install express
//install json-pokemon
//install chalk

//express server
const Express = require("express");
const App = Express();
const port = 80; 
const chalk = require("Chalk");

//pokemon stuff 
const pokemons = require("json-pokemon");
//npmjs json-pokemon possible usage 
const getPokemons = require("json-pokemon/getPokemon");
const pokemonArray = pokemons;

//getPokemonByName -- returns list of pokemons by name
const name = getPokemons.getPokemonByName();
//getPokemonById -- returns pokemon by id
const id = getPokemons.getPokemonById();

// App.use("/public", express.static("public")); 

//----------------------------------
//route for id
App.get("/id/:id", (req, res)=>{
    let result = {"error": "Sorry, there were no matches"};
    pokemonArray.forEach((value)=>{
        if(value.id == req.params.id){
             let index = value.id - 1;
             result = pokemonArray[index];
        }
    });
    //---------------some space---------------
    if(result.error){
        console.log(chalk.red("There were no matches"));
        //console.log(chalk.red("there were no matches"));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }
    return result;
});

//----------------------------------
//route for name
App.get("/name/:name", (req,res)=>{
    let result = {"error": "Sorry, there were no matches"};
    pokemonArray.forEach((value) =>{
        if(value.name.toLowerCase() == req.params.name){
            let index = value.id - 1;
            result = pokemonArray[index];
        }
    });
    //---------------some space---------------
    if(result.error){
    console.log(chalk.red("There were no matches"));
    //console.log(chalk.red("there were no matches"));
    }
    else{
    console.log(chalk.green(req.path));
    console.log(result);
    }
    return result;
});


App.listen(port, () =>{
    console.log("Server is running");
});
