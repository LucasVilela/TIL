
Thanks to [Flavio Copes Blog](https://flaviocopes.com/react-how-to-loop/)

```js
render() {
  const elements = ['one', 'two', 'three'];

  const items = []

  for (const [index, value] of elements.entries() {
    items.push(<li key={index}>{value}</li>)
  }

  return (
    <div>
      {items}
    </div>
  )
}
```


```js
render: function() {
  const elements = ['one', 'two', 'three'];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}

```