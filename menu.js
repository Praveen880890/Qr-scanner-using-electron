const {Menu, BrowserWindow} = require("electron");
const menuFunc = async ()=>{

    const menuItems = [
        {
            label:"About",
            submenu : [{
                label:"intro"
            }
            ]
        },
        {
            label:"File",
            submenu : [{
                label :"Scan Qr",
                click : async ()=>{
                    const win2 =new BrowserWindow({
                        height: 500,
                        width: 600,
                        show:false,
                        darkTheme:true,
                    });
                    // win2.webContents.openDevTools();
                    win2.loadFile("camera.html");

                    win2.once("ready-to-show",()=>win2.show());
                }
            },
            {
                label :"Learn More",
                click : async ()=>{
                    await shell.openExternal("https://google.com")
                }
            },
            {
                type:"separator",
            },
            {
                label :"Exit",
                click: ()=>{
                    app.quit()
                }
            },
            ]
        },
        {
            label:"window",
            submenu:[
                {
                    role:"Minimize",
                },
                {
                    role:"close"
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuItems)
    Menu.setApplicationMenu(menu);
}
module.exports= {menuFunc};