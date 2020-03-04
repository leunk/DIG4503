const Express = require("express");
const App = Express();
const port = 80;

const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;
const URL = "mongodb+srv://katherineleunglin:JqOeR9DexODxuT2T@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, () => {
    if(error){
        throw error;
    }
    
    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");
});

const cors = require("cors");
App.use(cors());

App.get("/movies/title/:title", (req,res) =>{
    let result = {"error": "Could not find movie"};

    if(collection != null){
        collection.find({"title": new RegExp(req.params.title)})
        .limit(100)
        .toArray()
        .then((cursorArray) =>{

            if(cursorArray.length != 0){
                //if it is not equal to zero then send result back
                result = cursorArray;
            }

            //have it inside because if we have it out it will res will skip then
            res.json(result);
        
        });
     } 
        else{
            res.json(result);
        }
   
});


App.listen(port, () =>{
    console.log("beeeps");
});