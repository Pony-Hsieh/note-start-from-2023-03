/**  */
{
  /**
   * The Concrete Builder classes follow the Builder interface and provide
   * specific implementations of the building steps. Your program may have several
   * variations of Builders, implemented differently.
   */
  class ConcreteBuilder1 {
    /**
     * A fresh builder instance should contain a blank product object, which is
     * used in further assembly.
     */
    constructor() {
      this.reset();
    }

    reset() {
      this.product = new Product1();
    }

    /**
     * All production steps work with the same product instance.
     */
    producePartA() {
      this.product.parts.push('PartA1');
    }
    producePartB() {
      this.product.parts.push('PartB1');
    }
    producePartC() {
      this.product.parts.push('PartC1');
    }

    /**
     * Concrete Builders are supposed to provide their own methods for
     * retrieving results. That's because various types of builders may create
     * entirely different products that don't follow the same interface.
     * Therefore, such methods cannot be declared in the base Builder interface
     * (at least in a statically typed programming language).
     *
     * Usually, after returning the end result to the client, a builder instance
     * is expected to be ready to start producing another product. That's why
     * it's a usual practice to call the reset method at the end of the
     * `getProduct` method body. However, this behavior is not mandatory, and
     * you can make your builders wait for an explicit reset call from the
     * client code before disposing of the previous result.
     */
    getProduct() {
      const result = this.product;
      this.reset();
      return result;
    }
  }

  /**
   * It makes sense to use the Builder pattern only when your products are quite
   * complex and require extensive configuration.
   *
   * Unlike in other creational patterns, different concrete builders can produce
   * unrelated products. In other words, results of various builders may not
   * always follow the same interface.
   */
  class Product1 {
    parts = [];
    listParts() {
      console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
  }

  /**
   * The Director is only responsible for executing the building steps in a
   * particular sequence. It is helpful when producing products according to a
   * specific order or configuration. Strictly speaking, the Director class is
   * optional, since the client can control builders directly.
   */
  class Director {
    // private builder: Builder;
    builder;

    /**
     * The Director works with any builder instance that the client code passes
     * to it. This way, the client code may alter the final type of the newly
     * assembled product.
     */
    setBuilder(builder) {
      this.builder = builder;
    }

    /**
     * The Director can construct several product variations using the same
     * building steps.
     */
    buildMinimalViableProduct() {
      this.builder.producePartA();
    }

    buildFullFeaturedProduct() {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
    }
  }

  /**
   * The client code creates a builder object, passes it to the director and then
   * initiates the construction process. The end result is retrieved from the
   * builder object.
   */
  function clientCode(director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
  }

  const director = new Director();
  clientCode(director);
}

/**  */
{
  class Person {
    constructor() {
      this.streetAddress = this.postcode = this.city = '';
      this.companyName = this.position = '';
      this.annualIncome = 0;
    }

    toString() {
      return `个人生活在 ${this.streetAddress}，${this.city}，${this.postcode} ，工作在 ${this.companyName} 作为一名 ${this.position} 收入 ${this.annualIncome}`;
    }
  }

  class PersonBuilder {
    constructor(person = new Person()) {
      this.person = person;
    }

    get lives() {
      return new PersonAddressBuilder(this.person);
    }

    get works() {
      return new PersonJobBuilder(this.person);
    }

    build() {
      return this.person;
    }
  }

  class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
      super(person);
    }

    at(companyName) {
      this.person.companyName = companyName;
      return this;
    }

    asA(position) {
      this.person.position = position;
      return this;
    }

    earning(annualIncome) {
      this.person.annualIncome = annualIncome;
      return this;
    }
  }

  class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
      super(person);
    }

    at(streetAddress) {
      this.person.streetAddress = streetAddress;
      return this;
    }

    withPostcode(postcode) {
      this.person.postcode = postcode;
      return this;
    }

    in(city) {
      this.person.city = city;
      return this;
    }
  }

  const personBuilder = new PersonBuilder();
  const person = personBuilder.lives
    .at('高新南九道')
    .in('深圳')
    .withPostcode('518029')
    .works.at('字节跳动')
    .asA('工程师')
    .earning(10000)
    .build();

  // console.log(person.toString());
}

/**  */

{
  class Raptor {
    constructor(build) {
      this.specimenId = build.specimenId;
      this.speed = build.speed;
      this.plumage = build.plumage;
    }

    static get Builder() {
      class Builder {
        constructor(specimenId) {
          this.specimenId = specimenId;
        }
        withSpeed(speed) {
          this.speed = speed;
          return this;
        }
        withPlumage(plumage) {
          this.plumage = plumage;
          return this;
        }
        build() {
          return new Raptor(this);
        }
      }
      return Builder;
    }
  }
  // We can call build unto our newly constructed builder object ...
  let raptorBuilder1 = new Raptor.Builder('244E-C');
  let raptor1 = raptorBuilder1.build();
  // ... or pass in the builder object as an argument to Raptor.
  // Your call.
  let raptorBuilder2 = new Raptor.Builder('3998A-D');
  let raptor2 = new Raptor(raptorBuilder2);
}
