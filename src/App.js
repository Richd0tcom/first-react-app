import Board from "./components/Board";
import Hex from "./components/Hex";
import Switch from "./components/Switch";
import { useState } from 'react';


function App() {

  const [ color, setColor] = useState('#ff3362');
  
  const changeColor = ()=>{

    let hx = (Math.random() * 0xfffff * 100000).toString(16).slice(0,6);
    setColor(
      `#${hx}`
    )
  };
  return (
    <main className="pt-12 md:pt-32 h-screen flex flex-col items-center">
      <Hex code={color}/>
      <Board color={color}/>
      <Switch onSwitch = {changeColor}/>
    </main>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */