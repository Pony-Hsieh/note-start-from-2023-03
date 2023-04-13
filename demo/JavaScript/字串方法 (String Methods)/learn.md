## includes
- The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
  - 大小寫敏感

### 參數
`includes(searchString, position = 0)`
1. searchString
   - A string to be searched for within str.
   - **Cannot be a regex.**
     - 不能為 regex
   - All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.
   - 所有傳入的內容都會被強制轉型為 string
2. position (Optional)
   - default value: 0
   - The position within the string at which to begin searching for searchString.

### 回傳值
- `boolean`
  - 從起始位置開始檢索的話，是否有包含指定的字串

### 參考文章
- [String.prototype.includes() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)


## search
- The search() method executes a search for a match between a regular expression and this String object.

### 參數
`search(regexp)`
1. regexp
   - A regular expression object, or any object that has a `Symbol.search` method.  
    If regexp is not a RegExp object and does not have a `Symbol.search` method, it is implicitly(隱式) converted to a RegExp by using new RegExp(regexp).
     - 如果傳入的參數不是 regexp，而且也沒有 Symbol.search 的方法，則會被透過 new RegExp(regexp) 的方法轉換為 regexp
   - `Symbol.search` 是甚麼？
     - TODO: 待查詢、理解
     - [Symbol.search - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)

### 回傳值
- `number`
  - The index of the first match between the regular expression and the given string, or -1 if no match was found.
  - 匹配成功
    - 回傳 regexp 在 string 中**首次匹配**的索引
  - 匹配失敗
    - 回傳 -1

### 參考文章
- [String.prototype.search() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)


## indexOf
- The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

### 參數
`indexOf(searchString, position = 0)`
1. searchString
   - Substring to search for.  
    All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined", which is rarely what you want.
     - 如果不帶參數調用此方法，searchString 將被強制轉換為 "undefined"。
2. position (Optional)
   - default value: 0
   - The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.
     - 此方法回傳指定子字元串在大於或等於 position 第一次出現的索引位置
       - position 大於調用此方法的字串的長度
         - 不搜索調用字元串
       - 如果 position 小於零
         - 行為如同 position 為 0

### 回傳值
- `number`
  - The index of the first occurrence of searchString found, or -1 if not found.
  - 匹配成功
    - 回傳 searchString 在 string 中**首次匹配**的索引
  - 匹配失敗
    - 回傳 -1

### 參考文章
- [String.prototype.indexOf() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
