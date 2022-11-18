
import './App.css';
import {useState} from 'react';


function App() {
  const[leftDiceNumber,setLeftDiceNumber]=useState(2);
  const[rightDiceNumber,setRightDiceNumber]=useState(3);

  const onButtonClicked = () =>{
      console.log("Button clicked");
      setLeftDiceNumber(Math.floor(Math.random()*6)+1);
      setRightDiceNumber(Math.floor(Math.random()*6)+1);
      console.log(leftDiceNumber, rightDiceNumber);

  }
  return (
    <div className="App">
      <header>Dicee</header>
      <main>
        <button onClick={onButtonClicked}><img src={require(`./assets/dice${leftDiceNumber}.png`)}/></button>
        <button onClick={onButtonClicked}><img src={require(`./assets/dice${rightDiceNumber}.png`)}/></button>
      </main>
    </div>
  );
}


export default App;
