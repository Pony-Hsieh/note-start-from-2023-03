/****************************************/
// Array.prototype.at()
{
  // testAt();
  function testAt() {
    const array1 = [5, 12, 8, 130, 44];
    console.log(
      array1.at(0) // 5
    );
    console.log(
      array1.at(3) // 130
    );
    console.log(
      array1.at(-1) // 44
    );
    console.log(
      array1.at(-3) // 8
    );
  }
}

/****************************************/
// Array.prototype.concat()
{
  // testConcat();
  function testConcat() {
    // Concatenating three arrays

    // Concatenating values to an array

    // Concatenating nested arrays

    // Using concat() on sparse arrays


    const emptyArr = [];
    const array1 = ['a', 'b'];
    const array2 = ['c', , 'd'];
    const array3 = emptyArr.concat(array2, array1, Symbol('mySymbol'), 0);
    const array4 = emptyArr.concat(); // 產生一份 emptyArr 的 shallow copy
    console.log(emptyArr); // [] // 不改變調用 concat 方法的陣列
    console.log(array3); // ['c', empty, 'd', 'a', 'b', Symbol(mySymbol), 0] // 會保留被合併陣列中的 empty slots
    console.log(array4); // []
    array4.push(1);
    console.log(emptyArr); // []
    console.log(array4); // [1]
  }
}


/****************************************/
// Array.prototype.fill()
{
  // testFill();
  function testFill() {
    const numbers = [0, 1, 2, 3, 4, 5];
    console.log(
      numbers.fill('a') // ['a', 'a', 'a', 'a', 'a', 'a']
    );
    console.log(numbers); // ['a', 'a', 'a', 'a', 'a', 'a'] // 會改變調用此方法的陣列

    console.log(
      [0, 1, 2, 3, 4, 5].fill('a', NaN, NaN) // [0, 1, 2, 3, 4, 5]
    );

    console.log(
      [0, 1, 2, 3, 4, 5].fill('a', 3) // [0, 1, 2, 'a', 'a', 'a']
    );

    console.log(
      [0, 1, 2, 3, 4, 5].fill('a', 2, 3) // [0, 1, 'a', 3, 4, 5]
    );

    console.log(
      [0, 1, 2, 3, 4, 5].fill('a', 3, 2) // [0, 1, 2, 3, 4, 5]
    );
  }
}

/****************************************/
// Array.prototype.filter()
{
  // testFilter();
  function testFilter() {

    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    const filterItems1 = fruits.filter((eachEl) => {
      // String.match() 只能接受正規表達式作為參數
      return eachEl.toLowerCase().match(/ang/i);
    });
    console.log(filterItems1); // ['mango', 'orange']
    console.log(fruits); // 不改變調用此方法的陣列

    // String.includes() 只能接受字串作為參數
    const filterItems2 = fruits.filter(el => el.toLowerCase().includes('ap'.toLowerCase()));
    console.log(filterItems2); // ['apple', 'grapes']
  }
}

/****************************************/
// Array.prototype.find()
{
  // testFind();
  function testFind() {
    const inventory = [
      {
        name: 'apples',
        quantity: 2
      }, {
        name: 'bananas',
        quantity: 0
      }, {
        name: 'cherries',
        quantity: 5
      },
    ];

    console.log(
      inventory.find((eachEl, index, arr) => {
        console.log(eachEl, index, arr);
        return true; // 跑到陣列第一項即停止，並回傳該元素
      })
    );

    console.log(
      inventory.find(eachFruit => eachFruit.name === 'cherries') // {name: 'cherries', quantity: 5}
    );

    console.log(inventory); // 不改變調用此方法的陣列
  }
}

/****************************************/
// Array.prototype.findIndex()
{
  // testFindIndex();
  function testFindIndex() {
    const inventory = [
      {
        name: 'apples',
        quantity: 2
      }, {
        name: 'bananas',
        quantity: 0
      }, {
        name: 'cherries',
        quantity: 5
      },
    ];

    console.log(
      inventory.findIndex(({ name }) => {
        return name === 'bananas'; // 1
      })
    );
  }
}

