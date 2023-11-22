{
  // 老写法
  'assign' in Object; // true

  // 新写法
  console.log(Reflect.has(Object, 'assign'));
}

/** observer mode */
{
  // Step: 定義一個 set
  // ES6 中如果希望「陣列（Array）」的元素不會重複，可以使用 Set
  const queuedObservers = new Set();

  function observe(fn) {
    return queuedObservers.add(fn);
  }

  function observable(obj) {
    return new Proxy(obj, { set: proxySet });
    /**
      Proxy 用於創建一個物件的代理，從而實現基本操作的攔截和自定義（如屬性查找、賦值、枚舉、函數調用等）。

      語法： const p = new Proxy(target, handler);

      target: 要使用 Proxy 包裝的目標物件（可以是任何類型的物件，包括原生數組，函數，甚至另一個代理）

      handler: 一個通常以 function 作為值的物件，各屬性中的 function 分別定義了在執行各種操作時代理 p 的行為
     */
  }

  function print() {
    console.log(`${person.name}, ${person.age}`);
  }

  /**
    const p = new Proxy(target, {
      set: function(target, property, value, receiver) {
      }
    });
   */
  function proxySet(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach((observer) => observer());
    return result;
  }

  const person = observable({
    name: '张三',
    age: 20,
  });

  observe(print);
  person.name = '李四';
  // 输出
  // 李四, 20
}
