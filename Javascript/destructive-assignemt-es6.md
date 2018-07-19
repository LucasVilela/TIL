Destructuring Assignment allows you to locally scope fields within an object and to declare which values will be used.

```js
var car = {
  model: "Honda",
  year: 2000
};

const { year, model } = car;
```

Similar to arrays

```js
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"];
console.log(firstResort); // Kirkwood
```

Can also use comas to define how many items to jump

```js
var [, , beer] = ["🍩", "🌯", "🍺"];
console.log(beer); // 🍺
```
