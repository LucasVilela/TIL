# Creating a HTTPS server

To create an HTTPS server you first need a Open SSL key you can generate one with the command in Mac

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

this will generate two files `cert.pem` and `key.pem`, they will be used in node to start the server, you need to request `fs` from node to read those files when generating the server:

```js
// SSR keys
var httpsServerOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
}

// Instantiate the HTTPS server
var httpsServer = https.createServer(httpsServerOptions, function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.write("Hello World!")
  res.end()
})

// Start the HTTPS server
httpsServer.listen(5000, function() {
  console.log("The HTTPS server is running on port 5000")
})
```
