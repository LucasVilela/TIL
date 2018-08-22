## String Decoder

[Docs](https://nodejs.org/api/string_decoder.html)

Because in Node the data comes in stream of information we have to create a buffer, a stream of binary data (a buffer object) into a string:

```js
var StringDecoder = require("string_decoder").StringDecoder
var buffer = ""

//The data will be send a little bits at the time
req.on("data", function(data) {
  buffer += decoder.write(data)
})

// When if finishes will bind the with the variable as utf-8 string
req.on("end", function(){
    buffer += decoder.end()
})

console.log("Request was received with this payload: ", buffer)
```
