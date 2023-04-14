const {app,BrowserWindow,Menu} = require("electron")
const path = require("path")
const {shell} = require("electron")
const menu =require("./menu")
menu.menuFunc();

const createWindow = () =>{
    const win = new BrowserWindow({
        height:500,
        width: 600,
        webPreferences:{
            preload: path.join(__dirname,"preload.js"),
            devTools:true
        },
    });
    win.loadFile('index.html')
    win.webContents.openDevTools();
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate',()=>{
        if (BrowserWindow.getAllWindows().length===0) createWindow();
    })
})
app.on("window-all-closed",()=>{
    if (process.platform !== "darwin") app.quit();
})