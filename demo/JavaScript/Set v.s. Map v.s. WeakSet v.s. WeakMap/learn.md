
# Set
- 類似於 array，但是只能儲存唯一值
- Set 物件可讓你儲存任何類型的唯一值(unique)，不論是基本型別(primitive)值或物件參考(references)
- Set 會記錄值(或物件參考)插入的順序
- ES6 中如果想要陣列的元素不會重複，可以使用 Set；  
  如果想要物件的 key 不會重複，則可以使用 Map
- Set 裡面的 key 不會重複(unique)
  - 可利用此特性過濾陣列中重複的元素
- Set 資料結構中沒有 key，只有 value，或說在 Set 中 key 等於 value
  - ```javascript
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const iterator1 = set1.values();
    const iterator2 = set1.keys();
    // iterator1 與 iterator2 相同 (但並不嚴格相等，因為記憶體位置指向不同)
    ```
- 比較 Set 中的值是否相等，是透過 `Same-value-zero equality`
  - [Same-value-zero equality - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)
- entries() 方法回傳一個 Iterator 物件，其包含著一個由插入順序排序，Set 物件中每個元素的 [value, value] 陣列。  
  儘管對 Set 物件來說沒有像 Map 一樣的 key 概念，為了確保這個 API 運作的與 Map 相似，每個 entry 都有同樣的值同時作為其 key 和 value ，因此回傳的是一個 [value, value] 的陣列。
- 使用 for of 與 forEach 迭代 Set 的差異
  - 如果所有元素都要做處理 => forEach
  - 會需要提前終止迴圈 => for of 搭配 break

### Instance Constructor
- The `Set()` constructor creates Set objects.
- ```javascript
  new Set(iterable)
  ```
  - Parameters
    - iterable (Optional)
    - If an iterable object is passed, all of its elements will be added to the new Set.  
      If you don't specify this parameter, or its value is null, the new Set is empty.
  - Return value
    - A new Set object.

### Instance Properties
- `Set.prototype.size`
  - The size accessor property of Set instances returns the number of (unique) elements in this set.

### Instance Methods
- `Set.prototype.add()`
  - If there isn't an element with the same value already in the Set, inserts a new element with a specified value in to a Set object.
  - add() 方法會回傳 Set 本身，所以可以用 chaining 的寫法
- `Set.prototypevalues()`
  - Returns a **new iterator object** that yields the values for each element in the Set object in insertion order.
    - iterator object 內，有一個 `next()` 方法，使用完這個方法後， SetIterator 內的值也會被移除，可參考 index.js 內的使用範例
  - Set.prototype.values === Set.prototype.keys
- `Set.prototypeentries()`
  - Returns a **new iterator object** that contains an array of [value, value] for each element in the Set object, in insertion order.  
    This is similar to the Map object, so that each entry's key is the same as its value for a Set.
    - entries() 方法回傳一個 Iterator 物件，其包含著一個**由插入順序排序**，Set 物件中每個元素的 [value, value] 陣列。  
      儘管對 Set 物件來說沒有像 Map 一樣的 key 概念，為了確保這個 API 運作的與 Map 相似，每個 entry 都有同樣的值同時作為其 key 和 value ，因此回傳的是一個 [value, value] 的陣列。
      - 或者是可以很粗糙的理解為，Set 的中的 key 與 value 是相同的

### 參考文章
- [Set - 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Set - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [[JS] JavaScript 集合（Set）](https://pjchender.dev/javascript/js-set/)
- [JavaScript ES6 Set and WeakSet Object 物件](https://www.fooish.com/javascript/ES6/Set-and-WeakSet.html)


## Map
- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

### Key equality
- SameValueZero algorithm
- NaN
  - NaN === NaN
- 其他
  - 依據嚴格相等

### Instance Constructor
- The `Map()` constructor creates Map objects.
- ```javascript
  new Map(iterable)
  ```
- 參數
  - iterable (Optional 選填)
  - An Array or other iterable object whose elements are key-value pairs.  
    (For example, arrays with two elements, such as [[ 1, 'one' ],[ 2, 'two' ]].)  
    Each key-value pair is added to the new Map.

### Instance Properties
- `Map.prototype.size`

### Instance Methods
#### `Map.prototype.keys()`
- Return value
  - A new iterable iterator object.
    - iterator 是任何一個透過 next() 方法實現 Iterator protocol 的物件，該方法回傳具有以下兩個屬性 (property) 的物件：
    1. value  
      在 iteration 序列中的下一個值。
    2. done  
      如果序列中的最後一個值已經被消耗(使用)了，則此值為 true。  
      如果 value 和 done 一起存在，則他是這個 iterator 的回傳值。

### 參考文章
- [Map - 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)


## WeakSet
