# 已開始找答案

## 數據類型和變數
### js 的變數有哪些類型？
1. Primitive (primitive value, primitive data type)
   1. string
   2. number
   3. bigint(ES 10)
   4. boolean
   5. `undefined`
   6. symbol(ES 6)
   7. `null`
2. Object
   1. Object
   2. Array
   3. Date
   4. RegExp
   5. Function
- 參考文章
  - [Primitive - MDN 英文](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
  - [JavaScript 的基本類型和引用類型](https://cloud.tencent.com/developer/article/1840248)
  - [JavaScript 深入了解基本类型和引用类型的值](https://www.runoob.com/w3cnote/javascript-basic-types-and-reference-types.html)
  - [原始類型的方法](https://zh.javascript.info/primitives-methods)

### `var`、`let`、`const` 的差別？
- `var`
  - The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
- `let`
  - The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.
- `const`
  - The `const` declaration creates block-scoped constants.
  - The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration).
  - However, if a constant is an object or array its properties or items can be updated or removed.
- `let`, `const` 會有 "temporal dead zone" 的可能性
- 參考文章
  - [var - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
  - [let - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [const - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - [temporal dead zone(TDZ 暫時性死區) - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)

### 什麼是 hoisting？
- Hoisting is not a term normatively defined in the ECMAScript specification. 
  - 參考文章
    - [Hoisting - MDN 英文](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
    - [Hoisting - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
    - [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)

### 在 JavaScript 當中，`==`、`===` 與 `Object.is()` 的區別？
- `==` Loose Equality
  - 會先做 implicit coercion(隱式型別轉換)，然後再比較
  - 物件與物件進行寬鬆相等，仍然是使用嚴格相等比較，也就是比較記憶體位置
- `===` Strict Equality
  - 純值的話，先比較型別，再比較值  
    如果是比較物件(Object, Array 等等)的話，則是比較記憶體位置指向是否相等
    - 例外：
      ```javascript
      +0 === 0; // true
      -0 === 0; // true
      +0 === -0; // true
      NaN === NaN; // false
      ```
- `Object.is()`
  ```javascript
  Object.is(+0, 0); // true
  Object.is(-0, 0); // false
  Object.is(+0, -0); // false
  Object.is(NaN, NaN); //true
  ```
  - 如果要想要辨別是否為 `NaN`，也可以使用 `Number.isNaN(param)`
- 單點知識點
  - 為什麼要用 `isNaN` 函式？
    - 你不可能靠等號運算符（`==` 與 `===`）來判斷某個值是不是 `NaN`，因為連 `NaN == NaN` 與 `NaN === NaN` 的結果都是 `false`。因此，`isNaN` 函式是必要的。
    - 當 `isNaN` 函式的參數並非數字型別時，此值會先強制轉換到數字，然後再判定此值是否為 `NaN`  
      所以 `isNaN` 其實還是有做隱含轉型  
      因此比較推薦使用 `Number.isNaN(param)`  
      例如：
      ```javascript
      isNaN("NaN"); // true
      // 因為 Number("NaN") // NaN

      typeof(NaN); // "number"

      // 只有這三種例子會回傳 true
      Number.isNaN(NaN);        // true
      Number.isNaN(Number.NaN); // true
      Number.isNaN(0 / 0);      // true

      // 底下會回傳 false，但用 .isNaN() 會回傳 ture
      Number.isNaN("NaN");      // false
      Number.isNaN(undefined);  // false
      Number.isNaN({});         // false
      Number.isNaN("blabla");   // false
      ```
- 參考文章
  - [Object.is() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
  - [Number.isNaN() - MDN 英文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
  - [isNaN() - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
  - [[第三週] JavaScript - 把你對 isNaN 的不滿都說出來](https://yakimhsu.com/project/project_w3_Javasciprt_NaN.html)

### 為什麼 `typeof(null)` 是 object？
- The "typeof null" bug is a remnant(遺跡) from the first version of JavaScript. In this version, values were stored in 32 bit units, which consisted of a small type tag (1–3 bits) and the actual data of the value. The type tags were stored in the lower bits of the units. There were five of them:
  1. 000: object.  
    The data is a reference to an object.
  2. 1: int.  
    The data is a 31 bit signed integer.
  3. 010: double.  
    The data is a reference to a double floating point number.
  4. 100: string.
    The data is a reference to a string.
  5. 110: boolean.
    The data is a boolean.
  - 所以是一段小 tag + 實際的值，是嗎？
- 參考文章
  - [MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)
  - [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html)
  - [js 數據類型檢測 typeof 和 instanceof 檢測原理](https://juejin.cn/post/6844903776642416654)

### `typeof(NaN)` 回傳值為何？
- 'number'

### 在 JavaScript 中，0.1 + 0.2 !== 0.3 的原因和解決方法
- 原因
  - IEEE 754
- 解決方法
  - 使用套件 [decimal.js](https://www.npmjs.com/package/decimal.js)
  - 使用套件 [bignumber.js](https://www.npmjs.com/package/big-number)
- 參考文章
  - [從 IEEE 754 標準來看為什麼浮點誤差是無法避免的](https://medium.com/starbugs/see-why-floating-point-error-can-not-be-avoided-from-ieee-754-809720b32175)
  - [javascript 雙精度浮點數剖析](https://zhuanlan.zhihu.com/p/351127362)

### 其他
- JavaScript 為動態定型語言，其變數本身使用者無需宣告型態，型態資訊僅在值或物件本身，變數只用來作為取得值或物件的參考。  
  由於變數本身不帶型態資訊，同一個變數可以指定不同型態的值，實際操作時，是在執行時期才透過變數來參考至物件或值，才得知物件或值上有操作之方法。


## 物件
- 物件的 key 如果沒有用中括號包起來的話，只能是 string
- 物件的屬性名稱可以有兩種類型
  1. string
  2. Symbol


## 閉包、作用域
### 什麼是 scope(作用域)？
- 依據 mdn 的說法，
  > The scope is the current context of execution in which values and expressions are "visible" or can be referenced.  
  > If a variable or expression is not in the current scope, it will not be available for use.
- JavaScript has the following kinds of scopes:
  1. Global scope:  
    The default scope for all code running in script mode.
  2. Module scope:  
    The scope for code running in module mode.
  3. Function scope:  
    The scope created with a function.
  4. Block scope:  
    The scope created with a pair of curly braces (a block).  
    Variables declared with `let` or `const` can belong to this additional scope.
- 作用域也可以堆疊成層次結構，子作用域可以訪問父作用域，反過來則不行
- 由於函式會創建作用域，因而在函式中定義的變量無法從該函式外部訪問，也無法從其他函式內部訪問
- Block scope(塊級作用域)只對 `let` 和 `const` 聲明有效，對 `var` 聲明無效。
- 參考文章
  - [Scope - MDN 英文](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
  - [Scope - MDN 簡體中文](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)

### 甚麼是閉包(closure)？
- 參考文章
  - [[JS] 深入淺出 JavaScript 閉包（closure）](https://pjchender.dev/javascript/js-closure/)
  - [為什麼我們需要閉包(Closure)？它是冷知識還是真有用途？](https://nissentech.org/why-do-we-need-closure/)


## 函式
### callback function
- callback function 並非立即被執行  
  它會在函式內部的某個地方非同步的 "回去呼叫" 它（因此稱回呼）。  
  呼叫 callback function 的 function 有責任在適當的時機去執行該 callback function。

### function declaration(陳述式), function expression(表達式) 差別？
- function hoisting
- 
  ```javascript
  // 函式宣告（Function Declaration）
  function sum(x, y) {
    return x + y;
  }

  // 函式表示式（Function Expression）
  let mySum = function (x, y) {
    return x + y;
  };
  ```
- 順帶複習的概念
  - By default, functions return `undefined`.  
    To return any other value, the function must have a return statement that specifies the value to return.
  - The typeof operator in JavaScript returns `"function"` for functions.
- 參考文章
  - [function declaration - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
  - [function expression - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
  - [JavaScript Function Definitions - w3schools](https://www.w3schools.com/js/js_function_definition.asp)

### rest parameter(其餘參數)
- 如果函式的最後一個命名參數以 `...` 開頭，它會被視為一個陣列
```javascript

```

### async await
- The `AsyncFunction` object provides methods for async functions. In JavaScript, every async function is actually an `AsyncFunction` object.  
  Note that AsyncFunction is not a global object. It can be obtained with the following code:
  ```javascript
  const AsyncFunction = async function () {}.constructor;
  ```
  AsyncFunction is a subclass of Function.
- 只要 function 標記為 async，就表示裡頭可以撰寫 await 的同步語法
- async 函式是 AsyncFunction 的實例，型態為 Function 的子類型
- ES13 以後，可以在頂層直接撰寫 await，不限於只能在 async function 內才可使用
- await 可以接上任何值，不一定要搭配 async 函式，只不過若是接上 Promise 實例，會在任務達成時，取得達成值作為 await 的結果
#### 參考文章
- [ASYNC、AWAIT](https://openhome.cc/zh-tw/javascript/es-function/async-await/)


## 事件循環
### 什麼是 event loop？
- 先備知識
  - 資料結構：
    - queue: 先進先出(FIFO)
    - stack: 後進先出(FILO)
- 圖解  
  這張圖算是 event loop 的精髓，可以先記起來
  ![](https://d1dwq032kyr03c.cloudfront.net/upload/images/20221030/20153830eFeFoYYWKe.jpg)
- 可以說它是依附著瀏覽器而存在的一個事件監聽器，用以控管各項任務順暢執行
  - 如何監控？
  - 事件執行的優先序為何？
- 回答下列問題，可以更深刻的理解 event loop
  - 為什麼 JavaScript 會選擇使用 single thread？  
    當初 JavaScript 是為了在瀏覽器上運作，和使用者互動的腳本語言。  
    由於 Javascript 需要操作 DOM，並且將 DOM 正確地繪製在瀏覽器上。一旦有多執行緒，就必須考慮到不同 thread 同時存取同一變數的情形，也會讓情況變得更加複雜。  
    例如：如果有兩個以上的 thread 同時修改 DOM 怎麼辦？  
    為了避免不必要的複雜性，所以選擇 single thread。
  - single thread 有甚麼特點？
    - 優點
      - 簡單，不需要考慮併發問題
    - 缺點
      - 當有一個任務耗時很長，後續的任務就必須等待，此時便造成了阻塞(blocking)，用戶瀏覽的畫面便會卡住
  - macrotask, microtask 各有哪些？
    - 可以記 microtask 就好，因為比較少XD
    - macrotask
      1. 從 `<script src="...">` 外部下載的 script
    	1. 各種 Web APIs，例如 setTimeout, setInterval 的 callback function
    	2. DOM event handlers，例如 mousemove event 的 callback function handler
    	3. ajax callback function
      2. I/O(甚麼是 I/O？)
      3. 事件(甚麼事件？)
      4. postMessage
      5. MessageChannel
    - microtask
      1. Promise .then/catch/finally 中的 callback function
      2. queueMicrotask(func) 中的 func
      3. process.nextTick
      4. MutationObserver
  - event loop 的執行順序為何？
    - 如上方圖解
    - 執行順序總結：  
      1. 執行一個 macrotask
      2. 執行該 macrotask 產生的 microtask
      3. 若 microtask 在執行過程中產生了新的 microtask，則繼續執行 microtask 直到 microtask queue 為空
      4. 回到 macrotask 中進行下一輪循環
- 單點知識點
  - Event Loop 嚴格來說並非 JavaScript 本身的機制，而是 JavaScript 運行環境(runtime)的機制(runtime 通堂是 瀏覽器或是 Node.js)。
  - 不同類型的 macrotask，其處理優先順序，並沒有保證誰先觸發誰就先執行，這都還是要看瀏覽器如何實作。
  - 在單次的 event loop 中，最多只處理一項 macrotask，但是所有 microtask 都會被處理完畢(見上方圖解的 is microtask queue empty? 的部分)。
- 視覺化理解 call stack
  - ![](https://www.programfarmer.com/article/javaScript/javascript-browser-event-loop/01.gif)
  - ![](https://miro.medium.com/v2/resize:fit:828/0*0EpvJV7Wc6TLNtF6.gif)
- 參考文章
  - [html spec](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
  - [event loop - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
  - [event loop - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/EventLoop)
  - [【筆記】到底 Event Loop 關我啥事？](https://medium.com/infinitegamer/why-event-loop-exist-e8ac9d287044)
  - [[Javascript] 深入了解事件迴圈(Event Loop)，Macrotask跟Microtask是什麼？](https://gcdeng.com/series/Javascript/javascript-deep-dive-into-event-loop)
  - [請說明瀏覽器中的事件循環 (Event Loop)](https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-event-loop)
  - [再談Event Loop](https://f2e.kalan.dev/javascript-basic/5.html)
  - [透過程式範例，熟悉 JS 執行流程的關鍵：Event Loop](https://www.programfarmer.com/articles/javaScript/javascript-browser-event-loop)
  - [【前端進階】深入淺出瀏覽器事件循環【內附練習題】](https://juejin.cn/post/6880419772127772679)
  - [我知道你懂 Event Loop，但你了解到多深？](https://yeefun.github.io/event-loop-in-depth/)
  - [從「為什麼不能用這個函式」談執行環境（runtime）](https://blog.huli.tw/2022/02/09/javascript-runtime/)
  - [[筆記]-JavaScript Event Loop是什麼?Event Loop的3個重點](https://jianline.com/javascript-event-loop/)


## ES6 相關
### 解構賦值
- 





## 其他
### 記憶體管理
- 像 C 語言一樣低階的語言，都有著如 malloc() 跟 free() 的低階函式控管記憶體權限
- 記憶體生命週期
  - 不論是哪種程式語言，記憶體生命週期(運作方式)幾乎總是一樣：
    1. 配置程式需要的記憶體空間
    2. 使用配置到的記憶體空間(讀，寫)
    3. 當不再使用時釋放已被配置的記憶體空間

    在所有語言中，第二點的(運作方式)是確定的。  
    第一點以及最後一點在低階語言中是確定的，但是在高階語言如 JavaScript 則通常是不明確的。
- 為了不讓開發者對配置感到困擾，JavaScript 會在宣告值的同時完成記憶體配置
- 當我們談論到記憶體管理，問題通常出現在這個階段。  
  **最困難的工作是尋找「已不再被使用的記憶體配置空間」。**  
  低階語言需要開發者自己決定，當程序執行道某個地方時，是否有已被分配的記憶體不再需要。並手動將其釋放。  
  高階的語言 (e.g. JavaScript) 有一個叫作垃圾回收器(garbage collector) 的系統，他的工作是追蹤記憶體分配的使用情況，以便自動釋放一些不再被使用的記憶體空間。但這個垃圾回收器只能「儘量」做到自動釋放記憶體空間，因為判斷記憶體空間是否要繼續被使用，這件事是「不可判定(undecidable)」的。  
  (為何是不可判定的？)
- 回收機制的演算法主要概念是 reference。  
  在記憶體管理的 context　中，如果一個物件可以訪問到另一個物件(無論是隱式或顯式)，即稱為該物件參考另一個物件。例如：JavaScript 的物件都有參考該物件的原型(prototype) (隱式參考) 以及該物件的屬性值 (顯式參考)。
- GC 演算法實作
  1. Reference-counting garbage collection 是一個最務實的垃圾回收演算法。  
    這個演算法將原本 "這個物件再也不會被使用" 的廣泛定義縮減到 "**沒有其他任何物件參考它**"。   
    如果一個物件不再被任何物件參考，它將被視為可回收的記憶體。
  2. 標記和清理演算法
    這個演算法將原本 "這個物件再也不會被使用" 的廣泛定義縮減到 "**這個物件不可到達**"。  
    **截至 2012 年，所有現代瀏覽器都使用標記和清理演算法**。  
    在過去的幾年裡，JavaScript 垃圾回收領域的所有改進都是對這個演算法的實作與改進，但並未改進垃圾回收演算法本身，也沒有縮減垃圾的定義 「這個物件再也不會被使用」。  
- 參考文章
  - [記憶體管理 - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Memory_Management)

### JS 中有哪些錯誤類型？
1. SyntaxError(語法錯誤)  
   - 錯誤的使用已經預定義的語法
2. TypeError(類型錯誤)  
   - 值不是預期數據類型
   - 調用無效方法
3. ReferenceError(引用錯誤)  
   - 找不到變數的引用
   - 在變數作用域範圍之外使用變數
   - 使用未聲明的變數
   - 在暫時性死區期間使用變數
4. RangeError(範圍錯誤)  
   - 將變數設置在其限定的範圍之外
   - 將值傳遞給超出範圍的方法
   - 調用一個不會結束的遞歸函式
5. URIError(URI 錯誤)  
   - 當 URI 的編碼和解碼出現問題
     JavaScript 中的 URI 操作函式包括：`decodeURI`、`decodeURIComponent` 等。如果使用了錯誤的參數(無效字符)，就會拋出URIError。
6. EvalError(Eval 錯誤)  
   - 當 `eval()` 函數調用發生錯誤  
     不過目前的 JavaScript 引擎或 ECMAScript 規範不再拋出此錯誤。但是，為了向後兼容，它仍然是存在的。
7. InternalError(內部錯誤)  
   - 當 JavaScript 引擎上的工作負載突然激增時，會拋出此錯誤。  
     當有太多數據需要處理時，工作量就會激增，比如調用的函式包含過多的遞歸或者過多的 switch case 時(為什麼過多的 switch case 會導致工作量激增？)。

注意： 現代JavaScript 中不會拋出EvalError 和InternalError 錯誤。
- 參考文章
  - [Error - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - [你應該知道的七種JavaScript 錯誤類型](https://www.51cto.com/article/709279.html)
  - [js 中有哪些內置錯誤類型？](https://juejin.cn/post/7020321066664853540)
  - [從ES6開始的JavaScript學習生活 - 錯誤與例外處理](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/error.html)

### 發展過程
- Brendan Eich (JavaScript 主要創造者與架構師) 在《Effective JavaScript》前言中這麼描述：
  > 1995 年 5 月在管理階層協迫性且互相衝突的命令：「讓它看起來像 Java」、「讓初學者容易上手」、「讓它能控制 Netscape 瀏覽器中幾乎所有的東西」之下，我在十天內建立了 JavaScript。
- 命名轉變
  - JavaScript 一開始被命名為 Mocha
  - 1995 年 9 月 Navigator 2.0 的 Beta 版改名為 LiveScript
  - 為了行銷這門語言，1995 年 12 月 Netscape Navigator 2.0 Beta 3 中被改名為 JavaScript，以搭上「Java」這個熱門話題 ，並且號稱它是為非程式設計師打造、簡單易用的腳本語言。
- JavaScript 與 Java 之間，除了基礎流程語法及一些關鍵字相似之外，在風格或是典範根本上是兩種完全不同的語言；  
  另一方面，由於設計上倉促急迫，JavaScript 有不少矛盾與古怪的特性，有些矛盾特性今日依舊存在，應該避免使用；然而有些古怪特性，在 20 多年來開發者的經驗與創意持續累積下，卻也成了 JavaScript 中的亮點，成了 JavaScript 開發者都應當掌握及善用的特色。
- 參考文章
  - [林信良 - 從 ECMASCRIPT 5 開始](https://openhome.cc/zh-tw/javascript/basics/es5/)

-----------------------------------------------------------------------------------------------------------------
# 待寫答案


-----------------------------------------------------------------------------------------------------------------
# 已閱讀文章
- 



-----------------------------------------------------------------------------------------------------------------
# 轉貼文章
- [網上都說操作真實 DOM 慢，但測試結果卻比 React 更快，為什麼？](https://www.zhihu.com/question/31809713)
- [JavaScript、ES6 高頻重點面試題](https://www.arryblog.com/interview/js/)
  - 有分類面試題目，可參考




-----------------------------------------------------------------------------------------------------------------
# 題庫
- 為什麼在 JS 中的最大安全數是 2⁵³ - 1?

- 在 JavaScript 中，`Map` 與 `Object` 的差別？為什麼有 `Object` 還需要 `Map`？

- By value vs by reference

- Promise 和 async await 要解決的是什麼問題？

- 什麼是 event bubbling？

- 知道 event bubbling 和 capture 的事件傳遞流程嗎？

- 在不同情況下 this 指向對象會是什麼？

- 什麼是原型鍊（prototype chain）？

- 什麼是閉包（closure）？用途是什麼？

- 非同步與同步操作混用時的輸出順序

- 有用遞迴的方式寫過 async await 嗎？

- Array.forEach, Array.map, Array.filter, Array.reduce 的差別？

- 如果要實現 myMap() 跟 map 的功能一樣，要怎麼做（[1,2,3].myMap(()=>{...})）

- 請解釋甚麼是 callback function？

- 請解釋「淺拷貝」和「深拷貝」

- 請說出 JavaScript 所有的基本型別

- HTTP 狀態碼 304 代表什麼？是多好還是少好？

- 為什麼 `typeof(null)` 回傳的是 'object'？

- `null` 和 `undefined` 的區別？

- 透過 `const` 聲明生成物件的時候，如何使其不可更改？
