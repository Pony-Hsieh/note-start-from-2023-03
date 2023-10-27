// 记录时间
let last = Date.now();

//模拟一段ajax请求
function ajax(content) {
  const d = Date.now();
  const span = d - last;
  console.log(`${content} 间隔 ${span}ms`);
  last = d;
}

const noActionInput = document.getElementById('noAction');

noActionInput.addEventListener('keyup', function (e) {
  ajax(e.target.value);
});

/**
 * 一般利用闭包存储和私有化定时器 `timer`
 * 在 `delay` 时间内再次调用则清除未执行的定时器
 * 重新定时器
 * @param fn
 * @param delay
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer = null;
  return function () {
    // 中间态一律清除掉
    timer && clearTimeout(timer);
    // 只需要最终的状态，执行
    timer = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

const debounceInput = document.getElementById('debounce');

let debounceAjax = debounce(ajax, 100);

debounceInput.addEventListener('keyup', function (e) {
  debounceAjax(e.target.value);
});
