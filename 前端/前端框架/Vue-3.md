# 題庫
- `ref`, `reactive` 的差異為何？

- `setup()` 的用途是甚麼？

- `<script setup>` 的優點

- 請描述一下你對 Vue 生命週期的理解？

- 數據雙向綁定是什麼？

- 你知道 Vue 中 key 的原理嗎？

- 說說你對 keep-alive 的理解？

- 為什麼需要虛擬 DOM？

- Vue 3 與 Vue 2 有哪些差異？

- 什麼階段（生命週期）才能訪問操作dom？為什麼？

- Vuex 和單純的全域物件有什麼區別？

- Vue3.0 為什麼要用 Proxy API 替代 defineProperty API？

- watch, methods 和 computed 的區別？

- computed, watch 的區別和運用的場景？

- 可以被 Vue 攔截到的 array 方法以及不能被攔截到的 array 方法？

- 接口請求一般放在哪個生命週期中？
  - 接口請求一般放在 mounted 中，在渲染 html 後調用，  
    但需要注意的是 SSR 不支援 mounted，需要放到 created 中

- `v-if`, `v-show` 的差異為何？

## 未分類
- 使用 v-for 在疊代 map 時，需要使用方括號
  ```html
  <div
    class
    v-for="[key, value] in quoteMap"
    :key="key"
  >
    <p>
      key: {{ key }}
      <br />
      value: {{ value }}
    </p>
  </div>
  ```
- computed 和 watch 的區別
  - 使用場景：computed適用於一個資料受多個資料影響使用；watch適合一個資料影響多個資料使用。
  - 區別：computed屬性預設會走緩存，只有依賴資料發生變化，才會重新計算，不支援異步，有非同步導致資料發生變化時，無法做出相應改變；watch不依賴緩存，一旦資料變更就直接觸發響應操作，支援異步。

