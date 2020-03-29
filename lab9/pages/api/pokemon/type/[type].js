import getPokemon from 'json-pokemon';

export default(req, res) => {
    let result = {"error" : "Could not find!"};

    const type = {type: req.query.typeList};

    let pokemon = getPokemon(type);

    if(pokemon !== null){
        result = pokemon;
    }

    res.json(result);
}