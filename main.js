
const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const cors = require('cors');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets/pixiwall_icon.ico')
  });
  win.loadURL('http://localhost:51234');
}

function startServer() {
  const serverApp = express();
  serverApp.use(cors());
  serverApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  serverApp.use(express.static(path.join(__dirname, 'frontend')));
  serverApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'));
  });
  serverApp.listen(51234, () => {
    console.log("Server running on http://localhost:51234");
  });
}

app.whenReady().then(() => {
  startServer();
  createWindow();
});
