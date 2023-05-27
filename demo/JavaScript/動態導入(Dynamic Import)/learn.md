## `import(moduleName)`
### 參數
`import(moduleName)`
1. moduleName
   - The module to import from. The evaluation of the specifier is host-specified, but always follows the same algorithm as static import declarations.

### 回傳值
- Returns a promise which fulfills to a module namespace object: an object containing all exports from moduleName.

The evaluation of import() never synchronously throws an error. moduleName is coerced to a string, and if coercion throws, the promise is rejected with the thrown error.

### 何時適用 Dynamic Import



## 參考文章
- [import() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)