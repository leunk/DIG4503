//trying example from repl


// const Home = () =>{
//   return(
//     <div>
//       <NameSearch/>
//       <IdSearch/>
//       <h2>Reporting</h2>
//       <div id="reportingAreaName"></div>
//       <div id="reportingAreaId"></div>
//     </div>
//   );
// }

// export default Home; 

class Home extends React.Component{
  getName(){
    let name = document.querySelector('#nameIput');
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
        <input type="text" id="nameInput" />
        <button onClick={() => { this.getName() } }>SUBMIT</button>
        <div id="results"></div>
      </div>
    );
  }

  // getId(){
  //   let id = document.querySelector("#idInput");

  //   fetch("/api/pokemon/id" + id.value)
  //   .then((res) => {return res.json();})
  //   .then((processed) => {
  //     let resultElement = document.querySelector("#results");

  //     if(processed.error){
  //       resultElement.innerHTML = "Could not find!";
  //     }
  //     else{
  //       resultElement.innerHTML = "Its ID is" + processed.id;
  //     }
  //   });
  // }

  // render(){
  //   return(
  //     <div>
  //       <input type="text" id="idInput" />
  //       <button onClick = {() => {this.getId()}}>SUBMIT</button>
  //       <div id="results"></div>
  //     </div>
  //   )
  // }

}

export default Home;

