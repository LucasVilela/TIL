## When creating a module is best to follow the pattern of a empty object and assign functions to it

```js
var authentication = {}

authentication.stringify = function(string) {
  return JSON.stringify(string)
}

module.exports = authentication
```

It's the same as doing:

```js
var authentication = {
  stringify: function(string) {
    return JSON.stringify(string)
  }
}
```

But way better to export as a module as you can assign way more functions to it, seems to be the way in node
