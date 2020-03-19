 
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
        resultElement.innerHTML = "Its ID is" + processed.id;
      }
    });
  }

  render(){
    return(
      <div>
        <input type="text" id="pokemonName" />
        <button onClick={() => { this.getName() } }>SUBMIT</button>
        <div id="results"></div>
      </div>
    );
  }

  getId(){
    let id = document.querySelector("#pokemonId");

    fetch("/api/pokemon/id" + id.value)
    .then((res) => {return res.json();})
    .then((processed) => {
      let resultElement = document.querySelector("#results");

      if(processed.error){
        resultElement.innerHTML = "Could not find!";
      }
      else{
        resultElement.innerHTML = "Its ID is" + processed.id;
      }
    });
  }

  render(){
    return(
      <div>
        <input type="text" id="pokemonId" />
        <button onClick = {() => {this.getId()}}>SUBMIT</button>
        <div id="results"></div>
      </div>
    )
  }

}

export default Home;

