# hook

## 基礎理解
- 甚麼是 hook？
- 如何使用 hook？
- 使用 hook 時有甚麼限制？
- `setCount(count + 1)` 和 `setCount(prev => prev + 1)` 的差異為何？


## 基礎的 Hook
- Hook 本質上就是一類特殊的函數
  - 如何確認這個說法為真？
- `useState`
  - 用途
    - 可以在 function component 保留 local state
  - 需要傳入的參數
    - state 的初始值
      - 如果初始值是根據複雜計算得出來的，可以採用惰性初始值。
        (有沒有甚麼開銷很大的運算的範例？透過遞迴計算費式數列？)  
        當 initialState 以函數形式傳入時，它只會在函數組件初始化的時候執行一次，函數 re-render 時不會再被執行。
      - 知道是知道了，那我要如何測試這個知識點？
  - 回傳值
    - 因為 useState 是一個 function，或者說，所有的 hook 都是 function，因此都會有回傳值
    - 它回傳了一個陣列
      - 陣列[0]: 目前的 state
      - 陣列[1]: 一個可以更新 state 的 function
  - 如何使用
    ```javascript
    // 寫法 1 (陣列解構賦值)
    const [fruit, setFruit] = useState('banana');

    // 寫法 2 (與寫法 1 等價)
    const fruitStateVariable = useState('banana'); // 回傳一對值
    const fruit = fruitStateVariable[0]; // 第一個值
    const setFruit = fruitStateVariable[1]; // 第二個值
    ```
- `useImmer`
  - 需要引入 immer.js




- `useEffect`
  - 當 React 對比 useEffect、useCallback 的依賴陣列的值，或者傳入子組件的 props 值時，使用的是 `Object.is()`

## 額外的 Hook
- `useCallback`

- `useMemo`

- `useId`



## 其他



## 參考文章
- [使用 State Hook - React 官方繁體中文文件](https://zh-hant.reactjs.org/docs/hooks-state.html)
- [帶你快速了解React Hooks](https://juejin.cn/post/6877012518183632910)
- [[React Hook 筆記] 從最基本的useState, useEffect 開始](https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-%E5%BE%9E%E6%9C%80%E5%9F%BA%E6%9C%AC%E7%9A%84-hook-%E9%96%8B%E5%A7%8B-usestate-useeffect-fee6582d8725)
- [useState 惰性初始化函數和更新函數](https://juejin.cn/post/7022908934235095054)
- [每天都在用，也沒整明白的 React Hook](https://www.51cto.com/article/746389.html)