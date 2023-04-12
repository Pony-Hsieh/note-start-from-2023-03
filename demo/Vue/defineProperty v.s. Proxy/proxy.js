const FooBar = {
  _secretDrink: 'Jäger Bom',
  closeTime: 'never',
  openYear: '1997',
};

/**
  Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.
  * @param target — A target object to wrap with Proxy.
  * @param handler — An object whose properties define the behavior of Proxy when an operation is attempted on it.
 */
FooBarProxy = new Proxy(FooBar, {
  /** 獲取物件屬性值
   * @param target - The original object which is being proxied. 被代理的物件
   * @param p - The name or Symbol of the property to get. 要取得的當前屬性
   * @param receiver - The proxy or an object that inherits from the proxy. 當前這個 Proxy
   */
  get: function (target, p, receiver) {
    // console.log("target", target);
    // console.log("p", p);
    // console.log("receiver", receiver);
    // 以底線開頭的作為私有變數(團隊自行定義)
    console.log("this", this); // 指向 FooBarProxy
    if (p.startsWith('_')) {
      console.error('不能存取私有變數！');
      return undefined;
    }
    // 非私有變數，那就回傳原物件的原屬性值
    return target[p];
  },
  /** 設置物件屬性值
   * @param target - The original object which is being proxied. 被代理的物件
   * @param p - The name or Symbol of the property to get. 要取得的當前屬性
   * @param receiver - The proxy or an object that inherits from the proxy. 當前這個 Proxy
   */
  set: function (target, p, receiver) {
    // console.log("target", target);
    // console.log("p", p);
    // console.log("receiver", receiver);
    if (p.startsWith('_')) {
      console.error('不能修改私有變數！');
      return undefined;
    }
    target[p] = value;
  },
  /** 物件是否包含特定屬性
   * @param target - The original object which is being proxied. 被代理的物件
   * @param p - The name or Symbol of the property to check for existence. 要測試是否存在物件內的屬性值
   */
  has: function (target, p) {
    // console.log("target", target);
    // console.log("p", p);
    if (p.startsWith('_')) {
      console.error('無法檢測私有變數是否存在！');
      return false;
    }
    return p in target;
  },
  /** 刪除物件屬性
   * A trap for the `delete` operator.
   * @param target — The original object which is being proxied.
   * @param p — The name or Symbol of the property to delete.
   * @return — A Boolean indicating whether or not the property was deleted.
   */
  deleteProperty: function (target, p) {
    if (p.startsWith('_')) {
      console.error('禁止修改私有變數');
      return;
    }
    if (p in target) {
      delete target[p];
      console.log(`property removed: ${p}`);
      // Expected output: "property removed: texture"
    }
  },
  // 暫時還不清楚用途
  /** A trap method for a function call.
   * @param target — The original callable object which is being proxied.
   */
  apply: function (target) {
  },
  /** A trap for the new operator.
   * @param target — The original object which is being proxied.
   * @param newTarget — The constructor that was originally called.
   */
  construct: function (target, newTarget) {
  },
  /** A trap for Object.defineProperty().
   * @param target — The original object which is being proxied.
   * @return — A Boolean indicating whether or not the property has been defined.
   */
  defineProperty: function (target) {
  },
  /** A trap for the `[[GetPrototypeOf]]` internal method.
   * @param target — The original object which is being proxied.
   */
  getPrototypeOf: function (target) {
  },
  /** A trap for `Object.isExtensible()`.
   * @param target — The original object which is being proxied.
   */
  isExtensible: function (target) {
  },
  /** A trap for Reflect.ownKeys().
   * @param target — The original object which is being proxied.
   */
  ownKeys: function (target) {
  },
  /** A trap for `Object.preventExtensions()`.
   * @param target — The original object which is being proxied.
   */
  preventExtensions: function (target) {
  },
  /** A trap for `Object.setPrototypeOf()`.
   * @param target — The original object which is being proxied.
   * @param newPrototype — The object's new prototype or null.
   */
  setPrototypeOf: function (target, newPrototype) {
  },
});

/* 測試各種 function 被觸發的時機 */

// 觸發 get
console.log(FooBarProxy.closeTime); // never
console.log(FooBarProxy._secretDrink); // undefined

// 觸發 set
FooBarProxy._secretDrink = 'Cola'; // 不能修改私有變數！

// 觸發 has
console.log('closeTime' in FooBarProxy); // true
console.log('_secretDrink' in FooBarProxy); // false
