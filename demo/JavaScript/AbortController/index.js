/** AbortController 主要可以做兩件事情
 1. 中斷 fetch 資料
 2. 移除事件監聽
 */

/** 中斷 fetch 資料 */
{
  // fn1();
  async function fn1() {
    const res = await axios.get('https://randomuser.me/api/');
    console.log(res);
  }

  // downloadVideo();
  async function downloadVideo() {
    const res = await axios.post('https://www.videvo.net/download', {
      download_option: 'video',
      id: 1109,
    });

    console.log(res);
  }

  // Step: 下載一個很大的檔案(1GB)
}

/** 移除事件監聽 */
{
}

/** onabort */
{
  // 方法 1
  {
    const ac = new AbortController();
    const signal = ac.signal;

    signal.addEventListener('abort', () => {
      console.log('Request aborted');
    });
  }
  // 方法 2
  {
    const ac = new AbortController();
    const { signal } = ac;

    signal.onabort = () => {
      console.log('Request aborted');
    };
  }
}

/** 使用 axios 搭配 AbortController */
{
  const ac = new AbortController();
  const { signal } = ac;

  const http = axios.create({
    headers: { 'max-age': 0 },
  });

  async function fetchUser() {
    console.log('fetchUser1');

    try {
      const res = await http.get('https://api.github.com/users/nas5w', {
        signal,
        headers: { 'Cache-Control': 'no-cache' },
      });

      // const res = await axios.get('https://api.github.com/users/nas5w', {
      //   signal,
      //   headers: { 'Cache-Control': 'no-cache' },
      //   // headers: {
      //   //   'Cache-Control': 'no-cache',
      //   //   // Pragma: 'no-cache',
      //   //   // Expires: '0',
      //   // },
      // });
      // const user = await res.json();
      console.log('res', res);
    } catch (err) {
      console.log(err);
    }
  }

  async function cancelFetchUser() {
    console.log('cancelFetchUser');
    // abort 內帶的值，會被傳到 ac.signal.reason 中，可以帶上你想帶的值，物件、字串等等的都可以
    ac.abort({
      type: 'USER_ABORT_ACTION',
      msg: '用户终止了操作',
    });
    // ac.abort('Lorem, ipsum dolor.');
  }

  document
    .querySelector('#use-axios-fetch-data-button')
    .addEventListener('click', fetchUser);

  document
    .querySelector('#use-axios-cancel-fetch-data-button')
    .addEventListener('click', cancelFetchUser);
}

/** demo-1 */
{
  const ac = new AbortController();
  const { signal } = ac;

  ac.signal.onabort = () => {
    console.log('onabort', ac.signal);
  };

  async function fetchUser(userId) {
    console.log('fetchUser1');
    if (!userId) {
      throw new Error('請傳入 userId');
    }
    try {
      const res = await fetch(`https://api.github.com/users/${userId}`, {
        signal,
        cache: 'no-cache', // 避免從 cache 取值，影響測試效果
      });
      const user = await res.json();
      console.log('user data', user);
    } catch (err) {
      console.log(err);
    }
  }

  async function cancelFetchUser() {
    console.log('cancelFetchUser');
    // abort 內帶的值，會被傳到 ac.signal.reason 中，可以帶上你想帶的值，物件、字串等等的都可以
    ac.abort({
      type: 'USER_ABORT_ACTION',
      msg: '用户终止了操作',
    });
    // ac.abort('Lorem, ipsum dolor.');
  }

  const cancelFetchBtn = document.querySelector('#cancelFetchBtn');
  const fetchBtn1 = document.querySelector('#fetchBtn1');
  const fetchBtn2 = document.querySelector('#fetchBtn2');

  fetchBtn1.addEventListener('click', fetchUser.bind(null, 'octocat'));
  fetchBtn2.addEventListener('click', fetchUser.bind(null, 'nas5w'));
  cancelFetchBtn.addEventListener('click', cancelFetchUser);
}

{
  // fn1();
  function fn1() {
    const firstController = new AbortController();
    const firstSignal = firstController.signal;

    // First fetch call
    fetch('https://api.github.com/users/nas5w', { signal: firstSignal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const secondController = new AbortController();
    const secondSignal = secondController.signal;

    // Second fetch call
    fetch('https://api.github.com/users/octocat', { signal: secondSignal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Abort the first request
    firstController.abort();

    // Abort the second request
    secondController.abort();
  }
}

// 有沒有辦法每次送 request 的時候都自帶一個 abort controller instance?
{
  // 把 signal 作為參數傳入 fetchUser1
  // const ac = new AbortController();
  // const { signal } = ac;
  // async function fetchUser1(signal) {
  //   try {
  //     const res = await fetch('https://api.github.com/users/nas5w', {
  //       signal,
  //       cache: 'no-cache', // 避免從 cache 取值，影響測試效果
  //     });
  //     const user1 = await res.json();
  //     console.log('user1', user1);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // async function cancelFetchUser() {
  //   console.log('cancelFetchUser');
  //   ac.abort();
  // }
}

{
  /* 利用字元重複出現的次數，寫一個方法，實現基本的字串壓縮功能。例如，字串aabcccccaaa會變成a5b1c5 */
  convert('aabcccccaaa');
  function convert(str) {
    const splitStr = str.split('');
    const map = new Map();
    splitStr.forEach((el) => {
      if (map.has(el)) {
        const prev = map.get(el);
        map.set(el, prev + 1);
      } else {
        map.set(el, 1);
      }
    });
    let res = '';
    map.forEach((value, key) => {
      res += `${key}${value}`;
    });
    console.log(res);
    return res;
  }
}
