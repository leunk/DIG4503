 
class Home extends React.Component{
  getName(){
    let name = document.querySelector('#pokemonName');
    fetch("/api/pokemon/name/" + name.value)
    .then((res) => {return res.json();})
    .then((processed) => {

      let resultElement = document.querySelector("#results");

      if(processed.error){
        resultElement.innerHTML = "Could not find!";
      }
      else{
        resultElement.innerHTML = "Its ID is " + processed.id + " and the name you entered is " + processed.name;
      }
    });
  }

  getId(){
    let id = document.querySelector("#pokemonId");

    fetch("/api/pokemon/id/" + id.value)
    .then((res) => {return res.json();})
    .then((processed) => {
      let resultElement = document.querySelector("#results");

      if(processed.error){
        resultElement.innerHTML = "Could not find!";
      }
      else{
        resultElement.innerHTML = "Its Name is " + processed.name + " and the ID you entered is " + processed.id;
      }
    });
  }

  render(){
    return(
      <div>
        <h4>Search by Name</h4>
        <input type="text" id="pokemonName" />
        <button onClick= {()=>{this.getName()}}>Submit</button>
        <br/>
        <div>
          <h4>Search by ID</h4>
          <input type="text" id="pokemonId" />
          <button onClick = {() => {this.getId()}}>Submit</button>
        </div>
        <br/>
        <div id="results"></div>
      </div>
    )
  }

}

export default Home;

