<div align="center">
  <a href="https://github.com/rajjejosefsson/test-id-loader">
    <img width="170" height="170" title="TestIdLoader" src="https://image.flaticon.com/icons/png/512/10/10453.png">
  </a>
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1>Test Id Loader</h1>
</div>

## Install

```bash
npm i -D test-id-loader
```

## Example

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      { test: /\.tsx$/, use: 'test-id-loader' }
    ]
  }
};
```

MIT