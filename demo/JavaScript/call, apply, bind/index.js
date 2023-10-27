function printSum(a, b, c) {
  /** 為什麼這裡的 arguments 一定會有一個 pointerEvent？
   * https://stackoverflow.com/questions/71202391/how-does-a-pointer-event-passed-as-an-argument-in-debounce
   * 簡單講，因為是透過 addEventListener 所以會自動帶上
   */
  const args = [...arguments];
  const pointerEvent = args[args.length - 1];
  console.log(pointerEvent);
  console.log(a + b + c);
}

const debounceCb = _.debounce(printSum.bind(null, 1, 2, 3), 500);

// const a = printSum.bind(null, 1, 2, 3, 4, 5);
// a();

// jsTestBtn
const btn = document.querySelector('#jsTestBtn');
btn.addEventListener('click', debounceCb);

// btn.addEventListener('click', function (event, a = 1, b = 2) {
//   console.log(a + b);
// });
