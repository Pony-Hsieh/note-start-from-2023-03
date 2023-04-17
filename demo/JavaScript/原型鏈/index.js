{
  testPrototype();
  function testPrototype() {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    Person.prototype.log = function () {
      console.log(
        `${this.name}, age:${this.age}`
      );
    }

    const nick = new Person('nick', 18);
    const peter = new Person('peter', 20);
    // nick.log(); // nick, age:18
    // peter.log(); // peter, age:20
    // console.log(nick.log === peter.log) // true

    // __proto__ 方法逐漸被棄用，盡量不要使用這個方法
    console.log(
      // true
      Person.prototype.__proto__ === Object.getPrototypeOf(Person.prototype)
    );

    console.log(
      // true
      Object.getPrototypeOf(nick) === Object.getPrototypeOf(peter)
    );

    console.log(
      // false
      Object.getPrototypeOf(nick) === Object.getPrototypeOf(Person)
    );

    console.log(
      // true
      Object.getPrototypeOf(Person) === Object.getPrototypeOf(Object)
    );

    console.log(
      // true
      Object.getPrototypeOf(Person) === Object.getPrototypeOf(Function)
    );

    console.log(
      // null
      Object.getPrototypeOf(Object.prototype)
    );


    console.log(
      // false
      nick.hasOwnProperty('log')
    );

    console.log(
      // true
      Object.getPrototypeOf(nick).hasOwnProperty('log')
    );

    console.log(
      nick
    );
    console.log(
      nick.prototype
    );
    console.log(
      Object.getPrototypeOf(nick)
    );


  }
}

