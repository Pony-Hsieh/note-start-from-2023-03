# ref v.s. reactive


## ref
- 適合定義基本數據類型（可接收基本數據類型和物件）
- 如果要使原始數據類型(primitive data type)具有響應式性，ref() 將是您的首選
- ref() 定義的響應式數據需要透過 `.value` 取得，而在模板中會進行拆箱，不需要手動透過 .value 來取得
- ref() 可以為基本類型和引用類型值創建響應式數據，而爲引用類型創建響應式數據時，內部還是調用了reactive()。


## reactive
- 適合定義複雜的數據類型（json/arr）
- 只能接收一個物件，我們可以把一些相關聯的數據都放在這個物件裏，提升代碼的可讀性。


## 總結
- ref() 可以為基本類型和引用類型值創建響應式數據，而在為引用類型創建響應式數據時，內部還是調用了 reactive()
  - 若傳入物件型別，內部會呼叫 reactive() 將其轉成響應式物件。



## 參考文章
- [竹白記事本 Vue 3 - Composition API](https://chupai.github.io/posts/2104/compositionapi/)
- [ref及reactive的區別及本質](https://juejin.cn/post/7013326406444646407)
- [【譯】Vue 3 Composition API: Ref vs Reactive](https://www.readfog.com/a/1633537209551392768)