{

  // // asyncFunc
  // async function asyncFunc() {
  //   console.log("test");
  // }
  // asyncFunc();
  // console.log("asyncFunc", Object.getPrototypeOf(asyncFunc));
  console.log(async function () { }.constructor);
  console.log(async function () { }.__proto__);
}
