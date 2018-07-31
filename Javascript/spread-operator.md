Spread Operator magic

Join Arrays

```js
var peaks = ["Tallac", "Ralston", "Rose"] var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', ')) // Tallac, Ralston, Rose, Ward, Blackwood
```

Add last item in front

```js
var peaks = ["Tallac", "Ralston", "Rose"] var [last] = peaks.reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Rose, Ralston, Tallac
```

The spread operator can also be used to get some, or the rest, of the items in the array:

```js
var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
var [first, ...rest] = lakes;
console.log(rest.join(", ")); // "Marlette, Fallen Leaf, Cascade"
```

Clever function

```js
function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
```
