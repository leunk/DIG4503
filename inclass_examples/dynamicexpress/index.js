const Express = require("express");
const App = Express();
const port = 80;

App.get("/:book/:id", (req,res) => {
    res.send(req.params);
});

App.listen(port, () => {
    console.log("server running!");
})