
// Map
new Map();

/**
 * Map Property
 */
// size
{
  // getMapSize();
  function getMapSize() {
    const map1 = new Map();
    map1.set("a", "alpha");
    map1.set("b", "beta");
    map1.set("g", "gamma");
    console.log(map1.size); // 3
  }
}

/**
 * Map Method
 */
// Map.prototype.set()
{
  // mapSet();
  function mapSet() {
    const map1 = new Map();
    map1.set("bar", "foo");
    console.log(map1.get('bar')); // "foo"
    console.log(map1.get('baz')); // undefined
  }
}

// Map.prototype.has()
{
  // mapHas();
  function mapHas() {
    const map1 = new Map();
    map1.set("bar", "foo");
    console.log(map1.has("bar")); // true
    console.log(map1.has("baz")); // false
  }
}

// Map.prototype.delete()
{
  // mapDelete();
  function mapDelete() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);

    console.log(map1.delete("c")); // false
    console.log(map1.delete("b")); // true
    // Expected result: true
    // True indicates successful removal

    console.log(map1.has("bar")); // false
    console.log(map1.has("a")); // true
  }
}

// Map.prototype.clear()
{
  // mapClear();
  function mapClear() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    console.log(map1);
    console.log(map1.size); // 2
    map1.clear();
    console.log(map1);
    console.log(map1.size); // 0
  }
}

// Map.prototype.get()
{
  // mapGet();
  function mapGet() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    console.log(map1.get("a")); // 1
    console.log(map1.get("c")); // undefined
  }
}

// Map.prototype.keys()
{
  // mapKeys();
  function mapKeys() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    // console.log(map1.keys()); // MapIterator {'a', 'b'}

    const mapIter = map1.keys();
    console.log(mapIter.next()); // a
    console.log(mapIter.next().value); // a
    console.log(mapIter.next().value); // b
    console.log(mapIter.next().value); // undefined
    console.log(map1);
  }
}

// Map.prototype.values()
{
  // mapValues();
  function mapValues() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    console.log(map1.values()); // MapIterator {1, 2}

    const mapIter = map1.values();
    console.log(mapIter.next().value); // 1
    console.log(mapIter.next().value); // 2
    console.log(mapIter.next().value); // undefined
    console.log(map1);
  }
}

// Map.prototype.entries()
{
  // mapEntries();
  function mapEntries() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    const mapIter = map1.entries();
    console.log(mapIter.next().value); // ['a', 1]
    console.log(mapIter.next().value); // ['b', 2]
    console.log(mapIter.next().value); // undefined
  }
}

// Map.prototype.forEach()
{
  mapForEach();
  function mapForEach() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    map1.set("c", 3);

    map1.forEach((value, key, map) => {
      console.log(value, key, map);
    });
  }
}

/*******************************************************************/
// Set

/**
 * @param 一個可被迭代物件
 * 若一個可迭代物件被傳入，其所有的元素將會被加入至新的 Set。若你沒有指定此參數，或參數值為 null，則新的 Set 會是空的。
 * 那如果傳入不可被迭代的物件呢？
 * @return 一個新的 Set 物件
 */
new Set();

const set1 = new Set([1, 2, 3, 4, 5]);
// console.log(set1);
// console.log(set1.length);

// console.log(set1.has(1)); // true
// console.log(set1.has(5)); // true
// console.log(set1.has(6)); // false

// The value of the length property is 0.

// const set2 = new Set("test string");
// console.log(set2);

/**
 * Set Property
 */
// size
{
  // sizeFunc();
  function sizeFunc() {
    const set1 = new Set();
    set1.add(42);
    set1.add("forty two");
    set1.add("forty two");
    set1.add({});
    console.log(set1.size); // 3
  }
}

/**
 * Set Method
 */
// .add()
{
  add();
  function add() {
    const set1 = new Set();
    set1.add(1); // Set(1) {1}
    set1.add(2); // Set(2) {1, 2}
    set1
      .add(3)
      .add(4)
      .add(5); // Set(5) {1, 2, 3, 4, 5}
  }
}

