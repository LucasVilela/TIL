When using functions scoped in object `this` will be referring to the window object

```js
var tahoe = {
  resorts: ["Nevada Valley", "Lord Nelson", "Polar"],
  print: function(delay = 1000) {
    setTimeout(function() {
      console.log(this.resorts.join(","));
    }, delay);
  }
};

tahoe.print(); // Cannot read property 'join' of undefined
```

But when using a an arrow function, this will be protected on the scope

```js
var tahoe = {
  resorts: ["Nevada Valey", "Lord Nelson", "Polar"],
  print: function(delay = 1000) {
    setTimeout(() => {
      console.log(this.resorts.join(","));
    }, delay);
  }
};

tahoe.print(); // Nevada Valey,Lord Nelson,Polar
```
