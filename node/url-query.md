## Using url 


[Url Docs](https://nodejs.org/api/url.html#url_urlobject_query)

```json
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});
```


```js
var url = require('url');
```


```js
r http = require("http")
var url = require("url")

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    
    //Requesting the query object from the url
    var q = url.parse(req.url, true).query

    
    var txt = `${q.name}  ${q.family} from ${q.origin}`
    res.end(txt)
  })
  .listen(8080, function() {
    console.log("Starting the server at port http://localhost:8080/")
  })


```

When receiving a request, the string follow by "/?" are the parameters and after each parameter need "&"

```js
localhost:8080/?name=Lucas&family=Vilela&origin=Brazil
```

On this call will return 
```
Lucas  Vilela from Brazil
```