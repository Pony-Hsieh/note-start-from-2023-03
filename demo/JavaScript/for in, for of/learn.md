

可以看到陣列裡沒有 name 這個 key，不過在 for...in 卻被列印出來了，這樣就很容易找不到問題在哪。所以 for...in 大多用來遍歷物件的 key。

繼承的屬性也會被遍歷，解決方法就是用 hasOwnProperty 去篩選掉繼承的屬性：


# for in
- 遍歷 array
- 遍歷 Set
- 遍歷 object
- 遍歷 Map


# for of
- 遍歷 array
- 遍歷 Set
- 遍歷 object
- 遍歷 Map
ES6 提供了更簡單的迭代循環語法 for...of，使用該語法的前提是操作物件需要實作可迭代協定（The iterable protocol），簡單說就是該物件有個 Key 為 的Symbol.iterator 方法，該方法傳回一個 iterator 物件。



# 參考文章
- [for…in和for…of的用法与区别](https://segmentfault.com/a/1190000022348279)
- [為什麼不建議直接使用 hasOwnProperty？](https://israynotarray.com/javascript/20230218/1132871629/)