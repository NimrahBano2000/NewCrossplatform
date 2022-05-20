import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login"
import { useState } from 'react';

// const { ipcRenderer } = window.require("electron");
// const electron = window.require('electron');
// import {ipcRenderer} from "electron";


function App() {
  
  const [name, setName] = useState("");
  const [recieve,setRecieve] = useState("");
  const [r1,setR1] = useState("");
  const runFunction = () => {
    window.ipcRender.send('runScript');
  }
  const setValue = () =>{
    window.ipcRender.send('DisplayData',name)
    
  }
  window.ipcRender.receive('RecieveBack',(data)=>{
    setRecieve(data);
  })
  window.ipcRender.receive('firstRecieve',(data)=>{
    setR1(data);
  })
            
// ipcRender.on('RecieveBack',(data)=>{
//   console.log(data)
// })

  return (
    <div className="App">
      <button type="button" onClick={runFunction} value="Run Script">RUN Script</button>
      <div>
        <div>{r1}</div>
        <input type="input" placeholder="Enter your name" onChange={event => {
          setName(event.target.value) 
          }}/>
          <button onClick={setValue}>OK</button>
          </div>
          <input value={recieve}/>
      
    </div>
  );
}

export default App;
