const Express = require("express");
const App = Express();
const port = 420;

const Person = require("./Person.js");
let p = new Person("Kat", "purple");
//new - create an object based on a class
let people = [];
var faker = require('faker');
let name = faker.name.findName();
let color = faker.commerce.color();

for(let i = 0; i < 99; i++){
   let name = faker.name.findName();
   let color = faker.commerce.color();
    people.push(new Person(name, color));
}

App.get("/person/name/:name", (req,res) => {
    //res.send(req.params.name);
    //search an array to find a particular name how to?
    people.forEach((value) => {
        if(value.name == req.params.name){
            res.send(value);
            //look thru array
        }
    });
    res.send("Hey! Hey, you! No! No!");

});

App.get("/person/color/:color", (req,res) => {
    //res.send(req.params.color);
    people.forEach((value) => {
        if(value.color == req.params.color){
            res.send(value);
        }
    });
});

App.listen(port, () => {
    console.log("server running!");
});