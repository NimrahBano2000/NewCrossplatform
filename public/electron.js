'use strict';
const path = require('path');
const electronIpcMain = require('electron').ipcMain;
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');


let win;

function createWindow() {
  // Create the browser window.
   win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: true,
      preload:path.join(__dirname,'preload.js')
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools({ mode: 'detach' });
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
  const Func = (evt,data) =>{
    const val = data;
    var spawn = require('child_process').spawn,
    ls = spawn('sh', ['public/yourname.sh'])
    
    ls.stdout.on('data',function (data){
      fullname = data.toString();
      
      win.webContents.send('RecieveBack',fullname)
    });
    ls.stdin.write(val)
    ls.stdin.end()
    
    //win.webContents.send('RecieveBack',fullname)
  }

electronIpcMain.on('DisplayData',Func)
  electronIpcMain.on('runScript', () => {
    // Windows
    
    
    // MacOS & Linux
    // let script = spawn('sh', ['/home/gaditek/Desktop/ElectronApp/my-app/public/yourname.sh'],{stdio:'inherit'});
    var spawn = require('child_process').spawn,
    ls = spawn('sh', ['/home/gaditek/Desktop/ElectronApp/my-app/public/yourname.sh'])

    ls.stdout.on('data',function (data){
      var name = data.toString();
      win.webContents.send('firstRecieve',name)

    });
 


})

