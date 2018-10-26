# Starting a Server in node


[HTTP - Documentation](https://nodejs.org/api/http.html)


To create an http server in node you can use the build in package in node ```http```

```js
// Start the HTTP server
var httpServer = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

httpServer.listen(3000, function() {
  console.log("Server is listening on 3000")
})
```
Short hand 

```js
var httpServer = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3000,function() {
  console.log("Server is listening on 3000")
})
```

---

