/** ------ set 1 start ------ */

/** 簡單工廠模式 範例
 * 當我們的使用者角色不是 3 個而是 30 個或更多時，這個函式會成為一個龐大的超級函式，難以維護。
 * 所以簡單工廠模式只能作用於創建的物件數量較少、物件的創建邏輯不複雜時使用。
 */
{
  class User {
    constructor(opt) {
      this.name = opt.name;
      this.viewPage = opt.viewPage;
    }

    static getInstance(role) {
      switch (role) {
        case 'superAdmin':
          return new User({
            name: '超級管理員',
            viewPage: ['首頁', '通訊錄', '發現頁', '應用數據', '權限管理'],
          });
        case 'admin':
          return new User({
            name: '管理員',
            viewPage: ['首頁', '通訊錄', '發現頁', '應用數據'],
          });
        case 'user':
          return new User({
            name: '普通用戶',
            viewPage: ['首頁', '通訊錄', '發現頁'],
          });
        default:
          throw new Error('參數錯誤, 可選參數:superAdmin、admin、user');
      }
    }
  }

  // 調用
  let superAdmin = User.getInstance('superAdmin');
  let admin = User.getInstance('admin');
  let normalUser = User.getInstance('user');
  // console.log('superAdmin', superAdmin);
  // console.log('admin', admin);
  // console.log('normalUser', normalUser);
}

/** 工廠方法 範例 */
{
  class User {
    constructor(name = '', viewPage = []) {
      if (new.target === User) {
        throw new Error('抽象类不能实例化!');
      }
      this.name = name;
      this.viewPage = viewPage;
    }
  }

  class UserFactory extends User {
    constructor(name, viewPage) {
      super(name, viewPage);
    }
    create(role) {
      switch (role) {
        case 'superAdmin':
          return new UserFactory('超级管理员', [
            '首页',
            '通讯录',
            '发现页',
            '应用数据',
            '权限管理',
          ]);
        case 'admin':
          return new UserFactory('普通用户', ['首页', '通讯录', '发现页']);
        case 'user':
          return new UserFactory('普通用户', ['首页', '通讯录', '发现页']);
        default:
          throw new Error('参数错误, 可选参数:superAdmin、admin、user');
      }
    }
  }

  let userFactory = new UserFactory();
  let superAdmin = userFactory.create('superAdmin');
  let admin = userFactory.create('admin');
  let user = userFactory.create('user');
}

/** ------ set 1 end ------ */

/** ------ set 2 start ------ */
/** ------ set 2 end ------ */
/** 抽象工廠 範例 */
{
  // 1. 定義基礎 Class: 一台機車包含牌照及 CC 數
  class Motorcycle {
    constructor(license, volume) {
      this.license = license;
      this.volume = volume;
    }
  }

  // 2. 定義各品牌
  class SymMotor extends Motorcycle {
    constructor(license, volume) {
      super(license, volume);
      this.brand = 'sym';
    }
  }

  class KymcoMotor extends Motorcycle {
    constructor(license, volume) {
      super(license, volume);
      this.brand = 'Kymco';
    }
  }

  // 3. 定義品牌工廠
  class SymMotorFactory {
    createMotor(volume) {
      if (volume <= 50) {
        return new SymMotor('green', volume);
      }

      if (volume < 150) {
        return new SymMotor('white', volume);
      }
    }
  }

  class KymcoMotorFactory {
    createMotor(volume) {
      if (volume <= 50) {
        return new KymcoMotor('green', volume);
      }

      if (volume < 150) {
        return new KymcoMotor('white', volume);
      }
    }
  }

  // 建立工廠物件
  const symMotorFactory = new SymMotorFactory();
  const kymcoMotorFactory = new KymcoMotorFactory();

  // 建立抽象工廠 (代工廠)
  function motorFactory({ brand, volume }) {
    if (brand === 'sym') {
      return symMotorFactory.createMotor(volume);
    }
    if (brand === 'kymco') {
      return kymcoMotorFactory.createMotor(volume);
    }
  }

  // 讓代工廠進行製造
  const symMotorGreenLicense = motorFactory({
    brand: 'sym',
    volume: 50,
  });
  const kymcoMotorGreenLicense = motorFactory({
    brand: 'kymco',
    volume: 50,
  });
  const symMotorWhiteLicense = motorFactory({
    brand: 'sym',
    volume: 125,
  });

  console.log(symMotorGreenLicense);
  // console.log(symMotorWhiteLicense);
  // console.log(kymcoMotorGreenLicense);
}

