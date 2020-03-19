import getPokemon from 'json-pokemon/getPokemon';
import React from 'react';

class NameSearch extends React.Component {

    readName(event) {
        event.preventDefault();
            let pokeName = document.querySelector("#pokemonName");

            fetch("api/pokemon/name/" + pokeName.value).then((res) =>{
                return res.json();
            }).then((processed) => {
                let pokeResponse = document.querySelector("#reportingArea");
                if(processed.error){
                    pokeResponse.innerHTML = processed.error;
                }
                else{
                    pokeResponse.innerHTML = processed.name;
                }
            });
        }

    render() {
        return(
            <div>
                <form onSubmit = {this.readName}>
                <p>Enter Pokemon Name:</p>
                <input id= "pokemonName" type="text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default (req, res) => {
    let result = {"error": "Could not find name!"};
    
    let pokemon = getPokemon.getPokemonByName(req.query.name);

    if(pokemon !== null){
        result = pokemon;
    }

    res.json(result);
}

