## 版本 1.11.7
- [npm 連結 - Day.js](https://www.npmjs.com/package/dayjs)

- 判斷日期是否在指定區間
    ```javascript
    if (dayjs(now).isBetween("2023-03-01", "2023-03-05", "day", "[]")) {
      return 1;
    }
    ```