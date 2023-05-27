# Constructor
- The String() constructor creates String objects. When called as a function, it returns primitive values of type String.
- When String is called as a constructor (with new), it creates a String object, which is not a primitive.



# Properties
## `length`
- The length data property of a String value contains the length of the string in UTF-16 code units.


# Methods

## `String.prototype.at()`
- Takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. 
- Allows for positive and negative integers.  
  Negative integers count back from the last string character.
### 參數
`at(index)`
1. index
   - The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.
### 回傳值
- A String consisting of the single UTF-16 code unit located at the specified position.  
  Returns `undefined` if the given index can not be found.
### 參考文章
- [String.prototype.at() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)


## `String.prototype.charAt()`
- Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
### 參數
`charAt(index)`
1. index
   - An integer between 0 and str.length - 1.
   - If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.
   - 不接受負數參數
### 回傳值
- A string representing the character (exactly one UTF-16 code unit) at the specified index.  
  If index is out of range, charAt() returns an empty string.
### 參考文章
- [String.prototype.charAt() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)


## `String.prototype.charCodeAt()`
- Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.  
  The UTF-16 code unit matches the Unicode code point for code points which can be represented in a single UTF-16 code unit. If the Unicode code point cannot be represented in a single UTF-16 code unit (because its value is greater than 0xFFFF) then the code unit returned will be the first part of a surrogate pair for the code point. If you want the entire code point value, use `codePointAt()`.
- Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding.
### 參數
`charCodeAt(index)`
1. index
   - An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.
- 不接受負數參數
### 回傳值
- A number representing the UTF-16 code unit value of the character at the given index. If index is out of range, charCodeAt() returns NaN.
### 參考文章
- [String.prototype.charCodeAt() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)


## `String.prototype.codePointAt()`
- Returns a non-negative integer that is the Unicode code point value at the given position. Note that this function does not give the nth code point in a string, but the code point starting at the specified string index.
### 參數
`codePointAt(pos)`
1. pos
   - Position of an element in str to return the code point value from.
### 回傳值
- A decimal number representing the code point value of the character at the given pos.
  1. If there is no element at pos, returns `undefined`.
  2. If the element at pos is a UTF-16 high surrogate, returns the code point of the surrogate pair.
  3. If the element at pos is a UTF-16 low surrogate, returns only the low surrogate code point.
### 參考文章
- [String.prototype.codePointAt() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)


## `String.prototype.concat()`
- Concatenates the string arguments to the calling string and returns a new string.
- If the arguments are not of the type string, they are converted to string values before concatenating.
  - 如果傳入的參數並非字串，會先轉型為字串再串接
- The concat() method is very similar to the addition/string concatenation operators (+, +=), except that concat() coerces its arguments directly to strings, while addition coerces its operands to primitives first. For more information, see the reference page for the [+ operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition).
### 參數
`concat(str1, str2, /* …, */ strN)`
1. strN
   - One or more strings to concatenate to str.
### 回傳值
- A new string containing the combined text of the strings provided.
### 參考文章
- [String.prototype.concat() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)


## `String.prototype.endsWith()`
- 
### 參數
`endsWith(searchString, endPosition)`
1. searchString

2. endPosition (Optional)
### 回傳值

### 參考文章
- [String.prototype.endsWith() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

## `String.prototype.includes()`
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



## `String.prototype.match()`


## `String.prototype.search()`
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


## `String.prototype.indexOf()`
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


# 比較
- charAt
- charCodeAt
- codePointAt


## 待整理方法
- String.prototype.at()
- String.prototype.charAt()
- String.prototype.charCodeAt()
- String.prototype.codePointAt()
- String.prototype.concat()
- String.prototype.endsWith()
- String.fromCharCode()
- String.fromCodePoint()
- String.prototype.includes()
- String.prototype.indexOf()
- String.prototype.isWellFormed()
- String.prototype.lastIndexOf()
- String.prototype.localeCompare()
- String.prototype.match()
- String.prototype.matchAll()
- String.prototype.normalize()
- String.prototype.padEnd()
- String.prototype.padStart()
- String.raw()
- String.prototype.repeat()
- String.prototype.replace()
- String.prototype.replaceAll()
- String.prototype.search()
- String.prototype.slice()
- String.prototype.split()
- String.prototype.startsWith()
- String.prototype.substring()
- String.prototype.toLocaleLowerCase()
- String.prototype.toLocaleUpperCase()
- String.prototype.toLowerCase()
- String.prototype.toString()
- String.prototype.toUpperCase()
- String.prototype.toWellFormed()
- String.prototype.trim()
- String.prototype.trimEnd()
- String.prototype.trimStart()
- String.prototype.valueOf()


