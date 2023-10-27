## 知識點
- this 代表 function 的綁定物件，不同的程式碼脈絡，this 代表不同的綁定物件
- 在有箭頭函數之前，每個新函式是依據如何被呼叫來定義自己的 this，例如：
  - 在建構子時是一個新物件
  - 在呼叫嚴格模式函數時是 undefined
  - 以物件方法呼叫時則為基礎物件

## 全域中的 this
- 全域中的程式碼不管是否處於 strict mode，`this` 都指向全域物件
  ```js
  console.log(this); // Window
  ```

## 傳統 function 中的 this
- 非 strict mode 下，為全域物件
  ```js
  // 在瀏覽器中，全域物件是 Window，在 NODE 中是 global
  function test() {
    'use strict';
    console.log(this, 1); // Window 或者 global
    (function () {
      console.log(this, 2); // Window 或者 global
    })();
    (() => {
      console.log(this, 3); // Window 或者 global
    })();
  }

  test();
  ```
- strict mode 下，`this` 將保持進入執行環境的值；  
  所以如果沒有指定環境，則預設 `undefined`
  ```js
  test();
  function test() {
    'use strict';
    console.log(this, 1); // undefined
    (function () {
      console.log(this, 2); // undefined
    })();
    (() => {
      console.log(this, 3); // undefined
    })();
  }

  test();
  ```

## arrow function 中的 this
- 箭頭函式中 this 是被綁定的，所以套用 apply、call、bind 的方法時，無法修改 this
- 由於箭頭函式並沒有自己的 this，所以透過 call() 或 apply() 呼叫箭頭函式只能傳入參數，thisArg 將會被忽略
  - 那 bind 呢？

## 物件方法中的 this
- 無論是否為 strict mode，皆指向該物件
  ```js
  (() => {
    'use strict';

    const obj = {
      x: 3,
      printThis: function () {
        console.log(this);
        console.log(this === obj);
      },
    };

    obj.printThis(); // obj, true
  })();
  ```

## 事件處理 function 中的 this
- 無論是否為 strict mode，皆指向觸發事件的物件
  ```js
  (() => {
    'use strict';
    document.addEventListener('click', function () {
      console.log(this); // document
    });
  })();
  ```

## 建構函式中的 this
- 無論是否為 strict mode，皆指向構建出來的實例
  ```js
  (() => {
    'use strict';
    function People(name) {
      this.name = name;
      this.printThis = function () {
        console.log(this);
      };
    }

    const p1 = new People('Mike');
    p1.printThis();
  })();
  ```

## setTimeout
- 當 function 作為 setTimeout 的參數時，預設將函數綁定了 Window 物件
- 當 function 作為 callback function 時，需要注意是否被隱式綁定
- setTimeout 的第二個參數預設為 0

## closure
- closure 的執行相當於是傳回一個 function，然後將這個傳回的 function 執行，因此和傳統 function 的直接呼叫相同
  ```js
  (function () {
    // 'use strict';

    const box = {
      printThis: function () {
        console.log(this);
        return function () {
          console.log(this);
        };
      },
    };

    const obj = {
      x: 3,
    };

    box.printThis.call(obj)();
    // obj
    // Window or undefined(strict mode)
  })();
  ```

## 其他知識點
- 當 `this` 值為 `undefined` 或 `null` 會被強制轉成全域物件；而嚴格模式下，將不會強制轉換


# 參考文章
- [JavaScript的this关键字 - Web前端工程师面试题讲解](https://www.youtube.com/watch?v=RmxUKDsYHmc)
- [理解严格模式下JavaScript的this指向的变化](https://juejin.cn/post/6844903874478735373)
- [JavaScript 網頁前端工程進階：函式的綁定物件 this - 基本篇 By 彭彭](https://www.youtube.com/watch?v=5Vi5idUkuyA)
- [arrow function - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)