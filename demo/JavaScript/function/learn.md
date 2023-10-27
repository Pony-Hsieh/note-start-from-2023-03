# 參數
- JavaScript 在讀取 function 參數值時，會由左至右讀取
- 在 es6 中，可以在宣告 function 時就給定參數預設值
  ```js
  function eatFood(fruit = 'apple', vegetable = 'cabbage') {
    console.log(fruit);
    console.log(vegetable);
  }
  ```


# arguments
- `arguments` is an **array-like** **object** accessible inside functions that contains the values of the arguments passed to that function.
- `arguments` is an array-like object, which means that arguments has a `length` property and properties indexed from zero, but it doesn't have Array's built-in methods like `forEach()` or `map()`. However, it can be converted to a real Array, using one of `slice()`, `Array.from()`, or `spread` syntax.
  ```js
  const args = Array.prototype.slice.call(arguments);
  // or
  const args = Array.from(arguments);
  // or
  const args = [...arguments];
  ```
- 參考文章
  - [arguments - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)


# rest parameters(其餘參數)和 arguments object 的差異
- 比較表格
  | | rest parameters | arguments object |
  | :----: | :----: | :----: | 
  | 型別 | array | array-like |
  | 內容 | bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam | contains all of the parameters |
  | 取用方式 | funtion(...args)<br/>`args` 可自行命名 | function 內
- 如果 function 沒有傳入參數的話，那 rest parameters 與 arguments object 基本上只有型別以及使用方法上(畢竟型別都不同了)的差異，而 array-like 的型態也可以轉換為 array
- 參考文章
  - [The difference between rest parameters and the arguments object - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  - [其餘參數和 arguments 物件的差異 - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters#%E5%85%B6%E9%A4%98%E5%8F%83%E6%95%B8%E5%92%8C_arguments_%E7%89%A9%E4%BB%B6%E7%9A%84%E5%B7%AE%E7%95%B0)


# arrow function
- 由於箭頭函式並沒有自己的 `this`，所以透過 `call()` 或 `apply()` 呼叫箭頭函式只能傳入參數。thisArg 將會被忽略
- 箭頭函式沒有 arguments，但 rest parameters 仍然可以使用
- 沒有原型(prototype)屬性