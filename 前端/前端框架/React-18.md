
# React Hooks
- React Hooks 是什麼？
- Hook 解決了什麼問題?
- Hook 的規則
- 只有以下兩種情境可以使用
  1. 在 React 的 functional component 中使用
  2. 在自定義的 Hook (custom hook) 中使用其他 Hook
- 只能在最頂層使用 Hook
 - 不能在 for 循環、if…else 或巢狀中(如： map )中使用 Hook，我們需要確保永遠都在 React 函式的最頂層以及任何 return 之前使用
- 只能在 React 函式中使用 Hook
- Only component, initializer, and updater functions need to be pure. Event handlers don’t need to be pure, so React will never call your event handlers twice.

## useState
- 回傳值： 一個包含兩個值的 array
  1. The current state. During the first render, it will match the initialState you have passed.
  2. The set function that lets you update the state to a different value and **trigger a re-render.**
  - 通常會用解構賦值的方式把值賦予給 state, useState
    ```js
    const [state, setState] = useState(0);
    ```
  - 如果初始 state 需要複雜的邏輯運算，你可以傳入一個 init function 給 useState，init function 只會在初始 render 時被調用
    - TODO: 找一個 expensive computation
    - If you pass a function as initialState, it will be treated as an initializer function. **It should be pure, should take no arguments**, and should return a value of any type. **React will call your initializer function when initializing the component, and store its return value as the initial state.**
- 用於定義和保存元件中狀態 (state)
- In Strict Mode, **React will call your initializer function twice** in order to help you find accidental impurities.
- 想要避免昂貴的開銷，有這兩種方式可以達成
  ```js
  // 1. 
  const [todos, setTodos] = useState(() => createTodos());

  // 2. 
  const [todos, setTodos] = useState(createTodos);
  ```


## useEffect
- 回傳值： undefined



Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component. See the difference between passing an array of dependencies, an empty array, and no dependencies at all.

