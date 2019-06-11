const {app, BrowserWindow} = require('electron')
function createWindow () {
  // Create the browser window.
win = new BrowserWindow({width: 800, height: 600})

// and load the index.html of the app.

//win.loadFile('index.html')
win.loadURL('http://localhost:3000/')

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
