# Introduction to Computer Science - General Assembly

## Big O notation:

When it comes to software, we talk about efficiency in terms of Big O notation. Big O comes from the world of math, where it’s used to describe the relationship between two functions based on their growth rates.

Big O focus in two types of performance on software

- Time performance: Is calculated basing the number of steps that the algorithm has to execute, relative to the size of the data that is working on
- Space complexity:

#### Classes of complexity

It measurers how efficient an algorithm can be given its load:

| Highly Efficient       |    Pretty Good    |          Inefficient |
| ---------------------- | :---------------: | -------------------: |
| Constant complexity    | Linear complexity | Quadratic complexity |
| Logarithmic complexity |                   | Factorial complexity |

#### Big O notation

If a function doesn't have and interaction ex.: `console.log('hello')` its notation is O(1), If has some loop inside that means run trough all the elements with is O(^2), and so on depending on the complexity inside the algorithm

## Recursion

Is when a function calls itself

```js
function crash() {
  console.log("running...");
  crash();
}
```

When a function run itself will be stuck in a infinity loop..

Different scenario

```js
function countDown(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
  return countDown(num - 1);
}

countDown(3);
```

```js
function persistence(num, index = 0, sum = 0) {
  if (num === 0) return;
  let splitNumber = num.toString(10).split("").map(function(t){return parseInt(t)});

  console.log(num);

  if (splitNumber < 10) {
    return splitNumber[0];
  }

  sum += splitNumber[index];
  console.log(sum)
//   return persistence(num - 1, index + 1, sum);
}

console.log(persistence(12));

```
