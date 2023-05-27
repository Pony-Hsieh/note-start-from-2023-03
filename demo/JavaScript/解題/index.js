{
  // 請攤平一個 json，並回傳一個陣列
  const obj = {
    one: 1,
    two: {
      three: 3,
    },
    four: {
      five: 5,
      six: {
        seven: 7,
      },
      eight: 8,
    },
    nine: 9,
  };

  const flattenJSON = (obj = {}, res = [], extraKey = '') => {
    for (key in obj) {
      if (typeof obj[key] !== 'object') {
        res.push(obj[key]);
        // res[extraKey + key] = obj[key];
      } else {
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
      }
    }
    return res;
  };
  console.log(flattenJSON(obj));
}
