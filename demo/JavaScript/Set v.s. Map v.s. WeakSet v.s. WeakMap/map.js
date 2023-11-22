/** Map() constructor
 * An Array or other iterable object whose elements are key-value pairs. (For example, arrays with two elements, such as [[ 1, 'one' ],[ 2, 'two' ]].) Each key-value pair is added to the new Map.
 */
{
  const map1 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  // console.log('map1', map1);
  // Map(3) {1 => 'one', 2 => 'two', 3 => 'three'}

  // Uncaught TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  /* const map2 = new Map({
    a: 1,
    a: 1,
    b: 2,
  }); */

  // Uncaught TypeError: Iterator value one is not an entry object
  // const map3 = new Map(['one', 'two', 'three']);
}

/** Map 屬性 - Set.prototype.size
 * The size property of Map instances returns the number of elements in this map.
 */
{
  const map = new Map();

  map.set('a', 'alpha');
  map.set('b', 'beta');
  map.set('g', 'gamma');

  // console.log(map.size); // 3
}

/** 新增、更新鍵值對 - Map.prototype.set()
  - 可鍊式調用
  - Return value:
    - The Map object
 */
{
  const map = new Map();

  // 新增
  map.set('a', 'alpha');
  map.set('b', 'beta').set('g', 'gamma');

  // console.log(map); // Map(3) {'a' => 'alpha', 'b' => 'beta', 'g' => 'gamma'}

  // 更新
  map.set('a', 'apple');
  // console.log(map); // Map(3) {'a' => 'apple', 'b' => 'beta', 'g' => 'gamma'}
}

/** 刪除鍵值對 - Map.prototype.delete()
  - 不可鍊式調用，原因如 return value
  - Return value:
    - true if the element is existed in the Map and has been removed
    - false if the element does not exist
 */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');
  map.delete('a');
  // console.log(map); // Map(2) {'b' => 'beta', 'g' => 'gamma'}
}

/** 清空鍵值對 - Map.prototype.clear()
  - Return value:
    - undefined
*/
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');
  // console.log(map); // Map(3) {'a' => 'alpha', 'b' => 'beta', 'g' => 'gamma'}
  map.clear();
  // console.log(map); // Map(0) {size: 0}
}

/** 是否包含特定 key - Map.prototype.has()
  - Return value:
    - true: if an element with the specified key exists in the Map object
    - otherwise false
 */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  // console.log(map.has('a')); // true
  // console.log(map.has('bar')); // false
}

/** 取得特定 key 的 value - Map.prototype.get() */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  // console.log(map.get('a')); // alpha
  // console.log(map.get('bar')); // undefined
}

/** 取得迭代用物件 - Map.prototype.entries()
  - Return value:
    - A new iterable iterator object.
*/
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  // console.log(map.entries());
  // MapIterator {'a' => 'alpha', 'b' => 'beta', 'g' => 'gamma'}
}

/** 迭代 - Map.prototype.forEach()
  - Return value:
    - undefined
*/
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  const obj = {
    a: 1,
  };

  // 如果要綁定 this 的話，不能使用 arrow function
  /* map.forEach(function (value, key, map) {
    console.log('--- start ---');
    console.log(value);
    console.log(key);
    console.log(map);
    console.log(this);
  }, obj); */
}

/** 迭代 - for of (有效) */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');
  /* for (const [key, value] of map) {
    console.log(key);
    console.log(value);
    if (key === 'a') {
      break;
    }
  } */
}

/** 迭代 - for in (無效) */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');
  // for (const i in map) {
  //   console.log(i);
  // }
}

/** 取得所有 key - Map.prototype.keys() */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  // console.log(map.keys());
  // MapIterator {'a', 'b', 'g'}
}

/** 取得所有 value - Map.prototype.values() */
{
  const map = new Map();
  map.set('a', 'alpha').set('b', 'beta').set('g', 'gamma');

  // console.log(map.values());
  // MapIterator {'alpha', 'beta', 'gamma'}
}
