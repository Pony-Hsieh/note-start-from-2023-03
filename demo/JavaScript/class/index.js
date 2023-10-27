class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.width * this.height;
  }
}

const square = new Polygon(10, 10);

console.log(square.area); //100
