'use strict';
const path = require('path');
var fs = require('fs');
const electronIpcMain = require('electron').ipcMain;
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const WebSocket = require('ws');








let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  // and load the index.html of the app.
  
  
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  
  //win.loadFile(`file://${path.join(__dirname, '../build/index.html')}`);
  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools();
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
var fullname = "";
const Func = (evt, data) => {
  const val = data;
  var spawn = require('child_process').spawn,
    ls = spawn('sh', ['public/yourname.sh'])

  ls.stdout.on('data', function (data) {
    fullname = data.toString();

    win.webContents.send('RecieveBack', fullname)
  });
  ls.stdin.write(val)
  ls.stdin.end()

  //win.webContents.send('RecieveBack',fullname)
}



electronIpcMain.on('DisplayData', Func)



electronIpcMain.on('stopInternet', () => {

  var spawn = require('child_process').spawn;
  spawn('sh', ['public/blockInternet.sh']);

})

electronIpcMain.on('CallingGoFile', function (evt, data) {

  var RespData = ""
  var Data = data.toString();
  
  const socket = new WebSocket("ws://localhost:8080/ws");
    socket.onopen = () => {
    console.log('Connected');

    socket.send(JSON.stringify({
      message: Data
    }))

    socket.onmessage = (e) => {
      console.log("Get message from server: " + e.data);
      RespData = e.data;
    
      
    };
  };
 


  win.webContents.send('OutputGoFile',RespData);  
  return () => {
    socket.close();
  }
});


electronIpcMain.on("StartInternet", () => {

  var spawn = require('child_process').spawn;
  spawn('sh', ['public/startInternet.sh']);
})



electronIpcMain.on('runScript', () => {
  // Windows


  // MacOS & Linux
  // let script = spawn('sh', ['/home/gaditek/Desktop/ElectronApp/my-app/public/yourname.sh'],{stdio:'inherit'});
  var spawn = require('child_process').spawn,
    ls = spawn('sh', ['public/yourname.sh'])

  ls.stdout.on('data', function (data) {
    var name = data.toString();
    win.webContents.send('firstRecieve', name)

  });



})

