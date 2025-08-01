const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("public/download/index.html");
}

app.whenReady().then(() => {
  createWindow();
});