- 用法：
  ```js
  useEffect(setup, dependencies?)
  ```
  1. a setup function
     - When your component is added to the DOM, React will run your setup function.
     - optionally return a cleanup function  
       - After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function.
  2. a list of dependencies including every **reactive** value from your component used inside of those functions.
     - 只要陣列中的元素沒有改變時，React 就會跳過該 effect，但只要陣列中有任何一個值不同，就不會跳過 effect
       - React 會使用 `Object.is` 比較每個 dependency 的新舊值是否相等
       - ![](https://i.imgur.com/pCyqkLc.png)
     - Reactive values include props, state, and all the variables and functions declared directly inside your component body.
     - Best Practice: 最好的方式就是把所有在 useEffect 內有使用到的 state 或 props 都定義在相依陣列中
     - If you omit this argument, your Effect will re-run after every re-render of the component.
- 
- useEffect is a React Hook that lets you synchronize a component with an external system.
  - Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page.  
    **These systems aren’t controlled by React, so they are called external.**
- Call useEffect at the top level of your component to declare an Effect
- 當想要執行會產生 side effect 的行為時，可以選用 useEffect
  - 例如 data fetching, timers, subscriptions
- 怎樣算是會產生 side effect 的行為？
- 在學習 useEffect 時，我們應該忘記過去對於 React 生命週期所學到的，以全新的體驗和思考方式來認識 useEffect。
  - 如果你熟悉 React class 的生命週期方法，你可以把 useEffect 視為 componentDidMount, componentDidUpdate 和 componentWillUnmount 的組合
- If you’re not trying to synchronize with some external system, you probably don’t need an Effect.
- When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup.
  - 這是為什麼在 strict mode 下，在 useEffect 內的 console 會看到 2 次的原因  
    印象中是說可以讓你確認這兩次的執行順序是否完全一致(理想的狀況是要一致的)
- useEffect 的執行時機？
- Calling the set function does not change the current state in the already executing code:
  ```js
  function handleClick() {
    setName('Robin');
    console.log(name); // Still "Taylor"!
  }
  ```
  It only affects what useState will return starting from the next render.
- In React, state is considered read-only, so you should replace it rather than mutate your existing objects. For example, if you have a form object in state, don’t mutate it:
  ```js
  // 🚩 Don't mutate an object in state like this:
  form.firstName = 'Taylor';
  ```
  Instead, replace the whole object by creating a new one:
  ```js
  // ✅ Replace state with a new object
  setForm({
    ...form,
    firstName: 'Taylor'
  });
  ```
- Resetting state with a key 



## useLayoutEffect
- 基本上和 useEffect 極為相似
- The code inside useLayoutEffect and all state updates scheduled from it block the browser from repainting the screen. When used excessively, this makes your app slow. When possible, prefer useEffect.


- 常用的 hook
  - `useEffect`：
  - 
  - 我們需要傳送兩個參數在 useEffect 中，第一是一個 setup function，代表我們想執行的副作用程式碼，如果最後我們要清除這個副作用，需要在最後回傳一個 cleanup function; 第二個參數會是一個陣列，陣列中的元素會是相依於這個副作用程式碼會用到的變數。
  - `useLayoutEffect`：與 useEffect 是類似的，唯一不同點在於執行時機不同
    - useLayoutEffect: 在 DOM 更新之後執行
    - useEffect: 在 render 渲染結束後執行
    - useLayoutEffect 通常會拿來處理當使用 useEffect 但畫面會出現閃爍的情境，詳細原因下面會提到。
    - useLayoutEffect can hurt performance. Prefer useEffect when possible.
    - 通常會建議先使用 useEffect，如果不能解決問題，才會選擇使用 useLayoutEffect。
  - `useReducer`：也是一種管理 state 的 hook，可作為 useState 替代方案。  
    接收兩個參數，第一個是 reducer，第二個為初始值。會返回兩個值，現在 state 的值和 dispatch   方法。當狀態管理邏輯變得更複雜時，通常會建議使用 useReducer 而非 useState。
  - `useCallback`：在重新渲染之間，用來緩存函式的方法。會回傳一個被 memoized 的 callback 函式，只有在依賴發生變化時，才會更新。此方法通常用在性能優化時。
  - `useMemo`：在重新渲染之間，用來緩存計算結果的方法。傳入一個創建函式和依賴項目，創建函式會需要返回一個值，只有在依賴發生變化時，才會更新值。此方法通常用在性能優化時。
  - `useRef`：用來儲存記錄不需要渲染的值。會回傳一個可變的 ref 物件，.current 屬性會被初始化為傳入的參數值(initialValue)



- 參考文章
  - [React Hooks 是什麼?](https://www.explainthis.io/zh-hant/swe/what-is-react-hook)
  - [React Hooks 總整理筆記](https://gcdeng.com/blog/react-hooks)






# React batch update







# 其他
- [为什么react组件首字母要大写](https://juejin.cn/post/6844903925234008072)
- [為什麼只能在最頂端層呼叫 Hook？從 useState 實作原理來回答](https://www.explainthis.io/zh-hant/swe/why-call-react-hook-top-level)
- [《自顶向下学习React》学习笔记.md](https://github.com/puxiao/notes/blob/master/%E3%80%8A%E8%87%AA%E9%A1%B6%E5%90%91%E4%B8%8B%E5%AD%A6%E4%B9%A0React%E3%80%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.md)


This code modifies the object assigned to position from the previous render. But without using the state setting function, React has no idea that object has changed. So React does not do anything in response.

While mutating state can work in some cases, we don’t recommend it.

To actually trigger a re-render in this case, create a new object and pass it to the state setting function

Mutation is only a problem when you change existing objects that are already in state. 
Mutating an object you’ve just created is okay because no other code references it yet. 

You can also use the [ and ] braces inside your object definition to specify a property with dynamic name. 
↑ 這個好像還不會，之後再回來查這是甚麼

When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.

React assumes that every component you write is a pure function. 
 This means that React components you write must always return the same JSX given the same inputs:

In React, there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.