//Feb 19 
const Express = require("express");
const App = Express();
const port = 90;

const contents = fs.readFileSync("database.json");
let database = JSON.parse(contents);

App.get("./shows/name/:name" ,() => {
    let result = {"error": "Could not find name!"};

    res.json(result);
});

App.get("./shows/score/:score", () => {
    let result = {"error": "Could not find score!"};

    res.json(result);
});

App.get("./shows/episode/:episode", () =>{
    let result = {"error": "Could not find episode count!"};
    
    res.json(result);
});

App.listen(port, () => {

});