// .delete()
{
  // deleteFunc();
  function deleteFunc() {
    console.log("deleteFunc");
    const set1 = new Set();
    set1.add(1); // Set(1) {1}
    set1.add(2); // Set(2) {1, 2}
    set1.delete(1); // Set(1) {2}
  }
}

// .clear()
{
  // clear();
  function clear() {
    const set1 = new Set([1, 2, 3, 4, 5]); // Set(5) {1, 2, 3, 4, 5}
    set1.clear(); // Set(0) {size: 0}
  }
}

// .has()
{
  // hasFunc();
  function hasFunc() {
    console.log("hasFunc");
    const obj = { a: 1, b: 2 };
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(obj);
    set1.add({ c: 3, d: 4 });
    console.log(set1);
    console.log(set1.has(1)); // true
    console.log(set1.has(obj)); // true
    console.log(set1.has({ c: 3, d: 4 })); // false
  }
}

// .keys()
{
  // keysFunc();
  function keysFunc() {
    const mySet = new Set();
    mySet.add("foo");
    mySet.add("bar");
    mySet.add("baz");

    const setIter = mySet.keys();
    console.warn(setIter);
    console.log(setIter.next().value); // "foo"
    console.log(setIter.next().value); // "bar"
    console.log(setIter.next().value); // "baz"
  }
}

// .values()
{
  // valuesFunc();
  function valuesFunc() {
    const iterator1 = set1.values();
    console.log(iterator1); // SetIterator {1, 2, 3}
    console.log(iterator1.next().value); // 1
    console.log(iterator1.next().value); // 2
    console.log(iterator1.next().value); // 3
    console.log(iterator1.next().value); // undefined
    console.log(iterator1.next().value); // undefined
    console.log(iterator1); // SetIterator {}
  }
}

// .entries()
{
  // entriesFunc();
  function entriesFunc() {
    console.log("entriesFunc");
    const set1 = new Set();
    set1.add(1);
    set1.add(2);
    set1.add(3);
    const iterator1 = set1.entries();
    console.log(iterator1);
    for (const entry of iterator1) {
      console.log(entry);
    }
    // [1, 1]
    // [2, 2]
    // [3, 3]
  }
}

// .forEach()
{
  // forEachFunc();
  function forEachFunc() {

  }
}

// 測試 string 轉 set
{
  // testString();
  function testString() {
    const text = "text";
    const mySet = new Set(text); // Set(3) {'t', 'e', 'x'}
    mySet.size;  // 3
  }
}

// 過濾陣列中重複的元素
{
  const arr = [1, 1, 3, 5, 5, 7, 4];

  filterRepeatElement(arr);
  function filterRepeatElement(arrParam) {
    // 轉成 set
    const arrToSet = new Set(arrParam); // Set {1, 3, 5, 7, 4}
    // 轉成 array
    const uniqueArray = [...arrToSet]; // [1, 3, 5, 7, 4]
  }
}

{
  const mySet = new Set();

  // console.log(Object.is(+0, 0));
  // console.log(Object.is(+0, -0));
  // console.log("test");
  // console.log(Object.is(0, -0));

  // mySet.add(NaN); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(NaN); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(+0); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(+0); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(-0); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(-0); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(0); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);
  // mySet.add(1); // Set { 1 }
  // console.log(mySet);
  // mySet.add(5); // Set { 1, 5 }
  // console.log(mySet);
  // mySet.add("some text"); // Set { 1, 5, 'some text' }
  // console.log(mySet);
  // const obj = { a: 1, b: 2 };
  // console.log(mySet);
  // mySet.add(obj); // Set { 1, 5, "some text", { a: 1, b: 2 } }
  // console.log(mySet);

  // // obj is referencing a different object so this is okay
  // mySet.add({ a: 1, b: 2 }); // Set { 1, 5, "some text", { a: 1, b: 2 }, { a: 1, b: 2 } }

  // 是用 Object.is() 去判斷的嗎
}

/*******************************************************************/

// WeakSet
{
  const wSet = new WeakSet();
  const a = [1, 2, 3];
  const b = { name: 'explainthis' };

  wSet.add(a); // WeakSet {Array(3)}
  wSet.add(b); // WeakSet {{...}}
  wSet.add(1); // Uncaught TypeError: Invalid value used in weak set
}

/*******************************************************************/


