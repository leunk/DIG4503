//Require Express
const Express = require('express');
//create an app based on a single instance of Express
const App = Express();
//save the port number to listen
const port = 80;
//require database
const Database = require("./Database.js");

let database = new Database();

const MongoClient = require('mongodb').MongoClient; //from whatever object we are requiring just give me mongo

App.get("movies/title/:title", (req, res) => {
    //set an error
    let result = {"error": "could not find!"};

    //findTitle() will return a Primise
    //once it finishes, send the response
    database.findTitle(req.params.title).then((movie) => {
        //if a movie was not found, it will be null
        if(movie !=null){
            //if it is not null, set result to whatever movie is 
            result = movie;
        }
        //send as a response: either the "error" object or the movie object found
        res.json(result);
    });
});

//listen to port
App.listen(port, () =>{
    console.log("Server is runningggggg")
});

// const URL = "mongodb+srv://katherineleunglin:JqOeR9DexODxuT2T@cluster0-tc9sb.mongodb.net/";

// MongoClient.connect(URL, function(error, connection){
//     if(error){
//         throw error;
//     }

//     let database = connection.db("DIG4503-78");
//     let collection = database.collection("Movies");

//     console.log(collection);

//     connection.close();
// });