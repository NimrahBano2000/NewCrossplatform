import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login"
import { useState } from 'react';
import {Modal,Button} from "react-bootstrap"

// const { ipcRenderer } = window.require("electron");
// const electron = window.require('electron');
// import {ipcRenderer} from "electron";


function App() {
  
  // const [name, setName] = useState("");
  // const [recieve,setRecieve] = useState("");
  // const [r1,setR1] = useState("");
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  



  // const runFunction = () => {
  //   window.ipcRender.send('runScript');
  // }
  // const setValue = () =>{
  //   window.ipcRender.send('DisplayData',name)
  //   setShow(true);
    
  // }
  // window.ipcRender.receive('RecieveBack',(data)=>{
  //   setRecieve(data);
  // })
  // window.ipcRender.receive('firstRecieve',(data)=>{
  //   setR1(data);
  // })
            
  const callMain = () =>{
    window.ipcRender.send('stopInternet');
  }
  const Start = () =>{
    window.ipcRender.send("StartInternet");
  }



  return (
    <div className="App d-flex justify-content-around">

      <Button onClick={callMain}>Stop Internet</Button>
      <Button onClick={Start}>Start Internet</Button>
      {/* <button type="button" onClick={runFunction} value="Run Script">RUN Script</button>
      <div>
        <div>{r1}</div>
        <input type="input" placeholder="Enter your name" onChange={event => {
          setName(event.target.value) 
          }}/>
          <button onClick={setValue}>OK</button>
          </div>
        
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{recieve}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> */}
      
    </div>
  );
}

export default App;
