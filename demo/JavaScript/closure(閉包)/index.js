/** Tommy 範例 */
{
  const objName = 'a';
  const obj = {
    objName: 'b',
    getName: function () {
      return function () {
        return this.objName;
      };
    },
    getClosureName: function () {
      const context = this;
      return function () {
        console.log(context === obj);
        return context.objName;
      };
    },
  };
  const obj2 = {
    objName: 'c',
  };

  const res = obj.getName();
  const res2 = obj.getClosureName();
  /** 以下兩種寫法在此範例中等價：

    * 寫法 1：
    const res = obj.getName();

    * 寫法 2：
    const res = function () {
      return this.objName;
    };
    */
  // console.log(res.call(obj2));
  // console.log(res2.call(obj2));
}

/** 透過 closure 記憶變數 */
{
  const add = (function () {
    let count = 0;
    return function () {
      return (count += 1);
    };
  })();
  console.log(add());
  console.log(add());
}

/** setTimeout */
{
  // 印出 5 個 5
  /*
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  */

  // 依序印出 0, 1, 2, 3, 4
  /*
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
  */

  // 依序印出 0, 1, 2, 3, 4
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

/** 基礎 closure 範例 */
{
  function init() {
    const name = 'Mozilla'; // name 是個由 init 建立的局部變數

    function displayName() {
      // displayName() 是內部函式，一個閉包
      console.log(name); // 使用了父函式宣告的變數
    }
    displayName();
  }
  // init();
}

{
  function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }

  const myFunc = makeFunc();
  // myFunc();
}

{
  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }

  const add5 = makeAdder(5);
  const add10 = makeAdder(10);

  // console.log(add5(2)); // 7
  // console.log(add10(2)); // 12
}

{
  function makeSizer(size) {
    return function () {
      document.body.style.fontSize = size + 'px';
    };
  }

  const size12 = makeSizer(12);
  const size14 = makeSizer(14);
  const size16 = makeSizer(16);
}
