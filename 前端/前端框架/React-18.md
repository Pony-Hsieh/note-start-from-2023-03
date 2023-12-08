
# API
- createContext




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
- useState is a React Hook that lets you add a state variable to your component.
- 用法：
  ```js
  const [state, setState] = useState(initialState);
  ```
  - 參數
    1. initialState:  
      The value you want the state to be initially.  
      It can be a value of any type, but there is a special behavior for functions.  
      This argument is ignored after the initial render.
       - 如果初始 state 需要複雜的邏輯運算，你可以傳入一個 init function 給 useState，init function 只會在初始 render 時被調用
       - TODO: 找一個 expensive computation
       - If you pass a function as initialState, it will be treated as an initializer function. **It should be pure, should take no arguments**, and should return a value of any type. **React will call your initializer function when initializing the component, and store its return value as the initial state.**
       - 想要避免昂貴的開銷，有這兩種方式可以達成
          ```js
          // 1. 
          const [todos, setTodos] = useState(() => createTodos());

          // 2. 
          const [todos, setTodos] = useState(createTodos);
          ```
  - 回傳值： an array with exactly two values:
    1. The current state.  
      During the first render, it will match the initialState you have passed.
    2. The set function.  
      Let you update the state to a different value and **trigger a re-render**.
- In Strict Mode, **React will call your initializer function twice** in order to help you find accidental impurities.
- 適用時機：
  - 在單一元件中進行狀態管理
  - useState 常用在單一元件中進行狀態管理，但遇到狀態全域管理的時候，useState 顯然無法滿足我們的需求，而這個時候大多數的做法是利用第三方的狀態管理工具，像 redux, Recoil 或 Mobx

## useEffect
- useEffect is a React Hook that lets you synchronize a component with an external system.
- 用法：
  ```js
  useEffect(setup, dependencies?)
  ```
  - 參數
    1. setup:  
      The function with your Effect’s logic.  
      Your setup function may also optionally return a cleanup function.
    2. [optional] dependencies  
      The list of all reactive values referenced inside of the setup code.  
      If you omit this argument, your Effect will re-run after every re-render of the component.
  - 回傳值： undefined
- 只要 dependencies 一動，setup function 就會重新執行；可以再細分為三階段：
  (useEffect 的執行時間點)
  1. Added to the DOM:  
    => React will run your setup function
  2. After every re-render with changed dependencies:  
    => 如果 setup function 有回傳一個 cleanup function 的話，  
    React 會在每次 re-render 時先搭配 old values 執行這個 cleanup function，
    然後再搭配 new values 執行 setup function
  3. After your component is removed from the DOM:  
    => React will run your cleanup function.
- useEffect is a React Hook that lets you synchronize a component with an external system.
  - Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page.   
    **These systems aren’t controlled by React, so they are called external.**
- 適用時機：
  - Call useEffect at the top level of your component to declare an Effect
  - If you’re not trying to synchronize with some external system, you probably don’t need an Effect.
  - 當想要執行會產生 side effect 的行為時，可以選用 useEffect
    - 例如 data fetching, timers, subscriptions
- 在學習 useEffect 時，我們應該忘記過去對於 React 生命週期所學到的，以全新的體驗和思考方式來認識 useEffect。
  - 如果你熟悉 React class 的生命週期方法，你可以把 useEffect 視為 componentDidMount, componentDidUpdate 和 componentWillUnmount 的組合
- When Strict Mode is on, React will run one extra development-only setup cleanup cycle before the first real setup.
  - 這是為什麼在 strict mode 下，在 useEffect 內的 console 會看到 2 次的原因  
    印象中是說可以讓你確認這兩次的執行順序是否完全一致(理想的狀況是要一致的)
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
- 如果在 useEffect 的 setup function 中有寫監聽事件，要記得在 clean up function 中移除，避免造成無謂的效能損耗
- Resetting state with a key


## useLayoutEffect
- 基本上和 useEffect 極為相似
- useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
- 用法
  ```js
  useLayoutEffect(setup, dependencies?)
  ```
  - 參數
    1. setup  
    The function with your Effect’s logic.
    Your setup function may also optionally return a cleanup function.  
    Before your component is added to the DOM, React will run your setup function.  
    After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values.  
    Before your component is removed from the DOM, React will run your cleanup function.
  - 回傳值
    - undefined
- Effects only run on the client. **They don’t run during server rendering.**
- The code inside useLayoutEffect and all state updates scheduled from it **block the browser from repainting the screen**. When used excessively, this makes your app slow. When possible, prefer useEffect.
- **Most components don’t need to know their position and size on the screen** to decide what to render. They only return some JSX. Then the browser calculates their layout (position and size) and repaints the screen.  
  Sometimes, that’s not enough. Imagine a tooltip that appears next to some element on hover.





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






