Object literal enhancement is the opposite of destructuring. It is the process of restructuring or putting back together. With object literal enhancement, we can grab variables from the global scope and turn them into an object:

```js
var hello = "🖖";
var world = "🌎";

var gimmeThat = { hello, world };

// gimmeThat  ={
//  "hello": "🖖",
//  "world": "🌎"
//}
```

We can also create object methods with object literal enhancement or restructuring:

```js
const skier = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
  }
};
```
