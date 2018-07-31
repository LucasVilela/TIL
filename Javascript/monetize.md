## Formating currency on JS 

Two approaches

(MDN)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat]
```js
new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 }).format(value)
```


Using Regex
```js
export function monetize (value) {
  return "$" + parseInt(value)
    .toFixed()
    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
}
```