const Express = require("express");
const App = Express();
const port = 80; 
const chalk = require("Chalk");
const cors = require("cors"); //cors ports

// const pokemons = require("json-pokemon");
const getPokemons = require("json-pokemon");

//cors allows the dif ports to communicate with each other
App.use(cors());

App.get("/", Express.static("client/build"));

App.get("/id/:id", (req,res) => {
    let result = {"error": "Sorry, there were no matches"};
    getPokemons.forEach((value) =>{
        if(value.id == req.params.id){
            result = value;
        }
    });
    if(result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }
    res.send(result);
});

App.get("/name/:name", (req,res) => {
    let result = {"error": "Sorry, there were no matches"};
    getPokemons.forEach((value) =>{
        if(value.name.toLowerCase() == req.params.name){
         result = value;
        }
    });
    if(result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }
    res.send(result);
});

App.listen(port, () =>{
    console.log("Server is up and ruuuuuuuunning");
})