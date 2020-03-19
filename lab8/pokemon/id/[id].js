import getPokemon from 'json-pokemon/getPokemon';
import React from "react";

class IdSearch extends React.Component{
    readId(event){
        event.preventDefault();
        let pokeId = document.querySelector("#pokemonId");

        fetch("api/pokemon/id/" + pokeId.value).then((res)=>{
            return res.json();
        }).then((processed) =>{
            let pokeResponse = document.querySelector("#reportingArea");
            if(processed.error){
                pokeResponse.innerHTML = processed.error;
            }
            else{
                pokeResponse.innerHTML = processed.name;
            }
        });
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.readId}>
                <p>Enter Pokemon ID:</p>
                <input id = "pokemonId" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default (req,res) => {
    let result = {"error": "Whoops. Could not find id!"};

    const id = parseInt(req.query.id);

    let pokemon = getPokemon.getPokemonById(id);

    if(pokemon !== null){
        result = pokemon;
    }

    res.json(result);
}