/****************************************/
// Array.prototype.findLast()
{
  // testFindLast();
  function testFindLast() {
    const array1 = [5, 12, 50, 130, 44];
    console.log(
      array1.findLast((element) => element > 45)
    );

    const inventory = [
      { name: 'apples', quantity: 2 },
      { name: 'bananas', quantity: 0 },
      { name: 'cherries', quantity: 5 },
    ];
    console.log(
      inventory.findLast(({ quantity }) => quantity < 2) // {name: 'bananas', quantity: 0}
    );
  }
}

/****************************************/
// Array.prototype.findLastIndex()
{
  // testFindLastIndex();
  function testFindLastIndex() {
    const array1 = [5, 12, 50, 130, 44];
    console.log(
      array1.findLastIndex(el => el > 45) // 3
    );
  }
}

/****************************************/
// Array.prototype.indexOf()
{
  // testIndexOf();
  function testIndexOf() {

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', NaN];

    console.log(
      beasts.indexOf('bison') // 1
    );

    console.log(
      beasts // 不改變調用此方法的陣列
    );

    console.log(
      // indexOf() always returns -1 when searchElement is NaN
      beasts.indexOf(NaN) // -1
    );

    console.log(
      beasts.indexOf('camel', -3) // -1
    );

    console.log(
      beasts.indexOf('bison', 2) // 4
    );

    console.log(
      beasts.indexOf('giraffe') // -1
    );
  }
}

/****************************************/
// Array.prototype.lastIndexOf()
{
  // testLastIndexOf();
  function testLastIndexOf() {
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', NaN];

    console.log(
      animals.lastIndexOf('Dodo') // 3
    );

    console.log(
      animals.lastIndexOf('Tiger') // 1
    );

    console.log(
      // lastIndexOf() always returns -1 when searchElement is NaN
      animals.lastIndexOf(NaN) // -1
    );

  }
}

/****************************************/
// Array.prototype.forEach()
{
  // testForEach();
  function testForEach() {
    const array1 = ['a', 'b', 'c'];
    array1.forEach(element => console.log(element));
  }
}

/****************************************/
// Array.prototype.map()
{
  // testMap();
  function testMap() {
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(eachNum => eachNum * 2);
    console.log(map1); // [2, 8, 18, 32]
    const map2 = array1.map(eachNum => Math.sqrt(eachNum));
    console.log(map2); // [1, 2, 3, 4]
  }
}

/****************************************/
// Array.prototype.inclueds()
{
  // testInclueds();
  function testInclueds() {
    const array1 = [1, 2, 3, NaN];
    console.log(
      array1.includes(2) // true
    );
    console.log(
      // 不改變調用此方法的陣列
      array1.includes(NaN) // [1, 2, 3, NaN]
    );
    console.log(
      array1 // true
    );

    const pets = ['cat', 'dog', 'bat'];
    console.log(
      pets.includes('cat') // true
    );

    console.log(
      pets.includes('at') // false
    );
  }
}


/****************************************/
// Array.prototype.keys()
{
  // testKeys();
  function testKeys() {
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.keys();
    console.log(iterator); // Array Iterator {}
    for (const key of iterator) {
      console.log(key);
    }
    // 0
    // 1
    // 2
  }
}


/****************************************/
// Array.prototype.values()
{
  // testValues();
  function testValues() {
    const array1 = ['a', 'b', 'c'];
    const iterator = array1.values();
    console.log(iterator); // Array Iterator {}
    // console.log(
    //   iterator.next() // {value: 'a', done: false}
    // );
    // console.log(
    //   iterator.next().value // 'b'
    // );

    for (const key of iterator) {
      console.log(key);
    }
    // a
    // b
    // c
  }
}

