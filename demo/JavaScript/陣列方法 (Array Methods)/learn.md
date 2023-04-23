# Constructor
The Array() constructor creates Array objects.

# Properties
## `length`
- Value
  - A non-negative integer less than 2³².
  - JS 中的最大安全數為 2⁵³ - 1

- Property attributes of Array: length
  - Writable: yes
  - Enumerable: no
  - Configurable: no

# Methods

## `Array.prototype.every()`
- 不改變調用此方法的陣列
- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
- The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.
  - 一旦發現有 callback function 回傳的值為 falsy value，則立刻停止迭代，並回傳 `false`
- callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.
  - 如果陣列某個位置是空的，則不會執行 callback function
- callbackFn will not visit any elements added beyond the array's initial length when the call to every() began.
  - 如果是透過 every() 加入至陣列的元素，不會被執行到 callback function
- If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited.
  - 如果透過 every() 方法修正陣列中元素的值，在執行 callbackFn 的時候，值仍然為創建時的值，而不是修改過後的值
- Deleted elements are not visited.
  - 被刪除的元素不會被執行到 callback function

### 參數
`every(callbackFn, thisArg)`
1. callbackFn
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
boolean
- true
  - if callbackFn returns a truthy value for every array element.
- false
  - otherwise

### 參考文章
- [Array.prototype.every() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


## `Array.prototype.some()`
- 不改變調用此方法的陣列
- The some() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a truthy value.  
  If such an element is found, some() immediately returns true and stops iterating through the array.  
  Otherwise, if callbackFn returns a falsy value for all elements, some() returns false.
  - 一旦任一元素執行 callback function 後的回傳值為 truthy value，則立刻停止迭代，並回傳 `true`
- For an empty array, it returns false for any condition.
- CallbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

### 參數
`some(callbackFn, thisArg)`
1. callbackFn
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
boolean
- true
  - if the callback function returns a truthy value for at least one element in the array.
- false
  - otherwise

### 參考文章
- [Array.prototype.some() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)


## `Array.prototype.slice()`
- 不改變調用此方法的陣列
- The slice() method returns a **shallow copy** of a portion of an array into a new array object **selected from start to end (end not included)** where start and end represent the index of items in that array. The original array will not be modified.
  - 淺層複製(shallow copy)
  - 含頭不含尾
- The slice() method preserves(保存) empty slots. If the sliced portion is sparse, the returned array is sparse as well.
  - 稀疏陣列的部分，也會被複製進去

### 參數
`slice(start, end)`
1. start (Optional)
   - Zero-based index at which to start extraction, converted to an integer.
     - Negative index counts back from the end of the array — if start < 0, start + array.length is used.
     - If start < -array.length or start is omitted, 0 is used.
     - If start >= array.length, nothing is extracted.
2. end (Optional)
   - Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.
     - Negative index counts back from the end of the array — if end < 0, end + array.length is used.
     - If end < -array.length, 0 is used.
     - If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
     - If end is positioned before or at start after normalization, nothing is extracted.

### 回傳值
- A new array containing the extracted elements.

### 參考文章
- [Array.prototype.slice() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


## `Array.prototype.splice()`
- 改變調用此方法的陣列
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

### 參數
`ssplice(start, deleteCount, item1, item2, itemN)`
1. start (Optional)
   - Zero-based index at which to start extraction, converted to an integer.
     - Negative index counts back from the end of the array — if start < 0, start + array.length is used.
     - If start < -array.length or start is omitted, 0 is used.
     - If start >= array.length, nothing is extracted.
2. end (Optional)
   - Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.
     - Negative index counts back from the end of the array — if end < 0, end + array.length is used.
     - If end < -array.length, 0 is used.
     - If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
     - If end is positioned before or at start after normalization, nothing is extracted.

### 回傳值
- An array containing the deleted elements.
  - If only one element is removed, an array of one element is returned.
  - If no elements are removed, an empty array is returned.

### 參考文章
- [Array.prototype.splice() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)


## `Array.prototype.at()`
- 不改變調用此方法的陣列
- The at() method takes an integer(整數) value and returns the item at that index. Negative integers count back from the last item in the array.
- The at() method is equivalent to the bracket notation when index is non-negative. For example, array[0] and array.at(0) both return the first item. However, when counting elements from the end of the array, you cannot use array[-1] like you may in Python or R, because all values inside the square brackets are treated literally as string properties, so you will end up reading array["-1"], which is just a normal string property instead of an array index.
- `array[array.length - 1]` can be shortened to `array.at(-1)`.
- 看起來應該是由後往前取值的時候，at() 方法會比較簡潔，如果是非負整數的話，直接用常見的中括號取值就行了

### 參數
`at(index)`
1. index
   - Zero-based index(從 0 起算的 index) of the array element to be returned, converted to an integer.  
    Negative index counts back from the end of the array — if index < 0, index + array.length is accessed.
    - converted to an integer 的轉換規則為何？

### 回傳值
- The element in the array matching the given index. Always returns undefined if index < (array.length) * -1 or index >= array.length without attempting to access the corresponding property.
  - 如果符合 XXXX 條件，則直接回傳 `undefined`
  - 因為參數可正可負(也可為零)
    - 參數合理最大值：array.length - 1
    - 參數合理最小值：index < (array.length) * -1
    - 超出上下限範圍，則直接回傳 `undefined`

### 參考文章
- [Array.prototype.at() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


## `Array.prototype.concat()`
- 不改變調用此方法的陣列
- merge two or more arrays
- does not change the existing array
- return a new array
- preserves empty slots if any of the source arrays is sparse(稀疏的).

### 參數
`concat(value0, value1, /* … ,*/ valueN)`
1. valueN (Optional)
   - **Arrays** and/or **values** to concatenate(把…連成一串) into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.
   - 可以是陣列，或者是任何 value

### 回傳值
- A new Array instance.

### 參考文章
- [Array.prototype.at() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


## `Array.prototype.copyWithin()`
- 會改變調用此方法的陣列
- It does not alter the length of this, but will change its content and create new properties if necessary.

### 參數
`copyWithin(target, start, end)`
1. target
2. start (Optional)
3. end (Optional)

### 回傳值

### 參考文章
- [Array.prototype.copyWithin() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [[Day 12 | Array.prototype.copyWithin () ]](https://ithelp.ithome.com.tw/articles/10235853)

## `Array.prototype.entries()`
- 不會改變調用此方法的陣列
- The entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.

### 參數
`entries()`
- 無

### 回傳值
- a **new array iterator object** that contains the key/value pairs for each index in the array.

### 參考文章
- [Array.prototype.entries() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)


## `Array.prototype.fill()`
- 會改變調用此方法的陣列
- changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length)
- fills empty slots in sparse arrays with value
- Using Array.prototype.fill() on an empty array (length = 0) would not modify it as the array has nothing to be modified.  
  To use Array.prototype.fill() when declaring an array, make sure the array has non-zero length.
- Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

### 參數
`fill(value, start, end)`
- start, end 含頭不含尾
1. value
   - value to fill the array with
   - if value is an object, each slot in the array will reference that object
2. start (Optional)
   - zero-based index at which to start filling, converted to an integer.
   1. < 0
      - negative index counts back from the end of the array
      - start + array.length is used
   2. start < (array.length) * -1  
      or start is omitted
      - 倒著數，小於最小值
      - 0 is used
   3. start >= array.length
      - 正著數，大於最大值
      - no index is filled
3. end (Optional)
   - zero-based index at which to end filling, converted to an integer. fill() fills up to but not including end.
   1. end < (array.length) * -1
      - negative index counts back from the end of the array
      - 0 is used
   2. end >= array.length  
      end is omitted
      - array.length is used, causing(造成、導致) all indices until the end to be filled.
   3. end is positioned before  
      or at start after normalization(這個條件還看不太懂)
      - no index is filled.

### 回傳值
- the modified array
  - 調用此方法的陣列也會被改變

### 參考文章
- [Array.prototype.fill() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)


## `Array.prototype.filter()`
- 不改變調用此方法的陣列
- The filter() method creates a **shallow copy** of a portion(一部分) of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- Call a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.
- CallbackFn is not invoked for empty slots in sparse arrays.

### 參數
`filter(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- A **shallow copy** of a portion(一部分) of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- If no elements pass the test, **an empty array** will be returned.

### 參考文章
- [Array.prototype.filter() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## `Array.prototype.find()`
- 不改變調用此方法的陣列
- Returns **the first element** in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  - 會找到第一個符合條件的元素並回傳，如果沒有找到，則回傳 undefined
- If you need the index of the found element in the array, use findIndex()
  - 如果需要該元素的 index，請選擇使用 findIndex() 方法
- If you need to find the index of a value, use indexOf()
  It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.
- If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
- If you need to find if any element satisfies the provided testing function, use some().
- The find() method calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value, then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, find() returns undefined.
  - 一旦 callbackFn return truthy value，則回傳該元素，並終止迴圈；  
    如果整個陣列都被尋訪過，但都沒有 return truthy value，則回傳 undefined
- callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.
  - 即便是 empty slots 也會被執行 callbackFn

### 參數
`find(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

### 參考文章
- [Array.prototype.find() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)


## `Array.prototype.findIndex()`
- 不改變調用此方法的陣列
- Returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
- It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value, then returns the index of that element and stops iterating through the array. If callbackFn never returns a truthy value, findIndex() returns -1.
- Empty slots in sparse arrays behave the same as undefined.

### 參數
`findIndex(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- The index of the first element in the array that passes the test. Otherwise, -1.

### 參考文章
- [Array.prototype.findIndex() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)


## `Array.prototype.findLast()`
- 不改變調用此方法的陣列
- Iterates the array **in reverse order** and returns the value of the first element that satisfies the provided testing function.  
  If no elements satisfy the testing function, undefined is returned.
- It calls a provided callbackFn function once for each element in an array in descending-index order, until callbackFn returns a truthy value, then returns that element and stops iterating through the array.
- Empty slots in sparse arrays behave the same as undefined.

### 參數
`findLast(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- The value of the element in the array with the highest index value that satisfies the provided testing function; undefined if no matching element is found.
  - 回傳陣列中滿足條件的最後一個值；如果所有元素皆不滿足，則回傳 `undefined`

### 參考文章
- [Array.prototype.findLast() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

## `Array.prototype.findLastIndex()`
- 不改變調用此方法的陣列
- Iterates the array **in reverse order** and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
- It calls a provided callbackFn function once for each element in an array in descending-index order, until callbackFn returns a truthy value, then returns the index of that element and stops iterating through the array.
- Empty slots in sparse arrays behave the same as undefined.

### 參數
`findLastIndex(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- The index of the last (highest-index) element in the array that passes the test. Otherwise -1 if no matching element is found.
  - 回傳陣列中滿足條件的最後一個值的 index；如果所有元素皆不滿足，則回傳 -1

### 參考文章
- [Array.prototype.findLastIndex() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)


## `Array.prototype.indexOf()`
- 不改變調用此方法的陣列
- Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- Compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator).  
  NaN values are never compared as equal, so **indexOf() always returns -1 when searchElement is NaN.**
- Skips empty slots in sparse arrays.
  - You cannot use indexOf() to search for empty slots in sparse arrays.

### 參數
`indexOf(searchElement, fromIndex)`
1. searchElement
   - Element to locate in the array.
2. fromIndex (Optional)
   - Zero-based index at which to start searching, converted to an integer.
   - Negative index counts back from the end of the array
     1. fromIndex < 0
        - 從陣列最後方開始計數
        - fromIndex + array.length is used.  
          Note, the array is still searched from front to back in this case.
     2. fromIndex < -array.length or fromIndex is omitted
        - 0 is used, causing the entire array to be searched.
     3. fromIndex >= array.length
        - the array is not searched and -1 is returned.

### 回傳值
- The first index of the element in the array; -1 if not found.

### 參考文章
- [Array.prototype.indexOf() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)


## `Array.prototype.lastIndexOf()`
- 不改變調用此方法的陣列
- Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
- Compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so **lastIndexOf() always returns -1 when searchElement is NaN**.
- Skips empty slots in sparse arrays.
  - You cannot use lastIndexOf() to search for empty slots in sparse arrays.

### 參數
`lastIndexOf(searchElement, fromIndex)`
1. searchElement
   - Element to locate in the array.
2. fromIndex
   - Zero-based index at which to start searching backwards, converted to an integer.
   - Negative index counts back from the end of the array
     1. if fromIndex < 0, fromIndex + array.length is used.  
        If fromIndex < -array.length, the array is not searched and -1 is returned.  
        You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so searchElement is never found.
     2. If fromIndex >= array.length or fromIndex is omitted, array.length - 1 is used, causing the entire array to be searched.  
        You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.

### 回傳值
- The last index of the element in the array; -1 if not found.

### 參考文章
- [Array.prototype.lastIndexOf() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)


## `Array.prototype.forEach()`
- 不改變調用此方法的陣列
- The forEach() method executes a provided function once for each array element.
- It is not invoked for empty slots in sparse arrays.
- Unlike map(), forEach() **always returns undefined** and **is not chainable**. The typical use case is to execute side effects at the end of a chain.
- It is not invoked for empty slots in sparse arrays.
- **There is no way to stop or break a forEach() loop other than by throwing an exception**. If you need such behavior, the forEach() method is the wrong tool.
  - 除了丟出例外狀況以外，forEach() loop 就是會跑完；如果你需要中斷 forEach()，那就是選錯工具了，其他更適合的工具如下：
  - Early termination may be accomplished with looping statements like `for`, `for...of`, and `for...in`. Array methods like `every()`, `some()`, `find()`, and `findIndex()` also stops iteration immediately when further iteration is not necessary.
- forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.
  - 使用 forEach 的時候，不要搭配 async, await 使用

### 參數
`filter(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)


### 回傳值
- `undefined`

### 參考文章
- [Array.prototype.forEach() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


## `Array.prototype.map()`
- 不改變調用此方法的陣列
- It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
- It is not invoked for empty slots in sparse arrays.
- Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
  - 如果你用不到新創建的 array，改用 `forEach` 或 `for...of` 會更好

### 參數
`map(callbackFn, thisArg)`
1. callbackFn  
  A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:
   1. element
   2. index
   3. array
2. thisArg (Optional)

### 回傳值
- **A new array** with each element being the result of the callback function.

### 參考文章
- [Array.prototype.map() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



## 待筆記方法
Array.prototype.forEach()
Array.prototype.map()

Array.prototype.reverse()
Array.prototype.toReversed()

Array.prototype.sort()
Array.prototype.toSorted()

Array.prototype.with()
Array.prototype.splice()
Array.prototype.toSpliced()



Array.prototype.keys()
Array.prototype.values()
Array.prototype.entries()


Array.prototype.pop()
Array.prototype.push()
Array.prototype.shift()
Array.prototype.unshift()


Array.prototype.reduce()
Array.prototype.reduceRight()


Array.prototype.toLocaleString()
Array.prototype.toString()


Array.prototype.flat()
Array.prototype.flatMap()
Array.from()
Array.isArray()
Array.prototype.join()
Array.prototype.map()
Array.of()


Array.prototype.includes()


