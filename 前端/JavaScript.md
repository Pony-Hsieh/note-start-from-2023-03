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

- function declaration(陳述式), function expression(表達式) 差別？
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

- localstorage, sessionstorage, cookie 差在哪？
  - 試著回答下列問題：
    - 為什麼要有 cookie？他是想要解決甚麼問題？
      - 現在網路通訊大多採用 HTTP 協定，而 HTTP 是一個 無狀態(Stateless) 的協定。  
        Stateless 的意思是指，每一次 request 都是獨立的，彼此之間不會有任何紀錄和關聯，所以 server 那邊也不會保存任何狀態，每一次 request 都會視為一個新的 request。換句話說，你可以把伺服器想成是一個喪失記憶能力的人，每一次你去找他的時候，他都當作是第一次見到你，完全不記得你以前曾經找過他。
      - 讓使用者和伺服器間保有狀態的這個機制(或流程)就叫做session。
  - 在 HTML5 出現以前，瀏覽器只能用 cookie 將資料以鍵值對方式儲存於本機中  
    當瀏覽器提出請求時，它會將 cookie 同時傳送至後端，伺服器會根據此 cookie 來處理請求，然後將 cookie 連同回應傳回瀏覽器  
    因此使用 cookie 會增加網路流量，且其在本機中的容量僅 4KB 而已. 
  - 支援 HTML5 的瀏覽器除了原本的 cookie 外，還支援了下列四種本地資料儲存方式 :
    1. localStoage : 永久資料儲存區
    2. sessionStorage : 連線資料儲存區
    3. indexedDB database : 永久資料庫
    4. web SQL database : 永久資料庫 (可使用 SQL 存取)  
      Web SQL 資料庫正式名稱為 openDatabase，其特點是可用 SQL 語法來存取資料庫，但因為 SQL 方言眾多與其 API 開發較複雜，其規範已在 2010 年被 W3C 廢止，W3C 建議使用 indexedDB 資料庫，不過 Google 的桌電版 Chrome 仍持續完整支援 web SQL. 
  - cookies
    - 儲存在瀏覽器上的小型文字資料，單一容量限制約 4KB。
    - 可設定失效時間，預設是關閉瀏覽器就失效。
    - cookie 會被附加在每一次的 request 之中，可能會影響效能
    - server 可以在 HTTP response 中回傳 `Set-Cookie` header 來告訴瀏覽器要設定 cookie
    - 如何用 JavaScript 讀取 Cookie？
      1. 自己寫一個函式 parse
      2. 利用第三方套件
    - cookie 其實是 HTTP cookie，它是客戶端暫存會話（session）的一種機制  
      比如我們打開一個網頁的時候，瀏覽器就與服務端建立了一次會話。在這次會話當中，瀏覽器會向服務端請求數據，有些數據對於用戶來說是私有的，比如購物車訊息；有些是與用戶本身無關的，比如購物網站的商品列表。  
      對於私有的數據，用戶必須進行登錄才能夠獲取，當用戶輸入帳號和密碼後，服務端驗證成功後會給客戶端發一個 token（可看做是一個臨時密碼），當用戶想獲取私有數據的時候只需要帶上這個 token 就行，不需要每次都需要輸入密碼。
      那麼問題來了，在請求服務端數據的時候，難道在每個請求參數裡都要帶上 token 嗎？如果用戶關閉網頁後 token 就被清除了，那如何才能夠保證 token 的不丟失呢？  
      答案是通過 cookie 機制。瀏覽器提供了 cookie 的暫存機制，能夠永久保存一些數據；即使用戶關閉瀏覽器，再打開瀏覽器時 cookie 仍然被保留著。
  - local storage, session storage 比較
    - 相同
      - 當數據發生變化時都能夠監聽到，但這種事件監聽在同一頁面無法監聽
      - 皆為 html 5 的 web storage
    - local storage
      - 只要在相同的協議、相同的主機名、相同的端口下，就能讀取/修改到同一份 local storage 數據。
      - 重新整理不會被清掉
    - session storage
      - session storage 比 local storage 更嚴苛一點，除了協議、主機名、端口外，還要求在同一窗口（也就是瀏覽器的標籤頁）下。
      - session storage 只要瀏覽器視窗或分頁（tab）關閉就會消失。
  - 參考文章
    - [解釋 Cookie 的特性](https://blog.miniasp.com/post/2008/02/22/Explain-HTTP-Cookie-in-Detail)
    - [Huli - 白話 Session 與 Cookie：從經營雜貨店開始](https://hulitw.medium.com/session-and-cookie-15e47ed838bc)
    - [Day 17：專案03 - PTT 八卦版爬蟲02 | session、post](https://ithelp.ithome.com.tw/articles/10269592)
    - [被亂用的Cookie](https://mp.weixin.qq.com/s/iDOoeBA48gnoJUhkCHosqA)
    - [HTML5 測試 : 瀏覽器的本地資料儲存區 Web Storage (一)](http://yhhuang1966.blogspot.com/2022/01/html5-web-storage.html)
    - [前端小課 - cookie](https://lefex.gitee.io/books/broswer-env-book/cookie.html)
    - [前端小課 - LocalStorage](https://lefex.gitee.io/books/broswer-env-book/local_storage.html)
    - [HTML5 Web 存儲](https://www.runoob.com/html/html5-webstorage.html)
    - [【瀏覽器資料存取】cookies、localStorage、sessionStorage](https://lilyliu.coderbridge.io/2021/08/17/%E3%80%90%E7%80%8F%E8%A6%BD%E5%99%A8%E8%B3%87%E6%96%99%E5%AD%98%E5%8F%96%E3%80%91cookies%E3%80%81localstorage%E3%80%81sessionstorage/?utm_source=coderbridge-io&utm_medium=blog_related_post_title&utm_campaign=wonderland_%E3%80%90%E7%80%8F%E8%A6%BD%E5%99%A8%E8%B3%87%E6%96%99%E5%AD%98%E5%8F%96%E3%80%91cookies%E3%80%81localStorage%E3%80%81sessionStorage_@lienlien910130)
    - [[教學] Cookie 是什麼？如何用 JavaScript get/set document.cookie?](https://shubo.io/cookies/)
    - [Stateful vs Stateless 兩者差異比較](https://ryanchen34057.github.io/2019/09/28/statefulAndStateless/)
    - [解釋 Cookie 的特性](https://blog.miniasp.com/post/2008/02/22/Explain-HTTP-Cookie-in-Detail)

- 在 JavaScript 當中，`==`、`===` 與 `Object.is()` 的區別？
  - `==` Loose Equality
    - 會先做 implicit coercion(隱式型別轉換)，然後再比較
    - 物件與物件進行寬鬆相等，仍然是使用嚴格相等比較，也就是比較記憶體位置
  - `===` Strict Equality
    - 純值的話，先比較型別，再比較值  
      如果是比較物件(Object, Array 等等)的話，則是比較記憶體位置指向是否相等
      - 例外：
        ```javascript
        +0 === -0; // true
        NaN === NaN; // false
        ```
  - `Object.is()`
    ```javascript
    +0 === -0; // false
    NaN === NaN; // true 
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

- 在 JavaScript 中，0.1 + 0.2 !== 0.3 的原因和解決方法
  - 原因
    - IEEE 754
  - 解決方法
    - 使用套件 [decimal.js](https://www.npmjs.com/package/decimal.js)
    - 使用套件 [bignumber.js](https://www.npmjs.com/package/big-number)
  - 參考文章
    - [從 IEEE 754 標準來看為什麼浮點誤差是無法避免的](https://medium.com/starbugs/see-why-floating-point-error-can-not-be-avoided-from-ieee-754-809720b32175)
    - [javascript 雙精度浮點數剖析](https://zhuanlan.zhihu.com/p/351127362)

- 甚麼是閉包(closure)？
  - 參考文章
    - [[JS] 深入淺出 JavaScript 閉包（closure）](https://pjchender.dev/javascript/js-closure/)
    - [為什麼我們需要閉包(Closure)？它是冷知識還是真有用途？](https://nissentech.org/why-do-we-need-closure/)

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
