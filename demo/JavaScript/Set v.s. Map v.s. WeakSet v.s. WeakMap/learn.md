
## Set
- ES6 中如果想要陣列的元素不會重複，可以使用 Set；  
  如果想要物件的 key 不會重複，則可以使用 Map
- Set 裡面的 key 不會重複(unique)
  - 可利用此特性過濾陣列中重複的元素
- 比較 Set 中的值是否相等，是透過 `Same-value-zero equality`
  - [Same-value-zero equality - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)

### Methods
- `clear()`
  - Removes all elements from the Set object.
- `add()`
  - If there isn't an element with the same value already in the Set, inserts a new element with a specified value in to a Set object.
  - add() 方法會回傳 Set 本身，所以可以用 chaining 的寫法
- `delete()`
  - Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.
- `has()`
  - Returns a boolean asserting whether an element is present with the given value in the Set object or not.
- `values()`
  - Returns a **new iterator object** that yields the values for each element in the Set object in insertion order.
    - iterator object 內，有一個 `next()` 方法，使用完這個方法後， SetIterator 內的值也會被移除，可參考 index.js 內的使用範例
- `entries()`
  - Returns a **new iterator object** that contains an array of [value, value] for each element in the Set object, in insertion order.  
    This is similar to the Map object, so that each entry's key is the same as its value for a Set.
- `forEach()`
  - Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.
- `size()`
  - Returns the number of values in the Set object.

### 參考文章
  - [Set - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set)
  - [[JS] JavaScript 集合（Set）](https://pjchender.dev/javascript/js-set/)
