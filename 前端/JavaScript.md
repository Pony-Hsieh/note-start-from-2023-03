# 已開始找答案

- 什麼是 scope(作用域)？
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

- `var`、`let`、`const` 的差別？
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

- 什麼是 hoisting？
  - Hoisting is not a term normatively defined in the ECMAScript specification. 
  - 參考文章
    - [Hoisting - MDN 英文](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
    - [Hoisting - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
    - [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)

- 什麼是 event loop？
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
    - 為什麼 JavaScript 會選擇使用 single threaded？  
      當初 JavaScript 是為了在瀏覽器上運作，和使用者互動的腳本語言。  
      由於 Javascript 需要操作 DOM，並且將 DOM 正確地繪製在瀏覽器上。一旦有多執行緒，就必須考慮到不同 thread 同時存取同一變數的情形，也會讓情況變得更加複雜。  
      例如：如果有兩個以上的 thread 同時修改 DOM 怎麼辦？  
      為了避免不必要的複雜性，所以選擇 single threaded。
    - macrotask, microtask 各有哪些？
      - 可以記 microtask 就好，因為比較少XD
      - macrotask
        1. 從 `<script src="...">` 外部下載的 script
      	2. 各種 Web APIs，例如 setTimeout, setInterval 的 callback function
      	3. DOM event handlers，例如 mousemove event 的 callback function handler
      	4. ajax callback function
        5. I/O(甚麼是 I/O？)
        6. 事件(甚麼事件？)
        7. postMessage
        8. MessageChannel
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


-----------------------------------------------------------------------------------------------------------------
# 待寫答案


-----------------------------------------------------------------------------------------------------------------
# 已閱讀文章
- 



-----------------------------------------------------------------------------------------------------------------
# 轉貼文章
- [網上都說操作真實 DOM 慢，但測試結果卻比 React 更快，為什麼？](https://www.zhihu.com/question/31809713)




-----------------------------------------------------------------------------------------------------------------
# 題庫

- 什麼是 event loop？

- 甚麼是 debounce？

- debounce 和 throttle 的差異為何？

- == 和 === 的差異為何？

- function declaration(陳述式), function expression(表達式) 差別？

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
