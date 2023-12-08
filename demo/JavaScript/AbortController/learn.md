




我們怎麼才能取消一個正在執行的 fetch 呢？
例如，如果使用者在我們網站上的操作顯示不再需要某個執行中的 fetch

為此，有一個特殊的內建物件：AbortController；它不僅可以中止 fetch，還可以中止其他非同步任務。

實例化一個控制器（controller）：
```js
const controller = new AbortController();
```
它具有
單一方法 `abort()`
單一屬性 `signal`，我們可以在這個屬性上設定事件監聽器

當 abortController.abort() 被調用時
- controller.signal就會觸發abort事件。
- controller.signal.aborted 屬性變為 true

- fetch 配置中僅需把 signal 屬性指向 AbortController 實例中的signal 即可

`
- You can create a new AbortController object using the `AbortController()` constructor.
- Communicating with a DOM request is done using an AbortSignal object.

- We could use the same AbortController to cancel two requests simultaneously,
- If we want to cancel two requests independently, we’ll need two different AbortController instances.



fetch 的 options 選項允許我們傳遞一個 signal 物件；fetch 的內部會監控這個物件的狀態，如果這個物件的狀態從未終止的狀態變為終止的狀態的話，並且請求 fetch 還在進行中的話，fetch 請求就會立即失敗，其對應的 Promise 的狀態就會變成 Rejected。

如何改變 signal 的狀態呢？我們可以透過呼叫 AbortController 的 abort 方法去改變 signal 的狀態。一旦我們呼叫了 ac.abort () 那麼與之關聯的 signal 的狀態會立刻從起始狀態（非終止狀態）轉變為終止狀態。














## Constructor
- AbortController()  
  Creates a new AbortController object instance.

## Instance properties
- [Read only] `AbortController.signal`  
  Returns an AbortSignal object instance, which can be used to communicate with (or to abort) a DOM request.

## Instance methods
- `AbortController.abort()`  
  Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams.





## 參考文章
