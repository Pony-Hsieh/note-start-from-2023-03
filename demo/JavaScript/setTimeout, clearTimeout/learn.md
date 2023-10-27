# setTimeout
- setTimeout 原來可以帶上要傳入 callback 的參數
- setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
- 參數
  1. functionRef
     - A function to be executed after the timer expires.
  2. delay
     - 預設值： 0
     - If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.
     - if the value isn't a number, implicit type coercion is silently done on the value to convert it to a number 
  3. param1, param2, /* …, */ paramN
     - Additional arguments which are passed through to the function specified by functionRef. 

# clearTimeout
- Passing an invalid ID to `clearTimeout()` silently does nothing; no exception is thrown.
- Return value: `undefined`
- setTimeout() 和 setInterval() 使用共享的 ID 池，意味著在技術上可以混用 clearTimeout() 和 clearInterval()。但是，為了清楚起見，你應該避免這樣做。

# 參考文章
- [clearTimeout - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)