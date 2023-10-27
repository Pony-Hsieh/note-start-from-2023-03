## `Function.prototype.call`
- 使用時機：
- 回傳值：  
  The result of calling the function with the specified `this` value and arguments.
- 用法：  
  `call(thisArg, arg1, arg2, /* …, */ argN)`
  - 參數：
    1. thisArg
       - If the function is not in strict mode, `null` and `undefined` will be replaced with the global object, and primitive values will be converted to objects.
    2. `arg1, …, argN`
       - Arguments for the function.


## `Function.prototype.apply`
- 使用時機：
- 回傳值：  
  The result of calling the function with the specified this value and arguments.
- 用法：  
  `apply(thisArg, [arg1, arg2, ... , argN])`
  - 參數：
    1. thisArg
    2. argsArray
       - 可接受陣列、類陣列(例如 function 中的 arguments 即為 array-like)
       - An **array-like** object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function.
- 記法： apply, array 開頭都是 a


## `Function.prototype.bind`
- 使用時機：
  1. 想要傳入參數，但還不想執行這個 function 時  
     - ex: addEventListener
        ```js
        const debounceCb = debounce(
          copyContentToClipboard.bind(null, 'to be copied content')
        );

        const btnCopy = document.querySelector('.jsCopy');
        btnCopy.addEventListener('click', debounceCb);
        ```
  2. 想要綁定函式的 this 指向時
- 回傳值：  
  A copy of the given function with the specified `this` value, and initial arguments (if provided).
- 用法：  
  `bind(thisArg, arg1, arg2, /* …, */ argN)`
  - 參數：
    1. thisArg
       - 如果不填就是 undefined，在非嚴格模式下，this 會指向全域物件
       - 嚴格模式下，如果 `thisArg` 為 `null` 或不填，基本上應該是會出錯的，可參考此回答： [Binding function to null](https://stackoverflow.com/a/29598743)
       - If the function is not in strict mode, `null` and `undefined` will be replaced with the global object, and primitive values will be converted to objects.
       - The value is ignored if the bound function is constructed using the `new` operator.
    2. `arg1, …, argN`
       - Arguments to prepend to arguments provided to the bound function when invoking the function.


## 比較

### 相同
- 指定 `this` 的指向

### 相異
- 是否直接執行 function？
  - call, apply: 是
  - bind: 否
- 傳入參數型態
  - call: 一個一個傳
  - apply: 傳入陣列(或類陣列)
    - 記法： apply, array 都是 a 開頭
  - bind: 一個一個傳
  - MDN 的文件中指出，call 與 apply 基本上相同，只差在傳入參數型式上的差異
    > This function(`call()`) is almost identical(完全相同的) to `apply()`, except that the function arguments are passed to `call()` individually as a list, while for `apply()` they are combined in one object, typically an array — 
    for example,  
    `func.call(this, "eat", "bananas")`  
    vs.  
    `func.apply(this, ["eat", "bananas"])`


# 參考文章
- [Function.prototype.call() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Function.prototype.apply() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Function.prototype.bind() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)