/****************************************/
// Array.prototype.entries()
{
  testEntries();
  function testEntries() {
    // basicTest();
    function basicTest() {
      const alpha = ['a', 'b', 'c'];

      console.log(
        alpha.entries() // Array Iterator {}
      );
      console.log(
        alpha.entries().next() // {value: Array(2), done: false}
      );
      console.log(
        alpha.entries().next().value // [0, 'a']
      );

      const sparse = [, , , ,];
      console.log(
        sparse.entries() // Array Iterator {}
      );
      console.log(
        sparse.entries().next() // {value: Array(2), done: false}
      );
      console.log(
        sparse.entries().next().value // [0, undefined]
      );
    }

    // Iterating with index and element
    // iterationTest();
    function iterationTest() {
      const alpha = ['a', 'b', 'c'];
      for (const [index, element] of alpha.entries()) {
        console.log(index, element);
      }
      // Output
      // 0 'a'
      // 1 'b'
      // 2 'c'
    }

    // Using a for...of loop
    // forOfTest();
    function forOfTest() {
      const alpha = ['a', 'b', 'c'];
      const arrayEntries = alpha.entries();
      for (const element of arrayEntries) {
        console.log(element);
      }
      // Output
      // [0, 'a']
      // [1, 'b']
      // [2, 'c']
    }

    // Iterating sparse arrays
    // sparseArrayTest();
    function sparseArrayTest() {
      const sparse = [, 'a', 'b', 'c'];
      const arrayEntries = sparse.entries();
      for (const element of arrayEntries) {
        console.log(element);
      }
      // Output
      // [0, undefined]
      // [1, 'a']
      // [2, 'b']
      // [3, 'c']
    }
  }
}

/****************************************/
// Array.prototype.pop()
{
  // testPop();
  function testPop() {
    const array1 = ['a', 'b', 'c', 'd', 'e'];
    console.log(
      array1.pop() // 'e'
    );
    console.log(
      array1 // ['a', 'b', 'c', 'd']
    );
  }
}


/****************************************/
// Array.prototype.push()
{
  // testPush();
  function testPush() {
    const array1 = ['a', 'b', 'c', 'd', 'e'];
    console.log(
      array1.pop() // 'e'
    );
    console.log(
      array1 // ['a', 'b', 'c', 'd']
    );

  }
}


/****************************************/
// Array.prototype.join()
{
  // testPop();
  function testPop() {
    const elements = ['Fire', 'Air', 'Water'];

    console.log(
      elements.join() // 'Fire,Air,Water'
    );

    console.log(
      elements.join('') // 'FireAirWater'
    );

    console.log(
      elements.join('-') // 'Fire-Air-Water'
    );
  }
}


/****************************************/
// Array.prototype.reverse()
{
  // testReverse();
  function testReverse() {
    const nums = [1, 2, , 4, 5];
    nums.reverse();
    console.log(nums); // [5, 4, empty, 2, 1]
  }
}


/****************************************/
// Array.prototype.toReversed()
{
  // testToReversed();
  function testToReversed() {
    const nums = [1, 2, , 4, 5];
    const reversedArr = nums.toReversed();
    console.log(
      // 不改變調用此方法的陣列
      nums // [1, 2, empty, 4, 5]
    );
    console.log(reversedArr); // [5, 4, empty, 2, 1]
  }
}


/****************************************/
// Array.prototype.sort()
{
  // testSort();
  function testSort() {
    const array1 = [1, 30, 4, , , , 21, 100000];
    array1.sort();
    console.log(array1); // [1, 100000, 21, 30, 4, empty × 3]
  }
}


/****************************************/
// Array.prototype.with()
{
  // testWith();
  function testWith() {
    const arr = [1, , 3, 4, , 6];
    console.log(
      arr.with(0, 2) // [2, undefined, 3, 4, undefined, 6]
    ); 
    // 不改變調用此方法的陣列
    console.log(arr); // [1, empty, 3, 4, empty, 6]
  }
}

