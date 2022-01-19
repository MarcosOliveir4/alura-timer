const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    with: 600,
    height: 400,
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on("window-all-closed", () => {
  app.quit();
});
