
# constructor
If the value is null or undefined, it creates and returns an empty object.

# Properties


# Methods
## `Object.assign()`
- copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
- Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources properties overwrite earlier ones.
- 僅能淺層複製
### 參數
`Object.assign(target, ...sources)`
1. target
   - The target object — what to apply the sources properties to, which is returned after it is modified.
2. sources
   - The source object(s) — objects containing the properties you want to apply.

### 回傳值
- The target object.


### 參考文章
- [Object.assign() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## `Object.create()`
## `Object.defineProperties()`

## `Object.defineProperty()`
- The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
### 參數
`Object.defineProperty(obj, prop, descriptor)`
1. obj
   - The object on which to define the property.

2. prop
   - A string or Symbol specifying the key of the property to be defined or modified.

3. descriptor
   - The descriptor for the property being defined or modified.
   - Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.  
     A descriptor must be one of these two flavors; it cannot be both.
     1. data descriptor
        - a property with a value that may or may not be writable.
     2. accessor descriptor
        - a property described by a getter-setter pair of functions.  
   1. configurable
      - 預設 false
   2. enumerable
      - 預設 false
   3. value
      - 預設 undefined
   4. writable
      - 預設 false

### 回傳值
- The object that was passed to the function, with the specified property added or modified.

### 參考文章
- [Object.defineProperty() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)






## `Object.keys()`
- 只會列出 enumerable string-keyed 的 key
  - 非 enumerable 的 key 不會被列舉出來
  - key 型別為 Symbol 的不會被列出來
- The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
- This is the same as iterating with a `for...in` loop
- The order of the array returned by Object.keys() is the same as that provided by a for...in loop.
- If you want all string-keyed own properties, including non-enumerable ones, see `Object.getOwnPropertyNames()`.
- Map guarantees the keys to be iterated in order of insertion, without exception:

### 參數
`Object.keys(obj)`
1. obj
   - 要被迭代列舉 key 的 object

### 回傳值
- An **array** of strings representing the given object's own enumerable string-keyed property keys.

### 參考文章
- [Object.keys() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [Object.keys() - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Does JavaScript guarantee object property order?](https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order)


## `Object.values()`
-  for-in 循環枚舉原型鏈中的屬性
- The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

### 參數
`Object.values(obj)`
1. obj
   - 要被迭代列舉 key 的 object

### 回傳值
- An **array** containing the given object's own enumerable string-keyed property values.

### 參考文章
- [Object.values() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.values() - MDN 簡體中文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)


## `Object.entries()`
### 參數
### 回傳值
### 參考文章

## `Object.fromEntries()`
### 參數
### 回傳值
### 參考文章


## `Object.seal()`
## `Object.freeze()`
## `Object.isFrozen()`
## `Object.isSealed()`

## `Object.getOwnPropertyDescriptor()`
## `Object.getOwnPropertyDescriptors()`
## `Object.getOwnPropertyNames()`
## `Object.getOwnPropertySymbols()`
## `Object.getPrototypeOf()`
## `Object.setPrototypeOf()`
## `Object.hasOwn()`
## `Object.is()`
## `Object.isExtensible()`
## `Object.preventExtensions()`
## `Object.propertyIsEnumerable()`
## `Object.hasOwnProperty()`
## `Object.isPrototypeOf()`
## `Object.toLocaleString()`
## `Object.toString()`
## `Object.valueOf()`