import React from "react";

class NameSearch extends React.Component{
    nameSearch(){
        let namesearch = document.querySelector("#namesearch");

        fetch("http://localhost:90/shows/name/" + nameSearch.value)
        .then((res)=>{
            res.json();
        })
        .then((processed) =>{
            let namereport = document.querySelector("#namereport");

            if(processed.error){
                namereport.innerHTML = processed.error;
            }
            else{
                namereport.innerHTML = processed.name;
            }
        });
    }
    render(){
        return(
            <div>
                <input id= "" type="text" onKeyDown ={} />
                <div id="namereport"></div>
            </div>
        );
    }
}
export default NameSearch;
