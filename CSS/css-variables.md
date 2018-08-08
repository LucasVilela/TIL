Css variables:
Using :root to declare global css variables

```css
:root {
  --base: green;
  --fontSize: 24px;
}

h1 {
  font-size: var(--fontSize);
  color: var(--base);
}
```