## useRef
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
- 用法：
  ```js
  const ref = useRef(initialValue);
  ```
  - 參數
    1. initialValue  
     The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
  - 回傳值
    - useRef returns a ref object with a single current property initially set to the initial value you provided.  
      If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.  
      On the next renders, useRef will return the same object.(單例模式(？))
    - Unlike state, you can mutate the ref.current property.  
      However, if it holds an object that is used for rendering (for example, a piece of your state), then you shouldn’t mutate that object.
    - When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
- Changing a ref does not trigger a re-render, so refs aren't appropriate for storing information you want to display on the screen.
- 適用時機
  1. re-render 之後仍然想取得同一個變數  
    (使用 js 原生變數的話，每次 render 時都會被重置)
  2. 改變變數後，不想要觸發 re-render  
    (state 被改變後，會觸發 re-render)
  3. The information is local to each copy of your component.  
    (unlike the variables outside, which are shared)




## useReducer
- useReducer is a React Hook that lets you add a reducer to your component.
- 用法：
  ```js
  const [state, dispatch] = useReducer(reducer, initialArg, init?)
  ```
  - 參數
    1. reducer  
      The reducer function that specifies how the state gets updated.  
      It must be pure, should take the state and action as arguments, and **should return the next state**.  
    2. initialArg  
      The value from which the initial state is calculated.
    3. [optional] init  
      The initializer function that should return the initial state.  
      If it’s not specified, the initial state is set to initialArg.  
      Otherwise, the initial state is set to the result of calling init(initialArg).
  - 回傳值
    1. state  
      The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).


## useContext
- useContext is a React Hook that lets you read and subscribe to context from your component.
- 用法：
  ```js
  const value = useContext(SomeContext);
  ```
  - 參數
    1. reducer  
  - 回傳值
    1. useContext returns the context value for the calling component.  
      It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree.  
      If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.  
      The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.
- 當 context 的值使用 Object.is 比對後不同，React 會自動渲染 Provider 下所有的 component，即使你用 memo 也是會被重新渲染
  - Even when a component is memoized, it will still re-render when a context that it’s using changes.

# React APIs

## createContext
- createContext lets you create a context that components can provide or read.
- Call createContext outside of any components to create a context.
- 用法：
  ```js
  const SomeContext = createContext(defaultValue);
  
  // ex: 
  const ThemeContext = createContext('light');

  function App() {
    const [theme, setTheme] = useState('light');

    return (
      <ThemeContext.Provider value={theme}>
        <Page />
      </ThemeContext.Provider>
    );
  }
  ```
  - 參數
    1. defaultValue  
      The value that you want the context to have when there is no matching context provider in the tree above the component that reads context.  
      **If you don’t have any meaningful default value, specify null.**  
  - 回傳值
    1. a context object  
      Typically, you will use SomeContext.Provider in components above to specify the context value,  
      and call useContext(SomeContext) in components below to read it. 
      The context object has a few properties:
       - SomeContext.Provider  
          lets you provide the context value to components.
       - SomeContext.Consumer [Legacy way (not recommended)]  
          is an alternative and rarely used way to read the context value.
  - SomeContext.Provider
    - Props
      - value:  
        The value that you want to pass to all the components reading this context inside this provider, no matter how deep.  
        The context value can be of any type. A component calling useContext(SomeContext) inside of the provider receives the value of the innermost corresponding context provider above it.
- 因為有用到 context 的元件在 context 更新時都會 re-render，所以比較不常變動的值值才建議使用 context。
- 只要 context 的值有變更，整個 provider 內的原件都會被從 provider 的頂端開始重新渲染
- React 会自动重新渲染读取 context 的组件
- 進階技巧
  - 搭配 useCallback, useMemo

# React batch update


# 甚麼狀況下，react 會重新渲染？
- 知道這個，可以更清楚的理解，如何避免不必要的 re-render


# 如何避免不必要的重新渲染？
- 以下將介紹 memo 、 useMemo、 useCallback 這三種方法，這三種方法都是 React 提供用來減少不必要的元件重新渲染所造成的問題
## 比較
- React.memo
  - props 沒變就不重新渲染 component
  - caches memoized component
    - 記住 component
- useMemo
  - dependencies 沒變就不重新計算結果
  - caches the result of calling your function
    - 記住 function 執行結果
