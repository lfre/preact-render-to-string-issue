# preact-render-to-string-issue

Next.js Preact issue in development with preact-render-to-string 5.2.4+ and false esmExternals experiment.

## Versions

- Next.js 12.3.1
- Next Plugin Preact 3.0.7
- Preact render to string 5.2.5 (5.2.4 has the same issue)

## Issue

When using `next-plugin-preact` and `preact-render-to-string` 5.2.4+ in development mode *and* `esmExternals: false` experiment to solve [this issue](https://github.com/preactjs/next-plugin-preact/issues/25), the following error is thrown:

```bash
Error: Objects are not valid as a child. Encountered an object with the keys {0,1,2,3,4,5,6,7,8,9,10}.
```

The cause of the issue is triggered by the `preact/debug` entry. [Reference](https://github.com/preactjs/next-plugin-preact/blob/279b7854cbcbfed973c6e68403f2f392f952ae31/packages/next-plugin-preact/index.js#L74-L80), and the usage of variable interpolation in components. Example:

```jsx
function MyComponent({ name }) {
    return <div>My {name}</div>
}
```
