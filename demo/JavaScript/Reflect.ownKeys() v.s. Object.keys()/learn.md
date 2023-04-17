`Reflect.ownKeys()`
- `Reflect.ownKeys()` provides the reflective semantic of retrieving all property keys of an object.
- **It is the only way to get all own properties** in one call, without extra filtering logic.
  - enumerable and not enumerable
  - strings and symbols
- `Reflect.ownKeys()` is usually equivalent to `Object.getOwnPropertyNames().concat(Object.getOwnPropertySymbols())`.  
  However, if the object has a custom [[OwnPropertyKeys]] method (such as through a proxy's ownKeys handler), the order of the keys may be different.
- `Reflect.ownKeys()` invokes the [[OwnPropertyKeys]] object internal method of target.

`Object.getOwnPropertyNames()`
- `Reflect.ownKeys()` 中篩選出 key 型別為 string 的

`Object.getOwnPropertySymbols()`
- `Reflect.ownKeys()` 中篩選出 key 型別為 Symbol 的




## 參考文章
- [死磕JS：Reflect.ownKeys() 和 Object.keys() 怎麼選?](https://www.51cto.com/article/648087.html)
- [Reflect.ownKeys() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
- [Reflect.ownKeys() - MDN 簡體中文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
- [Object.keys() - MDN 繁體中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Reflect.ownKeys() - MDN 英文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