/** 抽象工廠 範例 */
{
  /** 用罐裝飲料工廠做為範例
   *
   * 因為是貼牌，所以牌子不能寫在基礎的類別
   *
   * type: 種類 (可自行輸入)
   * capacity: 容量 (只有 s, m, l 可以選)
   *
   * input: {
   *  type: "飲料種類"
   * }
   */
  class Drink {
    constructor(type, capacity) {
      this.type = type;
      this.capacity = capacity;
    }
  }

  /** Step: 貼牌 */

  // 統一超商
  class PCSCDrink extends Drink {
    constructor(type, capacity) {
      super(type, capacity);
      this.brand = 'PCSC';
    }
  }

  // 全家超商
  /* class FMDrink extends Drink {
    constructor(license, volume) {
      super(license, volume);
      this.brand = 'FamilyMart';
    }
  } */

  /** Step: 定義品牌工廠 */
  class PCSCDrinkFactory {
    createDrink(size) {
      return new PCSCDrink('紅茶', convertSizeToCapacity(size));
    }
  }

  function convertSizeToCapacity(size) {
    switch (size) {
      case 's':
        return 300;
      case 'm':
        return 600;
      case 'l':
        return 900;
      default:
        throw new Error('請輸入符合 s, m, l');
    }
  }

  /** Step: 建立工廠物件 */
  const _PCSCDrinkFactory = new PCSCDrinkFactory();

  /** Step: 建立抽象工廠 (代工廠) */
  function drinkFactory({ brand, size }) {
    switch (brand) {
      case 'PCSC':
        console.log(1);
        return _PCSCDrinkFactory.createDrink(size);
      default:
        throw new Error(
          `請輸入正確的 brand 名稱，
          目前的 brand 名稱為： ${brand}`
        );
    }
  }

  /** Step: 讓代工廠進行製造 */
  const PCSCDrinkTea = drinkFactory({
    brand: 'PCSC',
    size: 's',
  });
  console.log('PCSCDrinkTeaLicense', PCSCDrinkTea);
  console.log(PCSCDrinkTea.brand);
}

{
  class Drink {}

  class Tea extends Drink {
    consume() {
      console.log('This is tea');
    }
  }
  class Coffee extends Drink {
    consume() {
      console.log('This is coffee');
    }
  }

  class DrinkFactory {
    prepare(amount) {}
  }
  class TeaFactory extends DrinkFactory {
    makeTea() {
      console.log('Tea Created');
      return new Tea();
    }
  }
  class CoffeeFactory extends DrinkFactory {
    makeCoffee() {
      console.log('Coffee Created');
      return new Coffee();
    }
  }

  const teaDrinkFactory = new TeaFactory();
  const tea = teaDrinkFactory.makeTea();
  tea.consume();

  const coffeeDrinkFactory = new CoffeeFactory();
  const coffee = coffeeDrinkFactory.makeCoffee();
  coffee.consume();
}

/** 簡單工廠模式第一種 */
{
  /** 足球類 */
  class Football {
    constructor() {
      this.play = function () {
        console.log('我在踢足球');
      };
    }
  }

  /** 籃球類 */
  class Basketball {
    constructor() {
      this.play = function () {
        console.log('我在打籃球');
      };
    }
  }

  /**
   * 球類工廠
   */
  function Ball(name) {
    switch (name) {
      case '足球':
        return new Football();
      case '籃球':
        return new Basketball();
      default:
        throw new Error('無此種類的工廠');
    }
  }
  // var football = Ball('足球');
  // football.play();
  // var basketball = Ball('籃球');
  // basketball.play();
  // const aaa = Ball('asdasd');
}

/** 簡單工廠模式第二種 */
{
  /** 球類工廠 */
  function Ball(name) {
    // 創建一個物件，對物件擴展擴展屬性還有方法
    const o = {
      name: name,
      //默認的方法 如果在加上一個羽毛球類,這時候就不需要補充play方法
      play: function () {
        console.log('我在打' + name);
      },
    };
    // var o = new Object();

    switch (name) {
      case '足球':
        o.play = function () {
          console.log('我在踢' + name);
        };
        break;
      case '籃球':
        o.play = function () {
          console.log('我在打' + name);
        };
        break;

      default:
        break;
    }

    return o;
  }

  // const football = Ball('足球');
  // football.play();
  // const basketball = Ball('籃球');
  // basketball.play();
}

/** 工廠方法模式 */
{
  // 安全模式創建工廠類
  class Ball {
    constructor(type, name) {
      const a = Object.getPrototypeOf(Ball);
      console.log(a);
      // console.log('type', type);
      // console.log('this', this);

      console.log('this.play', this.play);
      this.play = this.basketball(name);
      // if (this instanceof Ball) {
      //   var s = new this[type](name);
      //   return s;
      // } else {
      //   return new Ball(type, name);
      // }
      // return this[type](name);
    }
    play() {
      console.log('我在踢足球');
    }
    basketball(name) {
      console.log('我在打' + name);
    }
    football(name) {
      console.log('我在踢' + name);
    }
    badminton(name) {
      console.log('我在打' + name);
    }
  }

  /* class Ball(type, name) {
    constructor(){

    }
    // 安全模式 Ball也可以運行處new Ball的效果

    if (this instanceof Ball) {
      var s = new this[type](name);
      return s;
    } else {
      return new Ball(type, name);
    }
  } */

  // const football = new Ball('footBall', '足球');
  // console.log('football', football);
  // football.play();
  // const basketball = new Ball('basketBall', '籃球');
  // basketball.play();
  // const badmintonball = new Ball('badmintonBall', '羽毛球');
  // badmintonball.play();

  // # 工廠方法模式end
}
