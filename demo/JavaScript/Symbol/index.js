// 如何宣告一個 Symbol 變數
{
  // symbolTest();
  function symbolTest() {
    const s = Symbol();
    console.log(typeof s); // 'symbol'
    // const errorSymbol = new Symbol(); // Uncaught TypeError: Symbol is not a constructor
  }
}

// Symbol() 可以接受哪些型別的參數
{
  symbolTest();
  function symbolTest() {
    const s1 = Symbol();
    console.log(s1);
    
    const s2 = Symbol("foo");
    console.log(s2); // 'foo'

    const s3 = Symbol(42);
    console.log(s3.description); // '42'
  }
}

{
  // symbolTest();
  function symbolTest() {
    /** 如果 Symbol 的參數是一個物件，就會調用該物件的 toString() 方法，將其轉為 string，然後才生成一個 Symbol 值。
     */
    const obj1 = {
      a: 1,
    };
    const obj2 = {
      toString() {
        return "obj2";
      },
      b: 2,
    };
    const s1 = Symbol(obj1);
    const s2 = Symbol(obj2);
    console.log(s1.description); // [object Object]
    console.log(s2.description); // obj2
  }
}

{
  // symbolTest1();
  // symbolTest2();
  function symbolTest1() {
    // 沒有參數的情況
    const s1 = Symbol();
    const s2 = Symbol();
    console.log(s1 === s2); // false
  }
  function symbolTest2() {
    // 有參數的情況
    const s1 = Symbol("foo");
    const s2 = Symbol("foo");
    console.log(s1 === s2); // false
  }
}

// Symbol 型別運算、轉換
{
  // symbolTest();
  function symbolTest() {
    const sym = Symbol("My symbol");

    // "your symbol is " + sym; // Uncaught TypeError: Cannot convert a Symbol value to a string

    // `your symbol is ${sym}`; // Uncaught TypeError: Cannot convert a Symbol value to a string

    // 轉為 string
    console.log(String(sym)); // 'Symbol(My symbol)'
    console.log(sym.toString()); // 'Symbol(My symbol)'

    // 轉為 boolean
    console.log(Boolean(sym)); // true
  }
}

// 如何取得 Symbol 的 description
{
  // symbolTest();
  function symbolTest() {
    const sym = Symbol("My symbol");
    console.log(sym.description); // 'My symbol'
  }
}



{
  // symbolTest1();
  // symbolTest2();
  function symbolTest() {
    const info1 = {
      name: "婷婷",
      age: 24,
      job: "公司前台",
      description: "平時喜歡做做瑜伽，人家有男朋友，你別指望了"
    };
    const info2 = {
      description: "這小姑娘挺好的，挺熱情的，嘿嘿嘿……"
    };
    const integration = {};
    Object.assign(integration, info1, info2);
    console.log("integration", integration); // info1 的 description 被覆寫掉了
  }
  function symbolTest2() {
    const info1 = {
      name: "婷婷",
      age: 24,
      job: "公司前台",
      // 物件的 key 如果沒有用中括號包起來的話，只能是 string
      [Symbol("description")]: "平時喜歡做做瑜伽，人家有男朋友，你別指望了",
      // description: Symbol("平時喜歡做做瑜伽，人家有男朋友，你別指望了"),
    };
    const info2 = {
      description: "這小姑娘挺好的，挺熱情的，嘿嘿嘿……",
    };
    const integration = {};
    Object.assign(integration, info1, info2);
    console.log("integration", integration); // info1 的 description 被覆寫掉了
  }
}

{
  // objTest();
  function objTest() {
    const id = 3;
    const obj = {
      [id]: 2,
      [Symbol("description")]: "測試",
    }
    console.log(obj);
    console.log(Object.keys(obj)); // ['3'] // 被強制轉型為 string
    // Symbol 是無法透過迭代的方式（例如 for...in）或 getOwnPropertyNames, Object.keys() 取得
  }
}




// 如何宣告 Symbol
// 建立 Symbol 變數之後，要如何更新它的值？