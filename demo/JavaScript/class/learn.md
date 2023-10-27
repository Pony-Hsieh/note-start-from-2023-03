## 知識點
- 可以暫時先不用把 class 想得這麼的複雜，把他當成是某某東西的 **藍圖** 或是 **設計圖**  
  假設今天我們畫了一張車子的設計圖，再根據這張設計圖製造出相同規格的車子，一方面有設計圖可以提升車子的生產速度，也因為有事先有定義統一的規格，每台車子的品質也更容易的管理跟維護
- JavaScript 的 class 是透過原型繼承來模擬 class 的行為
  - es6
    ```js
    class Car {
      constructor(brand, model) {
        this.brand = brand;
        this.model = model;
      }

      drive() {
        console.log(`Driving a ${this.brand} ${this.model}`);
      }
    }

    const myCar = new Car('Tesla', 'Model 3');
    myCar.drive(); // Driving a Tesla Model 3
    ```
  - es5
    ```js
    function Car(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    Car.prototype.drive = function () {
      console.log(`Driving a ${this.brand} ${this.model}`);
    };

    const myCar = new Car("Tesla", "Model 3");
    myCar.drive(); // Driving a Tesla Model 3
    ```


## Static method (靜態方法)
- Static Method 可以透過 Constructor 呼叫，但創建出來的 Instance 無法使用它：
  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }
    static sayHello(name) {
      return `Hi! ${name}!`;
    }
  }

  const p1 = new Person('小白');

  console.log(Person.sayHello('Luck')); // Hi! Luck!
  console.log(p1.sayHello()); // Uncaught TypeError: p1.sayHello is not a function
  ```
- 關鍵字 `static` 定義了一個 class 的靜態方法，靜態方法不需要實例化它所屬 class 就可以被呼叫，也無法被已實例化的 class 物件呼叫。  
  靜態方法經常被用來建立給應用程式使用的工具函數。
- 參考文章
  - [JavaScript | ES6 中最容易誤會的語法糖 Class - 基本用法](https://medium.com/enjoy-life-enjoy-coding/javascript-es6-%E4%B8%AD%E6%9C%80%E5%AE%B9%E6%98%93%E8%AA%A4%E6%9C%83%E7%9A%84%E8%AA%9E%E6%B3%95%E7%B3%96-class-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-23e4a4a5e8ed)
  - [static - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes/static)
  - [classes - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes#%E9%9D%9C%E6%85%8B%E6%96%B9%E6%B3%95static_methods)


## Getter & Setter
- 不建議使用 getter 和 setter，因為它可能會發生無預期的副作用，並且難以測試與維護；如果需要，使用原型方法（prototype method）自己建立，例如 getVal() 和 setVal('Hello')。
- 參考文章
  - [为什么在JavaScript中使用getter和setter是一个坏主意](https://www.51cto.com/article/544692.html)
  - [[JS] JavaScript 類別（Class）](https://pjchender.dev/javascript/js-class/)

## 私有類別
- 私有成員的私有是對誰私有？ 對 class 私有  
  這裡的私有指的是存取控制，即，class 內部能訪問，但 class 外部不能訪問

## 參考文章
- [class - MDN 中文](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)
- [ES6 中的 class 是什麼？和函式構造函式差別是什麼？](https://www.explainthis.io/zh-hant/swe/what-is-class)
- [你可能不知道的JS物件私有屬性](https://www.lagagain.com/post/%E9%80%99%E4%BA%9B%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84web%E6%8A%80%E8%A1%93%E7%B4%B0%E7%AF%8022/)