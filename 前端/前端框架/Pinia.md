# Pinia

## 官方文件
- [官網](https://pinia.vuejs.org/)


## 基本操作
- 安裝
    `$ npm install pinia`
- main.js  
  安裝完成之後，要在 main.js 全局註冊 Pinia 才能夠使用  
  更改 main.js 來使用 pinia
    ```javascript
    import { createApp } from "vue"; 
    import { createPinia } from "pinia"; // 引入 Pinia
    import App from "./App.vue"; 
    const app = createApp(App); 
    app.use(createPinia()); // 啟用 Pinia
    app.mount("#app");
    ```
- src/stores/counter.js  
  在 src 目錄下創建 stores 文件夾，然後再創建一個 counter.js 文件，並粘貼以下代碼：
    ```javascript
    import { defineStore } from "pinia";

    export const useCounterStore = defineStore("counter", {

        state: () => {
            return { 
                count: 0 
            };
        },

        actions: {
            increment(value = 1) {
                this.count += value;
            },
        },

        getters: {
            doubleCount: (state) => {
                return state.count * 2;
            },
            doublePlusOne() {
                return this.doubleCount + 1;
            },
        },
    });
    ```
- 在需要的檔案引入
    ```javascript
    ```


## 甚麼狀況下適合使用 Pinia


## 參考文章
- [Vue State Management 介紹 — Pinia](https://blog.twjoin.com/vue-state-management-%E4%BB%8B%E7%B4%B9-pinia-9f8695110cd7)
- [Pinia - Vuex 的後繼者](https://johnnywang1994.github.io/book/articles/js/pinia-intro.html#usage-%E7%B5%84%E4%BB%B6%E5%85%A7%E4%BD%BF%E7%94%A8)