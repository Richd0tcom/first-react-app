import Board from "./components/Board";
import Hex from "./components/Hex";
import Switch from "./components/Switch";
import Clear from "./components/Clear";
import History from "./components/History";
import { useState, useEffect } from 'react';


function App() {


  const [ history, setHistory] = useState(JSON.parse(localStorage.getItem('colorHistory')) || ['#ff3362']);
  const [ color, setColor] = useState(history[0] || '#ff3362');
  
  
  const changeColor = ()=>{

    let currentColor = `#${(Math.random() * 0xfffff * 100000).toString(16).slice(0,6)}`;
    setColor(currentColor);

    setHistory([currentColor, ...history].slice(0,6));

  };


  useEffect(()=>{
    localStorage.setItem('colorHistory', JSON.stringify(history))
    
  },[history])

  const clearHistory = ()=>{
    let temp = history[0];
    setHistory([temp])
    
  };

  return (
    <main className="h-screen flex">
      <div className="basis-3/4 p-20">
        <Hex code={color}/>
        <Board color={color}/>
        <Switch onSwitch = {changeColor}/>
      </div>
      <div className="px-5 py-20 basis-1/2 md:px-10 lg:basis-1/4 xl:p-20">
        <Hex code={color}/>
        <History history={history}/>
        <Clear onClear={clearHistory}/>
      </div>
      
    </main>
  );
}

export default App;

