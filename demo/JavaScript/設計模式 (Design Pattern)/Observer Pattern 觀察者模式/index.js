/** 最基礎的型態
 * - [javascript 设计模式之观察者模式](https://juejin.cn/post/6961017766560137230)
 */
{
  // 定義發布者類
  class Subject {
    observers = [];

    constructor() {
      console.log('Subject created');
    }

    // 增加訂閱者
    add(observer) {
      console.log('Subject.add invoked');
      this.observers.push(observer);
    }

    // 移除訂閱者
    remove(observer) {
      console.log('Subject.remove invoked');
      this.observers.forEach((item, i) => {
        if (item === observer) {
          this.observers.splice(i, 1);
        }
      });
    }

    // 通知所有訂閱者
    notify() {
      console.log('Publisher.notify invoked');
      this.observers.forEach((observer) => {
        observer.update(this);
      });
    }
  }

  // 定義訂閱者類
  class Observer {
    constructor() {
      console.log('Observer created');
    }
    update() {
      console.log('Observer.update invoked');
    }
  }
}

/** 觀察者模式 範例 1 */
{
  const queuedObservers = new Set();

  function observe(fn) {
    return queuedObservers.add(fn);
  }

  function observable(obj) {
    return new Proxy(obj, { set: proxySet });
  }

  function proxySet(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    // Reflect.set 回傳一個 Boolean 值表明是否成功設定屬性

    // console.log('result', result);
    queuedObservers.forEach(function (observer) {
      return observer();
    });
    // 為什麼要 return 一個 boolean?
    // 不 return 會怎樣？
    // 我就是要皮，我就不想 return
    return result;
  }

  const person = observable({
    name: '張三',
    age: 20,
  });

  function print() {
    // console.log(` ${person.name} , ${person.age} `);
  }

  observe(print);
  person.name = '李四';
  // 輸出
  // 李四, 20
}

/** 觀察者模式 */
{
  // 定义一个目标对象
  class Subject {
    Observers = [];
    constructor() {
      // this.Observers = [];
      console.log('this.Observers', this.Observers);
    }

    add(observer) {
      // 添加
      this.Observers.push(observer);
    }

    remove(observer) {
      // 移除
      this.Observers.filter((item) => item === observer);
    }

    notify() {
      // 通知所有观察者
      this.Observers.forEach((item) => {
        item.update();
      });
    }
  }
  //定义观察者对象
  class Observer {
    constructor(name) {
      this.name = name;
    }
    update() {
      console.log(`my name is:${this.name}`);
    }
  }

  // let sub = new Subject();
  // console.log(sub);
  // let obs1 = new Observer('observer11');
  // let obs2 = new Observer('observer22');
  // sub.add(obs1);
  // sub.add(obs2);
  // sub.notify();
}

/** 觀察者模式 es6
 * - [](https://www.zhihu.com/question/589149644)
 */
{
  // 建立一個觀察者列表，用於保存所有訂閱者的回呼函數
  // 為什麼要保存訂閱者的 callback function？
  const observers = new Set();

  // 建立一個代理物件，並在代理物件的 set 方法中加入通知訂閱者的邏輯
  function observable(obj) {
    return new Proxy(obj, {
      set(target, key, value, receiver) {
        // Reflect 的用途是甚麼？
        const result = Reflect.set(target, key, value, receiver);
        observers.forEach((observer) => observer());
        return result;
      },
    });
  }

  /* const observable = (obj) =>
    new Proxy(obj, {
      set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        observers.forEach((observer) => observer());
        return result;
      },
    }); */

  // 创建一个订阅者函数，用于向观察者列表中添加回调函数
  // 增加要被執行的 function(？
  // const observe = (fn) => observers.add(fn);

  function observe(fn) {
    observers.add(fn);
  }

  function unObserve(fn) {
    observers.delete(fn);
  }

  // 创建一个取消订阅函数，用于从观察者列表中移除回调函数
  // 移除要被執行的 function(？
  const unobserve = (fn) => observers.delete(fn);

  // 创建一个测试对象，并将其转换为可观察对象。
  // const data = { name: 'Tom', age: 18 };
  // const observableData = observable(data);

  // 添加订阅者函数，并在回调函数中打印变化后的数据。
  // observe(() =>
  //   console.log(`Name: ${observableData.name}, Age: ${observableData.age}`)
  // );

  // 修改数据，并观察订阅者函数是否被调用。
  // observableData.name = 'Jerry'; // 订阅者函数被调用，输出 "Name: Jerry, Age: 18"
}

/** 觀察者模式 es6
 * - [](https://www.cnblogs.com/WhiteHorseIsNotHorse/p/7016010.html)
 */
{
  //添加观察者
  const queuedObservers = new Set();
  const observe = (fn) => queuedObservers.add(fn);

  //proxy 的set 方法
  function proxySet(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach((observer) => observer());
    return result;
  }
  //创建proxy代理
  const observable = (obj) => new Proxy(obj, { set: proxySet });
  //被观察的 对象
  const person = observable({
    name: '张三',
    age: 20,
  });

  function print() {
    console.log(`${person.name}, ${person.age}`);
  }
  function print2() {
    console.log(`我是二号观察者：${person.name}, ${person.age}`);
  }
  //添加观察者
  // observe(print);
  // observe(print2);
  // person.name = '李四';
}

/** 自己理解後重新寫的觀察者模式 */
{
  // Step: 建立一個代理物件
  const observers = new Set();

  // Step: 在代理物件的 set 方法中加入通知訂閱者的邏輯
  function observable(obj) {
    // observable: 可觀察到的
    return new Proxy(obj, {
      set(target, key, value, receiver) {
        // TODO: Reflect 的用途是甚麼？
        const result = Reflect.set(target, key, value, receiver);
        observers.forEach((observerCb) => {
          // 避免未設定 observerCb 時程式碼出錯
          if (observerCb) {
            observerCb();
          }
        });
        return result;
      },
    });
  }

  function observe(fn) {
    observers.add(fn);
  }

  function unObserve(fn) {
    observers.delete(fn);
  }

  function printSth(obj) {
    console.log('printSth', obj);
  }

  // Step: 創建一個測試物件
  const data = {
    name: 'Tom',
    age: 18,
  };

  // Step: 將測試物件轉換為可被觀察的物件
  const observableData = observable(data);

  // 修改數據，並觀察訂閱者函式是否被調用

  // 綁定方式 1
  // 因為這兩個 function 的記憶體指向並不相同，所以無法成功被 unObserve， observableData 還是會被印出來
  // observe(printSth.bind(null, observableData));
  // unObserve(printSth.bind(null, observableData));

  // 綁定方式 2
  // const bindCb = printSth.bind(null, observableData);
  // observe(bindCb);
  // observableData.name = 'Jerry'; // 訂閱者函式有被調用
  // unObserve(bindCb);
  // observableData.name = 'Jerry'; // 訂閱者函式沒有被調用，因為被解除綁定了
}
