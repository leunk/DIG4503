import React from "react";

class TypeSearch extends React.Component{
    typeSearch = () => {
        let type = document.querySelector('#pokeType');

        fetch("/api/pokemon/type/" + type.value)
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            this.props.callback(result);
        })
    }

    // readType(event){
    //     event.preventDefault();
    //     let pokeType = document.querySelector("#pokemonType");
    //     //need to change route!!
    //     fetch("/api/pokemon/type/" + pokeType.value).then((res) => {
    //         return res.json();
    //     }).then((processed) => {
    //         let pokeResponse = document.querySelector("#reportingArea");
    //         if(processed.error){
    //             pokeResponse.innerHTML = processed.error;
    //         }
    //         else{
    //             console.log(processed);
    //             processed.forEach(index => {
    //                 pokeResponse.innerHTML += "<br>" + index.name;
    //             });
    //         }
    //     });
    // }

    render(){
        return(
            <div>
                <form onSubmit = {this.readType}>
                    <p>Enter Pokemon Type:</p>
                    <input id="pokeType" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;