/** 其餘參數 (rest parameter) */
{
  function restParameter1(a, b, ...args) {
    console.log('a', a);
    console.log('b', b);
    console.log('args', args);
    console.log(Array.isArray(args)); // true
  }
  // restParameter1(1, 2, 3, 4, 5);

  function restParameter2(...args) {
    console.log('args', args);
    console.log(Array.isArray(args)); // true
  }
  // restParameter2(1, 2, 3, 4, 5);
}

/** arguments object */
{
  function argumentsObject() {
    console.log('arguments', arguments);
    console.log(Array.isArray(arguments)); // false
    [...arguments].forEach((el) => {
      console.log(el);
    });
  }
  // argumentsObject(1, 2, 3, 4, 5);
}
