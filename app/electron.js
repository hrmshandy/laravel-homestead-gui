'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const ipcMain = require('electron').ipcMain
const childProcess = require('child_process')

let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = true
  config.url = `file://${__dirname}/dist/index.html`
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 760,
    width: 900
  })

  mainWindow.loadURL(config.url)


  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))

    let installExtension = require('electron-devtools-installer')

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * HANDLE RENDER PROCESS MESSAGES
 */
ipcMain.on('machine-status', (event, arg) => {
  const vagrant = childProcess.spawn('vagrant', ['status'], {
    cwd: `${arg.HOME}/Homestead`,
    env: arg,
  }).on('error', function( err ){ throw err });

  vagrant.stdout.on('data', (data) => {
    const regex = /default\s+(\w+)/g
    const status = data.toString()
    const matches = regex.exec(status)

    event.sender.send('machine-status', matches[1])
  })
})