- useCallback
  - dependencies 沒變就不重新回傳 function
  - caches the function itself
    - 記住 function
  - If you’re already familiar with useMemo, you might find it helpful to think of useCallback as this:
    ```js
    function useCallback(fn, dependencies) {
      return useMemo(() => fn, dependencies);
    }
    ```

## React.memo
- memo lets you skip re-rendering a component when its props are unchanged.
- 用法
  ```js
  const MemoizedComponent = memo(SomeComponent, arePropsEqual?)

  function arePropsEqual(oldProps, newProps) {
    // isEqual 為 lodash 深層比較兩者的值是否相同的方法
    return isEqual(oldProps, newProps);
  }
  ```
  - 參數
    1. The component that you want to memoize.  
      The memo does not modify this component, but returns a new, memoized component instead.  
      Any valid React component, including functions and forwardRef components, is accepted.
    2. [optional] arePropsEqual: A function that accepts two arguments: the component’s previous props, and its new props.  
      If the component will render the same output and behave in the same way with the new props as with the old, it should return true.  
      Otherwise it should return false.
      Usually, you will not specify this function. By default, React will compare each prop with Object.is.
      - If you do this, use the Performance panel in your browser developer tools to make sure that your comparison function is actually faster than re-rendering the component. You might be surprised.  
        使用自訂的 compare function 來避免 re-render，不一定會比 re-render 要快
      - Deep equality checks can become incredibly slow
  - 回傳值
    - memo returns a new React component. It behaves the same as the component provided to memo except that React will not always re-render it when its parent is being re-rendered unless its props have changed.
- Even with memo, your component will re-render if its own state changes or if a context that it’s using changes.
- 適用時機
  1. your component re-renders often with the same exact props
     - memo is completely useless if the props passed to your component are always different
  2. its re-rendering logic is expensive
- you will often need useMemo and useCallback together with memo.

## useMemo
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- 用法
  ```js
  const cachedValue = useMemo(calculateValue, dependencies)
  ```
  - 參數
    1. calculateValue:  
      The function calculating the value that you want to cache.  
      It should be pure, should take no arguments, and should return a value of any type.
      React will call this function during the initial render.  
      On next renders, React will return the same value again if the dependencies have not changed since the last render.
      Otherwise, it will call this function, return its result, and store it so it can be reused later.
    2. dependencies:  
      The list of all reactive values referenced inside of the calculateValue code. 
  - 回傳值
    - On the initial render, useMemo returns the result of calling calculateValue with no arguments.
    - During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed),  
      or call calculateValue again, and return the result that calculateValue has returned.
    - useMemo caches a calculation result between re-renders until its dependencies change.
- React will not throw away the cached value unless there is a specific reason to do that.
- useMemo won’t make the first render faster. It only helps you skip unnecessary work on updates.
- Keep in mind that your machine is probably faster than your users’ so it’s a good idea to test the performance with an artificial slowdown. For example, Chrome offers a CPU Throttling option for this.

## useCallback
- useCallback is a React Hook that lets you **cache a function definition** between re-renders.
- 如果 dependencies 沒變，就不會重新 return function
- 可以理解為 useMemo 的變體
- 用法
  ```js
  const cachedFn = useCallback(fn, dependencies)
  ```
  - 參數
    1. fn
       - The function value that you want to cache.  
        It can take any arguments and return any values.  
    2. dependencies
  - 回傳值
    - On the initial render, useCallback returns the fn function you have passed.  
      During subsequent renders, it will either return an already stored fn function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.
- React will not throw away the cached function unless there is a specific reason to do that.









# 其他
- React 在比較兩者是否相等的時候，經常使用 `Object.is`  (ECMAScript 2015 新加入 === es6 新語法)

# 參考文章
- [为什么react组件首字母要大写](https://juejin.cn/post/6844903925234008072)
- [為什麼只能在最頂端層呼叫 Hook？從 useState 實作原理來回答](https://www.explainthis.io/zh-hant/swe/why-call-react-hook-top-level)
- [《自顶向下学习React》学习笔记.md](https://github.com/puxiao/notes/blob/master/%E3%80%8A%E8%87%AA%E9%A1%B6%E5%90%91%E4%B8%8B%E5%AD%A6%E4%B9%A0React%E3%80%8B%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.md)
- [如何搭配useMemo與useCallback優化React效能](https://blog.yyisyou.tw/836044b7/)
- [React Hooks 源码解析（3）：useState](https://juejin.cn/post/6844903990958784526)
- [React Hooks 源码解析（4）：useEffect](https://juejin.cn/post/6844904009501769735)

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



