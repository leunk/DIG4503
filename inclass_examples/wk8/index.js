const MongoClient = require('mongodb').MongoClient; //from whatever object we are requiring just give me mongo

const URL = "mongodb+srv://katherineleunglin:JqOeR9DexODxuT2T@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection){
    if(error){
        throw error;
    }

    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");

    console.log(collection);

    connection.close();
});