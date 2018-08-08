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
```js
/**
 * Convert a number to a currency format without ,00
 * @param {string} value 52000
 * @returns 5,200
 */
export function formatAUD (value) {
  return "$" + new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 }).format(value)
}

```