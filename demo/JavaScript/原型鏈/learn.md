- 有些人會直接在 Array.prototype 上面加一些函式，讓自己可以更方便地做一些操作，原理也是這樣。可是一般來說，不推薦直接去修改不屬於你的 Object。
- nick 的 `__proto__` 會指向 Person.prototype，所以在發現 nick 沒有 log 這個 method 的時候，JavaScript 就會試著透過 `__proto__` 找到 Person.prototype，去看 Person.prototype 裡面有沒有 log 這個 method，直到某個東西的`__proto__` 是 null 為止，意思是這邊是最頂層了。  
  而上面這一條透過 `__proto__` 不斷串起來的鍊，就叫做原型鍊。透過這一條原型鍊，就可以達成類似繼承的功能，可以呼叫自己 parent 的 method。

# 相關問題
## js 中 new operator 的作用及原理
### 參考文章
- [new operator - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [new operator — JavaScript | 為了瞭解原理，那就來實作一個 new 吧！](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899)