# 知識點
- 為什麼會需要閉包？它的用處或應用情境是什麼？
- 所有函式在建立時都會產生閉包
- JavaScript 的作用域與 Closure(閉包) 的關係密不可分
- 只有巢狀結構的 function 才會形成閉包
- 一個函式可以操作另外一個函式作用範圍內的變數；
  如果內層函式引用到外層函式的區域變數，此時外層函式中的變數狀態就會被內層函式保留下來(形成封閉狀態，只有內層函式可存取，可達到保護變數內容的目的)
- 閉包可能會造成占用記憶體的問題(memory leak)

# 參考文章
- [closures - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures)
- [為什麼我們需要閉包 (Closure)？它是冷知識還是真有用途？](https://nissentech.org/why-do-we-need-closure/)
- [Closure 閉包](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/closure.html)
- [Tommy 老師帶你重新搞懂閉包 Closure](https://www.youtube.com/watch?v=ksmk5RO5DgU)