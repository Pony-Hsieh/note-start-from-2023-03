- `super` 這個關鍵字，既可以當作函式使用，也可以當作物件使用。在這兩種情況下，它的用法完全不同。
  - super 當作函式使用時必須放在建構子(constructor)裡
  - super 作為物件，可以透過 super 去取用父類別的方法(Method)
- super 關鍵字它的使用場景很簡單：  
  當存在類別繼承的時候，在子類別建構子中呼叫父類別建構器，或是在子類別的方法中呼叫被覆寫的父類別同名方法
- 在 constructor 中必須呼叫 super 方法，因為子類別沒有自己的 this，而是繼承父類別的 this，然後對其進行加工，而 super 就代表了父類別的建構子。  
  super 雖然代表了父類別 A 的建構函式，但傳回的是子類別 B 的實例，即 super 內部的 this 指的是 B，因此 super() 在這裡相當於 `A.prototype.constructor.call(this, props)`。
- 

# 參考文章
- [[JS]類別(class) - constructor、extends、super、static、Getter & Setter](https://hackmd.io/@chrisHsiao/BJ_IqRB6I#super)
- [理解 es6 class 中 constructor 方法 和 super 的作用](https://juejin.cn/post/6844903638674980872)
- [JS 中 new.target 的用法](https://blog.csdn.net/Hoshizola/article/details/119462690)