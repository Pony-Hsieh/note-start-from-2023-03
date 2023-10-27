/** 測試 this 綁定  */
{
  function debounce(fn, wait = 500) {
    let timer;
    // ...args: 其餘參數(型別為 array)

    // return 時不可使用 arrow function，不然會造成 this 指向錯誤
    // X: return (...args) => {
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // ...args: 將其餘參數的陣列解構為一個一個的參數丟到 fn 中
        fn.apply(this, args); // .apply() 傳入陣列(或類陣列)
        // fn.call(this, ...args); // call 是一個一個傳
      }, wait);
    };
  }

  function debounce1ArrowFunction(fn, wait = 500) {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args); // .apply() 傳入陣列(或類陣列)
      }, wait);
    };
  }

  function debounce2ArrowFunction(fn, wait = 500) {
    let timer;
    return (...args) => {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args); // .apply() 傳入陣列(或類陣列)
      }, wait);
    };
  }

  function debounceWithoutBindingThis(fn, wait = 500) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, wait);
    };
  }

  const testObj = {
    aaa: 'testThis',
    printThis() {
      // console.log(this); // testObj
      // console.log(this === testObj); // true
    },
    debounceFn: debounce(function () {
      console.warn('---------------');
      console.log('this', this); // testObj
      console.log(`for test: ${this.aaa}`);
    }),
    debounce1ArrowFunctionFn: debounce1ArrowFunction(function () {
      console.warn('---------------');
      console.log('this', this); // testObj
      console.log(`for test: ${this.aaa}`);
    }),
    debounce2ArrowFunctionFn: debounce2ArrowFunction(function () {
      console.warn('---------------');
      console.log('this', this); // Window
      console.log(`for test: ${this.aaa}`);
    }),
    debounceWithoutBindingThisFn: debounceWithoutBindingThis(function () {
      console.warn('---------------');
      console.log('this', this); // Window
      console.log(`for test: ${this.aaa}`);
    }),
  };

  // testObj.printThis();
  // testObj.debounceFn(); // for test: testThis
  // testObj.debounce1ArrowFunctionFn(); // for test: testThis
  // testObj.debounce2ArrowFunctionFn(); // for test: undefined
  // testObj.debounceWithoutBindingThisFn(); // for test: undefined
}
