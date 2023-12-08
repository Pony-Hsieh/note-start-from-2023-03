# decimal.js
- An arbitrary(隨意的)-precision Decimal type for JavaScript.
- 廣泛的平台相容性：僅使用 JavaScript 1.5（ECMAScript 3）功能
- 如果使用超過 JavaScript 允許的數字的值，建議傳遞 string 而不是 number，以避免潛在的精度損失。
- Javascript 的數字型態一律為遵守 IEEE 754 規範的 number，採用雙精度儲存（double precision），佔用 64 bit。  
  若整體數字（整數 + 小數）的長度超過 16 ~ 17 位，就會發生數字丟失的問題。  
  若只是單純要在畫面上呈現大數字/浮點數，可以用 string 即可；  
  但若需要針對大數字/浮點數進行運算（加減乘除），則需要額外處理。

# 參考文章
- [【筆記】Javascript 大數字與浮點數的計算處理 (decimal.js)](https://blog.jsy.tw/1878/javascript-decimal-js/)
- [JavaScript的数学计算库：decimal.js](https://www.cnblogs.com/guojikun/p/17491294.html)