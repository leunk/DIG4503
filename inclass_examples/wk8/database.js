const MongoClient = require('mongodb').MongoClient; //from whatever object we are requiring just give me mongo

const URL = "mongodb+srv://katherineleunglin:JqOeR9DexODxuT2T@cluster0-tc9sb.mongodb.net/";

class Database{
    constructor(){
        //define a value that will eventually be the collection
        this.collection = null;
        //define a value that will eventually be an object
        this.connection = null;
        //conect to the MongoDB system using the URL and using a callback function
        MongoClient.connect(URL, (error, connection) => {
            if(error){
                //throw the error
                //throwing an error stops the code!
                throw error;
            }
            //save the connection details passed to the callback
            //into something that can be accessed throughout the class
            
            this.connection = connection;

            //from the connection, select database "DIG4503-78"
            let database = connection.db("DIG4503-78");

            //from the database, select a collection "movies"
            this.collection = database.collection("Movies");
        });
    }

findTitle(title){
    if(this.collection != null) {
        return this.collection.findOne({"title": title});
    }
}
}

// MongoClient.connect(URL, function(error, connection){
//     if(error){
//         throw error;
//     }

//     let database = connection.db("DIG4503-78");
//     let collection = database.collection("Movies");

//     collection.findOne({
//         "score":79
//     }, {}, (error, result) =>{
//         console.log(result);
//     });

//     connection.close();
// });