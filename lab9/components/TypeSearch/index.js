import React from "react";

class TypeSearch extends React.Component{
    readType(event){
        event.preventDefault();
        let pokeType = document.querySelector("#pokemonType");

        fetch("/api/pokemon/type/" + pokeType.value).then((res) => {
            return res.json();
        }).then((processed) => {
            let pokeResponse = document.querySelector("#reportingArea");
            if(processed.error){
                pokeResponse.innerHTML = processed.error;
            }
            else{
                console.log(processed);
                processed.forEach(index => {
                    pokeResponse.innerHTML += "<br>" + index.name;
                });
            }
        });
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.readType}>
                    <input id="type" type="text" placeholder = "Pokemon Type" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;