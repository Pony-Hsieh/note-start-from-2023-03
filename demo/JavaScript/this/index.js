/** 在獨立的 function 中 */
{
  // test();
  function test() {
    // 'use strict';
    console.log(this, 1); // undefined
    (function () {
      console.log(this, 2); // undefined
    })();
    (() => {
      console.log(this, 3); // undefined
    })();
  }
}

/** 物件的方法 */
{
  /* (() => {
    // 'use strict';

    const obj = {
      x: 3,
      printThis: function () {
        console.log(this);
        console.log(this === obj);
      },
    };

    obj.printThis(); // obj, true
  })(); */
}

/** 事件處理 function */
{
  /* (() => {
    // 'use strict';
    document.addEventListener('click', function () {
      console.log(this); // document
    });
  })(); */
}

/** 建構函式中的 this */
{
  (() => {
    // 'use strict';
    function People(name) {
      this.name = name;
      // this.printThis = function () {
      //   console.log(this);
      // };
    }
    People.prototype.printThis = function () {
      console.log(this);
    };

    const p1 = new People('Mike');
    const p2 = new People('John');
    // p1.printThis();
    // p2.printThis();
    // console.log(p1.printThis === p2.printThis); // false

    class ClassPeople {
      constructor(name) {
        this.name = name;
      }
      printThis() {
        console.log(this);
      }
    }

    const c1 = new ClassPeople('Mike2');
    const c2 = new ClassPeople('John2');
    // c1.printThis();
    // c2.printThis();
    // console.log(c1.printThis === c2.printThis); // true
  })();
}

/** 構造函式綁定 */
{
  function Lover(name) {
    this.name = name;
    this.sayName = function () {
      console.log(`我的老婆是${this.name}`);
      // 建構函式中的 this 指向建構函式所建立的物件實例
    };
  }

  const name = '小白';
  const xiaoHong = new Lover('小紅');
  // xiaoHong.sayName();
}

/** call, apply, bind 搭配 arrow function */
{
  (function () {
    // 'use strict';

    const adder = {
      base: 1,
      add: function (a) {
        const fn = (val) => val + this.base;
        return fn(a);
      },
      addThroughCall: function (a) {
        const fn = (v) => v + this.base;
        const b = {
          base: 2,
        };
        return fn.call(b, a);
      },
      addThroughTraditionalFn: function (a) {
        function fn(val) {
          return val + this.base;
        }
        const b = {
          base: 2,
        };
        return fn.call(b, a);
      },
    };

    // console.log(adder.add(1)); // 2
    // console.log(adder.addThroughCall(1)); // 2
    // console.log(adder.addThroughTraditionalFn(1)); // 3
  })();
}

/** setTimeout */
{
  (function () {
    // 'use strict';
    function test() {
      console.log(this);
    }

    // test(); // Window or undefined(strict mode)
    // setTimeout(test, 100); // Window 或 global
  })();
}

/** 物件方法 */
{
  (function () {
    'use strict';

    const a = 'global';

    function printA() {
      console.log(`a: ${this.a}`);
    }

    const obj = {
      a: 'obj',
      printA: printA,
    };

    // obj.printA(); // a: obj
  })();
}

/** class */
{
  /* (function () {
    // 'use strict';

    class People {
      constructor(name) {
        this.name = name;
        callback(); // 指向window
      }
      func() {
        this.callback(); // 指向MyTest
      }
    }

    // let的值不会绑定到window上，无法用window.name访问
    let name = 'global';
    function Test() {
      console.log(this, this.name);
    }
    new Test(); // window 使用let输出 '', 使用var输出global
    let c = new MyTest(Test); // window 使用let输出 '', 使用var输出global
    c.func(); // MyTest{} undefined
  })(); */
}

/** closure */
{
  (function () {
    // 'use strict';

    const box = {
      printThis: function () {
        console.log(this);
        return function () {
          console.log(this);
        };
      },
    };

    const obj = {
      x: 3,
    };

    // box.printThis.call(obj)();
    // obj
    // Window or undefined(strict mode)
  })();
}

/** 硬綁定 */
{
  const girlName = {
    name: '小紅',
    sayName: function () {
      console.log(`我的女友是${this.name}`);
    },
  };
  const girl2 = {
    name: '小白',
  };
  const girl3 = {
    name: '小黃',
  };
  // girlName.sayName(); // 小紅
  // girlName.sayName.call(girl2); // 小白
  // girlName.sayName.call(girl3); // 小黃
}

{
  // 使用 var 在全域宣告的變數，會轉為 window.變數，但使用 let, const 宣告的不會
  const a = 'globalA';
  var b = 'globalB';

  function printSth() {
    console.log('a', this.a);
    console.log('b', this.b);
  }

  const obj = {
    a: 'objA',
    b: 'objB',
  };

  // printSth();
  // a undefined
  // a globalB

  // printSth.call(obj);
  // a objA
  // b objB
}

/** 綁定 undefined, null */
{
  (function () {
    // 'use strict';

    function foo() {
      console.log(this);
    }

    // foo.call(undefined); // Window or undefined(strict mode)
    // foo.call(null); // Window or null(strict mode)
  })();
}

/** 題目 */
{
  function a() {
    console.log(this); // Window
    function b() {
      console.log(this); // Window
      function c() {
        'use strict';
        console.log(this); // undefined
      }
      c();
    }
    b();
  }
  // a();
}

/** 題目 */
{
  const name = '小白';

  function special() {
    console.log(`姓名： ${this.name}`);
  }

  const girl = {
    name: '小紅',
    detail: function () {
      console.log(`姓名： ${this.name}`);
    },
    woman: {
      name: '小黃',
      detail: function () {
        console.log(`姓名： ${this.name}`);
      },
    },
    special: special,
  };

  // girl.detail(); // 小紅
  // girl.woman.detail(); // 小黃
  // girl.special(); // 小紅
}

/** 題目 */
{
  // const name = '小紅';
  var name = '小紅';

  function a() {
    const name = '小白';
    console.log(this.name);
  }

  function d(cb) {
    cb();
  }

  const b = {
    name: '小黃',
    detail: function () {
      console.log(this.name);
    },
    bibi: function () {
      return function () {
        console.log(this.name);
      };
    },
  };

  const c = b.detail;
  const e = b.bibi();
  b.a = a;

  // a();
  // c();
  // b.a();
  // d(b.detail);
  // e();
}
