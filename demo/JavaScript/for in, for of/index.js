/**
 * 可迭代物件的話，該物件的 prototype 會有一個 iterator 可以呼叫
 - [Array iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
 - [Map iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
 - [Set iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)
 - [String iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
 - [TypedArray iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
 - [arguments iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
 */
{
  /* Array */

  const arr = ['a', 'b', 'c', 'd', 'e'];
  const arrIter1 = arr[Symbol.iterator]();
  const arrIter2 = arr.values();
  console.log(arrIter1);
  console.log(arrIter2);
  console.log(arrIter1 === arrIter2);

  console.log(arrIter1.next().value); // a
  console.log(arrIter1.next().value); // b
  console.log(arrIter1.next().value); // c
  console.log(arrIter1.next().value); // d
  console.log(arrIter1.next().value); // e

  /* Map */
  const map = new Map();
  map.set('a', 1);
  const mapIter1 = map[Symbol.iterator]();
  console.log(mapIter1);
  console.log(mapIter1.next().value);

  /* Set */
  /* String */
  /* arguments */
}

/** for in
  - 迭代物件的可列舉(enumerable)屬性
  - 迴圈將迭代全部可列舉屬性，包括它原型鏈上的可列舉屬性
  - 補充：
    - in operator:
      - 如果指定的屬性在指定的物件或其原型鏈中，則 in 運算符回傳 true
 */

/** array X for in */
{
  const arr = [1, 2, 3, 4, 5];
  Array.prototype.testProperty1 = 'a';
  Array.prototype.testProperty2 = 0;

  // 刻意製造這樣的狀況，實際開發上不要這樣亂搞XD
  Array.prototype.hasOwnProperty = function () {
    return true;
  };

  // 迭代所有屬性，包含原型鏈上的可列舉屬性
  /* for (const key in arr) {
    console.log(key);
    // "0", "1", "2", "3", "4", "testProperty1", "testProperty2", "hasOwnProperty"
  } */

  // 僅迭代自己的屬性，不包含原型鏈上的可列舉屬性
  for (const key in arr) {
    // 可能會出錯的寫法
    /* if (arr.hasOwnProperty(key)) {
      console.log(key);
      // "0", "1", "2", "3", "4", "testProperty1", "testProperty2", "hasOwnProperty"
    } */
    // 推薦的寫法
    /* if (Object.prototype.hasOwnProperty.call(arr, key)) {
      console.log(key);
      // "0", "1", "2", "3", "4"
    } */
  }
}
/** object X for in */
/** Set X for in */
{
}
/** Map X for in */

/**
  for...of 語句在可迭代物件（包括 Array, Map, Set, String, TypedArray, arguments 等等）上創建一個迭代循環，調用自定義迭代鉤子，並為每個不同屬性的值執行語句
*/
{
}

/** array X for of */
{
  const arr = [1, 2, 3, 4, 5];

  for (const key of arr) {
    // console.log(key);
    // 1, 2, 3, 4, 5
  }
}

/** object X for of (無效)
 - obj is not iterable
 */
{
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  // obj is not iterable
  /* for (const key of obj) {
    console.log(obj);
  } */
}

/** Set X for of */
{
  const set = new Set([1, 2, 3, 4, 5]);
  for (const value of set) {
    // console.log(value);
    // 1, 2, 3, 4, 5
  }
}

/** Map X for of */
{
  const map = new Map();
  map.set('a', 1);
  map.set('a', 1);
  map.set('b', 2);
  map.set('c', 3);

  for (const keyValuePair of map) {
    // console.log(keyValuePair);
    // ['a', 1]
    // ['b', 2]
    // ['c', 3]
  }

  for (const [key, value] of map) {
    // console.log(key, value);
    // 'a', 1
    // 'b', 2
    // 'c', 3
  }
}

/** for in 範例 - 1 */
// # for in
// - 遍歷 array
// - 遍歷 Set
// - 遍歷 object
// - 遍歷 Map
{
  const arr = [1, 2, 3];
  Array.prototype.name = 'jim'; // 自訂原型屬性

  const set = new Set();
  set.add('a').add('b').add('c').add('d');
  for (let s in set) {
    console.log('a');
    console.log(s);
  }
  for (let s of set) {
    // console.log(s);
  }
  // console.log(arr); // [1, 2, 3] 陣列不變

  // for (const key in arr) {
  //   console.log(key); // 1 2 3 name
  // }
}

/** for in 範例 - 2 */
{
  class People {
    firstName;
    lastName;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const person = new People('Jimmy', 'O.Yang');

  // for (const key in person) {
  //   console.log(`${key}: ${person[key]}`);
  // }

  // for (let key in person) {
  //   if (!person.hasOwnProperty(key)) {
  //     return;
  //   }
  //   console.log(key + ':' + person[key]);
  // }
}

/** for of 範例 - 1 */

{
  const arr = [1, 2, 3];

  // for (const el of arr) {
  //   console.log(el); // 1 2 3
  // }
  // for (const el in arr) {
  //   console.log(el); // 1 2 3
  // }
}
