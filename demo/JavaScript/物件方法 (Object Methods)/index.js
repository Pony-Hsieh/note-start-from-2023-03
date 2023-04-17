/****************************************/
// Obj null undefined
{
  // testObj();
  function testObj() {
    const o1 = new Object();
    const o2 = new Object(undefined);
    const o3 = new Object(null);

    console.log(o1);
    console.log(o2);
    console.log(o3);
  }
}


/****************************************/
// assign
{
  // testAssign();
  function testAssign() {
    const target = {
      a: 1,
      b: 2,
    };
    const source1 = {
      b: 22,
      c: 3,
      [Symbol('id')]: 6,
    };

    const source2 = {
      d: 4,
      e: 5,
      [Symbol('id')]: 7,
    };

    var obj = Object.create({ foo: 1 }, { // foo 是 obj 的屬性鏈。
      bar: {
        value: 2  // bar 是不可列舉的屬性，因為enumerable預設為false。
      },
      baz: {
        value: 3,
        enumerable: true  // baz 是自身可列舉的屬性。
      }
    });
    console.log(
      obj
    );

    var copy = Object.assign({}, obj);
    console.log(copy); // { baz: 3 }

    const returnedTarget = Object.assign(target, source1, source2);

    console.log(target); // { a: 1, b: 4, c: 5 }
    console.log(returnedTarget === target); // true
    console.log(
      Object.getOwnPropertySymbols(target)
    );
  }
}


/****************************************/
// defineProperty
{
  // testDefineProperty();
  function testDefineProperty() {
    const obj = {};
    Object.defineProperty(obj, 'property1', {
      configurable: false,
      enumerable: false,
      value: false,
      writable: false,
    });
    console.log(obj);
  }
}


/****************************************/
// keys
{
  // testKeys();
  function testKeys() {
    const arr = ['a', 'b', 'c'];
    console.log(
      Object.keys(arr) // ['0', '1', '2']
    );

    const obj = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
    };
    console.log(
      Object.keys(obj) // ['0', '1', '2']
    );

    const anObj = {
      '100': 'a',
      '2': 'b',
      '7': 'c',
      '-1': 'd',
      '-20': 'd',
      '-300': 'e',
    };
    console.log(
      Object.keys(anObj) // ['2', '7', '100', '-1', '-20', '-300']
    );

    const user = {
      '100': 'a',
      '2': 'b',
      '-300': 'e',
      'name': "John",
      'age': 30,
      '7': 'c',
      '-1': 'd',
      '-20': 'd',
    };
    console.log(
      Object.keys(user) // ['2', '7', '100', '-300', 'name', 'age', '-1', '-20']
    );

  }
}


/****************************************/
// values
{
  // testValues();
  function testValues() {
    const user = {
      '100': 'a',
      '2': 'b',
      '-300': 'e',
      'name': "John",
      'age': 30,
      '7': 'c',
      '-1': 'd',
      '-20': 'd',
    };
    console.log(
      Object.values(user) // ['b', 'c', 'a', 'e', 'John', 30, 'd', 'd']
    );
  }
}


/****************************************/
// fromEntries
{
  // 由 map 轉
  testFromEntries1();
  function testFromEntries1() {
  }
}


