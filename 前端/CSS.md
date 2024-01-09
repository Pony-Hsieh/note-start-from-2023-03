# 語法

## SCSS 相關
- `@extend` 無法在 media query 中使用
- `@mixin` 搭配 `@include`
  ```scss
  @mixin mobile {
    @media (max-width: 768px) {
      @content;
    }
  }

  .test {
    background-color: blue;

    @include mobile {
      background-color: red;
    }
  }
  ```
- `%foo` 搭配 `@extend`
  ```scss
  %all-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .test {
    @extend %all-flex-center;
  }
  ```
- loop
  ```scss
  @for $i from 1 through 6 {
    .condition#{$i} {
      background: url("./img/condition#{$i}.png") no-repeat center/contain;
      // background-position/background-size
    }
  }
  ```
# CSS 相關
- 自製動畫效果 `@keyframes`
  ```css
  @keyframes animation-floating-down-first {
    0% {
      transform: translate(0, 0);
    }
    40% {
      transform: translate(0, 0.5rem);
    }
    50% {
      transform: translate(0, 0.5rem);
    }
    90% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
- animation
  ```css
  animation-name: none; /* 預設值 */
  animation-name: animation-floating-down-first;

  animation-iteration-count: 1; /* 預設值 */
  animation-iteration-count: infinite;

  animation-timing-function: ease; /* 預設值 */
  animation-timing-function: linear;

  animation-duration: 0s; /* 預設值 */
  animation-duration: 6s;

  animation-fill-mode: none; /* 預設值 */
  animation-fill-mode: forwards; /* 動畫結束後，保持最後結束的樣子 */
  ```
- background
  ```css
  background-image: none; /* default */
  background-image: url(stone-1.png);
  background-image: linear-gradient(to bottom, #fff535, #fa0); /* 漸層 */

  background-position: 0% 0%; /* default */
  background-position: center;

  background-repeat: repeat; /* default */
  background-repeat: no-repeat;

  background-size: auto; /* default */
  background-size: contain;
  background-size: cover;
  ```
- 幾種水平垂直置中的做法
  1. flex
      ```css
      .father {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .son {
        ...
      }
      ```
  2. 絕對定位搭配 margin: auto
      ```css
      .father {
        position: relative;
      }
      .son {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
      ```
  3. 絕對定位搭配 transform
      ```css
      .father {
        position: relative;
      }
      .son {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      ```

  


  
  
  

# 已開始找答案

-----------------------------------------------------------------------------------------------------------------
# 題庫
- 為什麼會使用 `translate()` 的效能會優於 `position: absolute;`？
  - Reflow & Repaint & Compositing
    - Reflow(回流)
      - 瀏覽器為了重新渲染部分或全部的 document 而重新計算 Render Tree 中元素的物理屬性，如位置、大小的過程。
      - 觸發條件為改變一些元素的幾何樣式，例如 height、width、margin 或是排列的方式等等。
    - Repaint(重繪)
      - 將計算結果轉為實際的像素，畫到畫面上。
      - 改動元素的顏色、背景圖等不需要重新計算頁面元素 layout 的樣式
    - Compositing(合成)
      - `transform`, `opactity`
      - 更改一些不需要 Reflow 與不需要 Repaint 的屬性，這種改變方式是效率最好的。  
        除了因為它只需要做合成以外，還有一個重點是 "合成的運作不是在 Main Thread 進行的，而是在 Compositor Thread 與 Raster Thread，因此不會佔用 Main Thread 資源"，這也是為什麼要做 CSS 動畫會建議使用 transform 的原因。
    - 如果觸發了渲染流程的某個階段，那麼其之後的階段也都會被觸發  
      不同的改變樣式的方式，會觸發不同渲染流程，因此也是效能優化的一個方向
      ![](https://i.imgur.com/Ko9shBl.png)
  - 參考文章
    - [Day08 X 瀏覽器架構演進史 & 渲染機制](https://ithelp.ithome.com.tw/articles/10270187)
    - [Stick to Compositor-Only Properties and Manage Layer Count](https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/)
    - [渲染流程：HTML、CSS和JavaScript是如何變成頁面的?](https://pcaaron.github.io/pages/fe/chrome/drawing.html)
    - [渲染頁面：瀏覽器的工作原理](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)

- 回流 (Reflow) 和重繪 (Repaint) 是什麼？如何優化？
  - 要減少回流和重繪的次數，首先要了解回流和重繪是如何被觸發的

- BFC(Block Formatting Context) 是甚麼？

- CSS Reset 和 CSS Normalize 的差異是甚麼？  
  你會選擇哪一種，為什麼？

- 有什麼方法來隱藏網頁的內容？


-----------------------------------------------------------------------------------------------------------------
# 轉貼文章
- [How CSS works](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/First_steps/How_CSS_works)

- [【Web】瀏覽器如何繪製網頁？探討 DOM、CSSOM 與渲染（翻譯）](https://medium.someone.tw/web-%E7%80%8F%E8%A6%BD%E5%99%A8%E5%A6%82%E4%BD%95%E7%B9%AA%E8%A3%BD%E7%B6%B2%E9%A0%81-%E6%8E%A2%E8%A8%8E-dom-cssom-%E8%88%87%E6%B8%B2%E6%9F%93-%E7%BF%BB%E8%AD%AF-e9ba8c2be451)
  > 對於某些 HTML 元素，開發者與瀏覽器可能都沒有明確定義 CSS 的屬性（例如display）而這些屬性就會被預設為 W3C CSS 標準中所標示的預設值；在這些預設值當中，某些屬性的運作會遵循 W3C 文件的標示，採用繼承（inheritance）的規則。

  > 如果我們將元素設定為visibility:hidden或是opacity:0，這些元素因為仍然在畫面中佔有空間，因此會被包含在 render tree 當中。

- [瀏覽器解析CSS 樣式的過程](https://blog.fundebug.com/2019/04/01/how-does-browser-parse-css/)
- [SCSS 相關教學筆記](https://hackmd.io/@FortesHuang?tags=%5B%22Scss%22%5D)

- [Sass / SCSS 預處理器 - 自建 CSS 框架中的 Grid System 與 Spacing](https://awdr74100.github.io/2020-06-24-scss-gridsystem-spacing/)
- [淺談 Atomic CSS 的發展背景與 Tailwind CSS](https://blog.huli.tw/2022/05/23/atomic-css-and-tailwind-css/)
  - 以前我在維護一個用 Redux 的專案時有一系列操作長很像，例如說 post、user 跟 restaurant 的 CRUD 之類的，程式碼有很大一部分都重複，因此我就寫了一個 utils 來處理共同邏輯，只要寫 generateActions('user')，就自動幫你動態產生出 readUser 與 createUser 之類的 actions。  
  那時我想說這樣很讚，但同事提醒我說如果你這樣做，那全域搜尋 readUser 的時候就搜不到東西，因為那是程式動態產生的，在原始碼裡面找不到。  
  雖然我那時不覺得有什麼，但過了兩個月後我知道我錯了。當你面對一個不熟悉的專案時，要去修一個 bug，最常做的就是拿你手上的資訊去搜尋原始碼，看看出現在哪邊。如果你搜不到東西，那是滿挫折的一件事情，會需要花更多時間去找問題到底在哪個範圍。因此，可以被搜尋到是很重要的。