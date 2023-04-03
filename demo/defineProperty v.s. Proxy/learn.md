## 相關問題
- 為什麼 Vue 能透過 Proxy 實現雙向綁定？
  雙向綁定甚麼？
- defineProperty 與 Proxy 相比，各有甚麼優缺點？


## Proxy
- 是甚麼？
  - Proxy 為構造函數，用來生成 Proxy 實例
    ```javascript
    const proxy = new Proxy(target, handler);
    ```
    參數
    1. target 表示所要攔截的目標**物件**  
      (任何類型的物件，包括原生陣列、函式，甚至是另一個代理)
      (所以純值應該是不行)
    2. handler 通常是以函式作為屬性的物件，各屬性中的函式分別定義了在執行各種操作時的行為 
      所有操作行為列表可參考[這裡](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#handler_%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)
  - Proxy 的原意是**代理**。我們可以簡單理解成：   
    我們可以透過 Proxy 對物件進行**攔截**，外界對物件的任何操作都要透過 Proxy，而 Proxy 也可以對外界的操作進行過濾與改寫。
- 使用限制
  - 如果你的物件擁有 configurable: false 與 writable: false 的屬性，則 Proxy 不能修改該屬性(無法被 proxy 代理)，否則會報錯
- 用途
  - 在不同狀態下會觸發不同的方法
  - 透過 proxy 可以讓開發者在存取到 target 前先做一下操作，也就是攔截(intercept)的概念
- 使用場景  
  Proxy 其功能非常類似於設計模式中的 "代理模式"
  1. 攔截和監視外部對物件的訪問
  2. 降低函式或類的複雜度
  3. 在複雜操作前對操作進行校驗，或對所需資源進行管理
  4. 透過使用 Proxy 實現觀察者模式(Observer mode)，指的是函式自動觀察對應物件，一旦物件有變化，函式就會自動執行
- Proxy 會建造一個新的物件讓你操作，而不是使用原始物件(original object)，原始物件在使用 setters/getters 時會直接更改。
  Proxy 可以代理一整個物件，並且**回傳一個新的物件**(所以不會修改到原物件)。
- Vue 在 Vue3 做出了一個非常重大的調整，改用 ES6 Proxy 取代原本的Object.defineProperty。最常聽到的就是效能有非常大的提升。
  (為什麼這麼做能夠提升效能？)

- Proxy 延伸概念
Reflect

- 參考文章
  - [Proxy - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
  - [ES6 系列之 defineProperty 与 proxy](https://juejin.cn/post/6844903710410162183)
  - [JS代理](https://juejin.cn/post/7212918899867353145)
  - [ES6的代理模式 | Proxy](https://vue3js.cn/es6/)
  - [面試官：你是怎麼理解ES6中Proxy的？使用場景?](https://vue3js.cn/interview/es6/proxy.html)
  - [Day9 : Vue3 的雙向綁定原理 : Proxy](https://ithelp.ithome.com.tw/articles/10297689)
  - [淺談 Vue3 雙向綁定的概念與實作](https://israynotarray.com/vue/20210627/555169856/)
  - [JavaScript Proxy API](https://medium.com/@vx3012564897/javascript-proxy-api-69a37d531a48)
  - [Proxy and Reflect](https://javascript.info/proxy)
  - [Vue3 解構賦值失去響應式引發的思考](https://blog.csdn.net/qq_41581588/article/details/126069105)