var http = require("http")
var url = require("url")

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    var q = url.parse(req.url, true).query
    var txt = `${q.name}  ${q.family} from ${q.origin}`
    res.end(txt)
  })
  .listen(8080, function() {
    console.log("Starting the server at port http://localhost:8080/")
  })
