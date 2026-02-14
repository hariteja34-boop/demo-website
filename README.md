# QuickBites — Local Food Delivery Demo

This repo is a minimal, static food-delivery demo app you can run locally. It includes a small menu, an interactive cart, and responsive styles.

Run (recommended):

1. Open a terminal in this folder.
2. Start a simple HTTP server (Python 3):

```powershell
py -3 -m http.server 8000
```

or

```powershell
python -m http.server 8000
```

3. Open http://localhost:8000 in your browser.

Note: if you see a directory listing (lots of system files) instead of the demo site, your server is running from the wrong folder. Make sure you:

1. Open PowerShell or a terminal in the project folder (the folder that contains `index.html`). For example:

```powershell
Set-Location -LiteralPath 'C:\Users\harit\OneDrive\Documents\demo-website'
```

2. Then start the server in that folder (commands above). If another server is already using port 8000, stop it first. To stop a process listening on port 8000 (PowerShell):

```powershell
$pid = (Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue).OwningProcess; if ($pid) { Stop-Process -Id $pid -Force }
```

After that, start the Python server again and open http://localhost:8000.

Windows one-click: run `start-server.bat` to open the browser and start the server.

Files of interest:

- [index.html](index.html) — demo UI
- [css/styles.css](css/styles.css) — styles
- [js/app.js](js/app.js) — cart interactivity

Try adding items to the cart and clicking the `Cart` button to view totals.
