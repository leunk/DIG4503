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
const getPokemons = require("json-pokemon"); //this will the array that is SEARCHING
//to search array for loop , or forEach 

// const pokemonArray = pokemons;

//getPokemonByName -- returns list of pokemons by name
// const name = getPokemons.getPokemonByName(); no need for this because getPokemon will do job same with ID
//getPokemonById -- returns pokemon by id
// const id = getPokemons.getPokemonById();

// App.use("/public", express.static("public")); 

//----------------------------------
//route for id
App.get("/id/:id", (req, res)=>{
    let result = {"error": "Sorry, there were no matches"};
    getPokemons.forEach((value)=>{  
        if(value.id == req.params.id){ 
             let index = value.id - 1; //set result to what that is so that there is always a response 
             result = pokemonArray[index];
        }
    });
    //---------------some space---------------
    if(result.error){
        console.log(chalk.red(req.path)); 
        //console.log(chalk.red("there were no matches"));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }
    res.send(result); //r
});

//----------------------------------
//route for name
App.get("/name/:name", (req,res)=>{
    let result = {"error": "Sorry, there were no matches"};
    getPokemons.forEach((value) =>{
        if(value.name.toLowerCase() == req.params.name){
            let index = value.id - 1;
            result = getPokemons[index];
        }
    });
    //---------------some space---------------
    if(result.error){
    console.log(chalk.red(req.path));
    //console.log(chalk.red("there were no matches"));
    }
    else{
    console.log(chalk.green(req.path));
    console.log(result);
    }
    res.send(result);
});


App.listen(port, () =>{
    console.log("Server is running");
});
