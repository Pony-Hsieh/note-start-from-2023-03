## 單點知識點
- Symbol is a built-in object whose constructor returns a symbol primitive(原始型別) — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
  - symbol 是帶有可選描述的"原始唯一值"
- symbol 保證是唯一的。  
  即使我們創建了許多具有相同 description 的 symbol，它們也是不同的。description 只是一個標籤，不影響任何東西。
- 由於 Symbol 不是物件，所以也不能添加屬性，它是一種類似於 string 的數據類型。  
  但它具有原生的屬性。
- Symbol() 函式可以接受一個 string 作為參數，表示對 Symbol 實例的描述。  
  這主要是為了在控制台顯示，或者轉為 string 時，比較容易區分。
- 如果 Symbol 的參數是一個物件，就會調用該物件的 toString() 方法，將其轉為 string，然後才生成一個 Symbol 值。
- Symbol 值不能與其他類型的值進行運算，會報錯。
- Symbol 值可以顯式轉型的類別只有兩種
  1. string
  2. boolean
- ES2019 提供了一個 Symbol 值的實例屬性 `description`，回傳 Symbol 值的描述。

## 常見用途
- Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.
  - 作為物件屬性的唯一標識符，防止物件屬性衝突發生
    - ES5 的物件屬性名稱都是 string，這容易造成屬性名稱的衝突。  
      例如說，你使用了一個他人提供的物件，但又想為這個物件添加新的方法，新方法的名字就有可能與現有方法產生衝突。  
      如果有一種機制能夠保證每個屬性的名字都是獨一無二的就好了，這樣就從根本上防止屬性名稱的衝突。


## 參考文章
- [Symbol - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [javascript.info - Symbol](https://zh.javascript.info/symbol)
- [阮一峰 - ECMAScript 6 入門 - Symbol](https://es6.ruanyifeng.com/#docs/symbol)
- [簡單了解ES6/ES2015 Symbol() 方法](https://www.zhangxinxu.com/wordpress/2018/04/known-es6-symbol-function/)
- [作為協定的符號](https://openhome.cc/zh-tw/javascript/es-basics/symbol/)
- [ES6 Symbol 到底有什麼用？](https://harttle.land/2018/10/14/whats-symbols-for.html)
