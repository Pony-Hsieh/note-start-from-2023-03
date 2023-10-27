const input = document.querySelector('input');
const result = document.querySelector('.result');

const immediatelyText = document.querySelector('#immediately');
const debounceText = document.querySelector('#debounce');
const throttleText = document.querySelector('#throttle');

/** 手寫 debounce */
function debounce(fn, wait) {
  let timer = null;

  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

/** 手寫 throttle */
function throttle(cb, wait) {
  let timer = null;
  let lastTime = null;

  return function () {
    const now = Date.now();
    const interval = now - lastTime; // 距離上次執行 cb 的時間間隔

    // 為了響應用戶最後一次操作
    // 不是第一次 且 在等待時間內 → 清掉計時器，重新計時
    // 除了用 timer 紀錄以外，也需要紀錄最後一次觸發 cb 的時間
    if (lastTime && interval < wait) {
      // 這邊 timer 的用途是為了避免超過 wait 時間之後，頻繁的觸發 cb(如果會被頻繁的觸發，這樣就不符合 throttle 的目的了)
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        cb.apply(this, arguments);
      }, wait);
      return;
    }

    // 首次 或 到響應時間了
    lastTime = now;
    cb.apply(this, arguments);
  };
}

function updateTextImmediately(text) {
  immediatelyText.textContent = text;
}

const updateTextDebounce = debounce((text) => {
  debounceText.textContent = text;
}, 1000);

const updateTextThrottle = throttle((text) => {
  throttleText.textContent = text;
}, 2000);

input.addEventListener('input', (e) => {
  updateTextImmediately(e.target.value);
  updateTextDebounce(e.target.value);
  updateTextThrottle(e.target.value);
});

function throttle2(cb, wait) {
  let timer = null;
  let lastTime = null;

  return function () {
    const now = Date.now();
    const interval = now - lastTime; // 距離上次執行 cb 的時間間隔

    // 為了響應用戶最後一次操作
    // 不是第一次 且 在等待時間內 → 清掉計時器，重新計時
    // 除了用 timer 紀錄以外，也需要紀錄最後一次觸發 cb 的時間
    if (lastTime && interval < wait) {
      // 這邊 timer 的用途是為了避免超過 wait 時間之後，頻繁的觸發 cb(如果會被頻繁的觸發，這樣就不符合 throttle 的目的了)
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        cb.apply(this, arguments);
      }, wait - interval);
      return;
    }

    // 首次 或 到響應時間了
    lastTime = now;
    cb.apply(this, arguments);
    // 當前已執行，清除掉計時器，不清除會有多餘的中間執行
    clearTimeout(timer);
  };
}
