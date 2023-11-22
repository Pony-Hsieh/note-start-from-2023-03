- Prototype Chain 圖示
  ![](https://assets-lighthouse.alphacamp.co/uploads/image/file/5225/ExportedContentImage_00.png)
  - 透過原型鏈，字串 name 可以取用 String.prototype 裡定義好的方法，因此你可以使用 .split(), .slice(), .toLowerCase() 等字串方法
- 有些人會直接在 Array.prototype 上面加一些函式，讓自己可以更方便地做一些操作；但一般來說，不推薦直接去修改原生的 Object。
- nick 的 `__proto__` 會指向 Person.prototype，所以在發現 nick 沒有 log 這個 method 的時候，JavaScript 就會試著透過 `__proto__` 找到 Person.prototype，去看 Person.prototype 裡面有沒有 log 這個 method，直到某個東西的`__proto__` 是 null 為止，意思是這邊是最頂層了。  
  而上面這一條透過 `__proto__` 不斷串起來的鍊，就叫做原型鍊。透過這一條原型鍊，就可以達成類似繼承的功能，可以呼叫自己 parent 的 method。
- JavaScript 裡的原型繼承，核心目的是「取得另一個物件的屬性與方法」，如此一來，你才能應用物件導向程式設計，把不同物件間共用的屬性與方法封裝到上層的範本裡。
- 如果你調用一個不存在的方法如 name.abc()，它會一直向上找到 null 為止，才會確定 name 沒有這個方法而回傳以下錯誤：
  ![](https://assets-lighthouse.alphacamp.co/uploads/image/file/5227/ExportedContentImage_02.png)
- 查看某物件的原型： `Object.getPrototypeOf(物件名稱)`
  - 原型鏈可能不只一層，你可以進一步尋找 「name 的原型的原型」
  - 傳統上，另一種取得原型的方式是直接使用 `__proto__` 屬性，因此透過 `name.__proto__` 一樣可以取得 name 這個字串的原型，得到的結果會是一樣的
  - 雖然 `.__proto__` 看起來比較方便，我們在示範中也會使用，但這個方法已宣告未來可能會被棄用，因此在正式撰寫程式碼時，請使用 `Object.getPrototypeOf()` 來取得原型。
- `instanceof` 運算符用來檢測 `constructor.prototype` 是否存在於參數 object 的原型鏈上。


# 相關問題
## js 中 new operator 的作用及原理
### 參考文章
- [new operator - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [new operator — JavaScript | 為了瞭解原理，那就來實作一個 new 吧！](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899)

# 參考文章
- [原型繼承與原型鏈](https://javascript.alphacamp.co/prototype-prototype-chain.html)
- [該來理解 JavaScript 的原型鍊了](https://blog.huli.tw/2017/08/27/the-javascripts-prototype-chain/)
- [什麼是原型（Prototype）？｜JavaScript 初學者筆記(3)](https://realnewbie.com/front-end/object/what-is-prototype/)
- [instanceof - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)