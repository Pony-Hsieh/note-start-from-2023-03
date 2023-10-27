/** 確認被傳入 debounce, throttle 的 callback function 的參數真的可以被 args 接住 */

// args 為其餘參數，型別為 array
function print(...args) {
  console.log(args);
}

function consoleDebounceArgs(fn, wait = 300) {
  let timer = null;
  return function (...args) {
    console.log('args debounce', args);
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

function consoleThrottleArgs(fn, wait = 500) {
  let timer = null;
  return function (...args) {
    console.log('args throttle', args);
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  };
}

const debounceCbConsole = consoleDebounceArgs(print, 1000);
// debounceCbConsole(1, 2);
// debounceCbConsole(2, 3);
// debounceCbConsole(3, 4); // 只有這個(最後一個)被執行

const throttleCbConsole = consoleThrottleArgs(print, 1000);
// throttleCbConsole(6, 7); // 只有這個(第一個)被執行
// throttleCbConsole(7, 8);
// throttleCbConsole(8, 9);
