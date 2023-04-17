{
  testOop();
  function testOop() {
    function AlphaPhoneX(name, price, features) {
      this.name = name;
      this.price = price;
      this.features = features;
    }
    AlphaPhoneX.prototype.showPhoneInfo = function () {
      console.log(`The price of ${this.name} is ${this.price}, which has the newest features such as ${this.features.join(', ')}.`);
    }
    AlphaPhoneX.prototype.logThis = function () {
     console.log(this);
    }

    class BetaPhoneX {
      constructor(name, price, features) {
        this.name = name;
        this.price = price;
        this.features = features;
      }
      showPhoneInfo() {
        console.log(`The price of ${this.name} is ${this.price}, which has the newest features such as ${this.features.join(', ')}.`);
      }
      logThis() {
        console.log(this);
      }
    }

    const a = new AlphaPhoneX('alphaPhoneY', 18900, ['water proof', 'high screen resolution']);
    console.log('a', a);
    const b = new BetaPhoneX('alphaPhoneY', 18900, ['water proof', 'high screen resolution']);
    console.log('b', b);
    b.logThis();
    a.logThis();
  }
}
