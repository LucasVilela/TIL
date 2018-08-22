## Generating a random string 

Can be helpful to generate a token of a random string 

1. Define what characters can be used, this case using all the alphabet 
```js
var possibleCharacters = var possibleCharacters = "abcdefghijklmnopqrtuvwxz0123456789"
```

2. Generate one random number that can be the length of the possible characters string 
```js
var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)
```
This case ```chartAt``` is the position on the string, ```Math.floor()``` will round the final number, and ```Math.random()``` will generate a random number from 0 to 1 

3. Loop troughs the function to get the length that you want, and append the random number to the empty string

```js
 var str = ''
    for (i = 1, i > strLength, i++){
      var randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      )
      str+=randomCharacter
    }
```

now ```randomCharacter(10)``` will generate a 10 long token for example 