/** Set 屬性 - Set.prototype.size
 * The size property of Set instances returns the number of (unique) elements in this set.
 */
{
  const set = new Set([1, 1, 2, 3, 4]);
  // console.log(set.size); // 4
}

/** 新增元素 - Set.prototype.add()
 * 可鍊式調用
 */
{
  const set = new Set();
  set.add(1).add(2).add(2).add(2);
  // console.log(set); // Set(2) {1, 2}
}

/** 刪除元素 - Set.prototype.delete() */
{
  const set = new Set([1, 2, 3, 4]);
  set.delete(1);
  // console.log(set); // Set(3) {2, 3, 4}
}

/** 移除 set 內所有元素 - Set.prototype.clear() */
{
  const set = new Set([1, 2, 3, 4]);
  set.clear();
  // console.log(set); // Set(0) {size: 0}
}

/** 是否包含特定元素 - Set.prototype.has() */
{
  const set = new Set([1, 2, 3, 4]);
  // console.log(set.has(1)); // true
  // console.log(set.has(9)); // false
}

/** 迭代 - Set.prototype.forEach() */
{
  const set = new Set([1, 2, 3, 4]);

  const obj = {
    a: 1,
  };

  // set 的 key 與 value 是相同的
  // 如果要綁定 this 的話，不能使用 arrow function
  /* set.forEach(function (value, key, set) {
    console.log('--- start ---');
    console.log(value);
    console.log(key);
    console.log(set);
    console.log(this);
    console.log('--- end ---');
  }, obj); */
}

/** 迭代 - for of (有效)
  - 如果所有元素都要做處理 => forEach
  - 會需要提前終止迴圈 => for of 搭配 break
 */
{
  const set = new Set([1, 2, 3, 4]);

  /* for (const i of set) {
    console.log(i);
    if (i === 2) {
      break;
    }
  } */
}

/** 迭代 - for in (無效) */
{
  const set = new Set([1, 2, 3, 4]);

  // 無效
  for (const i in set) {
    console.log(i);
  }

  // 無效
  for (const i in set.keys()) {
    console.log(i);
  }

  // 無效
  for (const i in set.values()) {
    console.log(i);
  }
}

/** 取得迭代用物件 - Set.prototype.entries() */
{
  const set = new Set();
  set.add(42);
  set.add('forty two');

  const iterator = set.entries();
  // console.log(iterator); // SetIterator {42 => 42, 'forty two' => 'forty two'}

  // for (const entry of iterator) {
  //   console.log(entry);
  //   // Expected output: Array [42, 42]
  //   // Expected output: Array ["forty two", "forty two"]
  // }

  // 沒有跑出任何內容XD
  for (const entry in iterator) {
    console.log(entry);
  }
}

/** 取得所有 key - Set.prototype.keys() */
{
  const set = new Set([1, 2, 3, 4]);
  // console.log(set.keys()); // SetIterator {1, 2, 3, 4}
}

/** 取得所有 value - Set.prototype.values() */
{
  const set = new Set([1, 2, 3, 4]);
  // console.log(set.values()); // SetIterator {1, 2, 3, 4}
}

/** 與 Array 物件關聯 */
{
  const obj = { a: 1 };
  const v3 = 'value3';
  const myArr = [obj, { a: 1 }, v3, 'value3'];

  // 將 Array 轉為 Set，轉換時會將重複的值移除
  const mySet = new Set(myArr);

  // 將 Set 轉為 Array
  const myArr2 = [...mySet];

  // console.log(myArr2); // Will show you exactly the same Array as myArray
  // mySet.has('value1'); // returns true
}

/** 如果想去除陣列中重複的元素，其中一種做法就是，將 array 轉為 set 再轉回 array */
{
  const duplicateArr = [1, 1, 1, 2, 3];
  const set = new Set(duplicateArr);
  const deduplicateArr = [...set];

  // console.log(set); // Set(3) {1, 2, 3}
  // console.log(deduplicateArr); // [1, 2, 3]
}
