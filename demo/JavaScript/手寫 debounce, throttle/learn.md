# 手寫 debounce 的幾個重點
1. 如何在每次呼叫 callback function 後，重新計時？
   - 設置一個 timer，如果 debounce function 有再度被調用的話，就 clear timer 重新計時
2. 如何紀錄 timer？
3. 如何將 callback function 的參數傳入 debounce function 內執行？
4. 如何綁定 this？
- 範例程式碼
  ```js
  function debounce(fn, wait = 500) {
    let timer;
    // ...args: 其餘參數(型別為 array)
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        // ...args: 將其餘參數的陣列解構為一個一個的參數丟到 fn 中
        // fn.apply(context, args); // .apply() 傳入陣列(或類陣列)
        fn.call(context, ...args); // .call() 要一個一個傳
      }, wait);
    };
  }

  function debounceUseArrowFunction(fn, wait = 500) {
    let timer;
    // ...args: 其餘參數(型別為 array)
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args); // .apply() 傳入陣列(或類陣列)
        fn.call(context, ...args); // .call() 要一個一個傳
      }, wait);
    };
  }
  ```

# 其他
- 意外得知的豆知識：
  - `window.name`
  - 當時寫 demo 的時候用到 name 屬性，想說應該要是 undefined，為什麼沒有跑出錯誤？查了一下，發現原來原本就有 window.name 這個屬性
    - [Window: name property - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/API/Window/name)
    - [快速了解window.name特性与作用](https://www.zhangxinxu.com/wordpress/2019/09/window-name/)



# 參考文章
- [Throttle and Debounce. 使用場景與嘗試實現它們](https://ianccy.com/throttledebounce/)
- [[JavaScript] 函數原型最實用的 3 個方法 — call、apply、bind](https://realdennis.medium.com/javascript-%E8%81%8A%E8%81%8Acall-apply-bind%E7%9A%84%E5%B7%AE%E7%95%B0%E8%88%87%E7%9B%B8%E4%BC%BC%E4%B9%8B%E8%99%95-2f82a4b4dd66)
- [手写防抖debounce函数，细节拆解每一步，学会你也会手写一个完美的防抖函数【JavaScript】](https://blog.csdn.net/Umbrella_Um/article/details/100884955)
- [关于防抖节流里面的this指向问题](https://segmentfault.com/q/1010000039341326)
- [防抖 debounce 与 节流 throttle](https://github.com/Godiswill/blog/issues/12)