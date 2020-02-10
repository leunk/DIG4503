const Express = require("express");
const App = Express();
const port = 80;

App.use("/", Express.statis("public"));

App.get("/api", (req,res) =>{
    res.json({"error": "Error mess"})
    //create object literal ({"error"});
});

App.listen(port, () => {
    console.log("server runningggg");
});