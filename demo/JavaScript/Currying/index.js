const abcd = function (a, b, c, d) {
  return [a, b, c, d];
};

/** lodash 版的 curry - 範例 1 */
{
  const curried = curry(abcd);
  // console.log(curried(1)(2)(3));
  // console.log(curried(1, 2)(3));
  // console.log(curried()(1)()(2)()(3));
}

/** lodash 版的 curry - 範例 2 */
{
  function volume(length, width, height) {
    return length * width * height;
  }

  const curried = curry(volume);

  // console.log(curried(2)(3)(5));
  // console.log(curried()(2)(3)()()(5));
}

/** 簡易 loadsh curry - 範例 1 */
{
  function curryEasy1(fn, ...args1) {
    // Condition: 已經蒐集完指定數量的參數
    if (args1.length >= fn.length) {
      // 將參數傳入 callback，並回傳 callback 執行結果
      return fn(...args1);
    }

    // Condition: 尚未蒐集到指定數量的參數
    return function (...args2) {
      // 下方那行的 ... 為 spread operator，將 array 的參數展開後傳入 curryEasy2 執行
      return curryEasy1(fn, ...args1, ...args2);
    };
  }

  // const curried = curryEasy2(abcd);
  // console.log(curried(1)(1)(1)(1));
}

/** 簡易 loadsh curry - 範例 2 */
{
  function curryEasy2(fn) {
    return function inner(...args1) {
      // Condition: 已經蒐集完指定數量的參數
      if (args1.length >= fn.length) {
        // 回傳將參數帶入 callback 後的執行結果
        return fn.apply(this, args1);
      }

      // Condition: 尚未蒐集到指定數量的參數
      return function (...args2) {
        return inner.apply(this, [...args1, ...args2]);
      };
    };
  }
  const curried = curryEasy2(abcd);
  // console.log(curried(1)(1)(1)(2));

  // 作者：CoderBin
  // 链接：https://juejin.cn/post/7129774877665394718
  // 来源：稀土掘金
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

/** 簡易 loadsh curry - 範例 3
  - [範例來源](https://zhuanlan.zhihu.com/p/640412466)
 */
{
  function curryEasy3(fn) {
    return function curried(...args1) {
      // Condition: 已經蒐集完指定數量的參數
      if (args1.length >= fn.length) {
        // 回傳將參數帶入 callback 後的執行結果
        return fn.apply(this, args1);
      }
      // Condition: 尚未蒐集到指定數量的參數
      return function (...args2) {
        return curried.apply(this, args1.concat(args2));
      };
    };
  }

  console.warn('---------------------');
  const curried = curryEasy3(abcd);
  console.log(curried(1)(2, 3)(4));
}

/** 手寫一個 add function，使計算結果能夠滿足如下預期：
  add(1)(2)(3) === 6;
  add(1, 2)(3) === 6;
  add(1, 2, 3) === 6;
  add(1, 2, 3, 4, 5) === 15;
 */
{
}
