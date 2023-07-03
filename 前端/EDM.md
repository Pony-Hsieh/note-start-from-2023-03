# EDM

## 簡介
- Electronic Direct Mail，也就是電子報

## table 基礎介紹
- 元素
  - <tr> table row
  - <th> table header
  - <td> table data
- 表格是二維的資料呈現方式，  
  基本的表格由橫向的 row 和直行的 column 構成，  
  橫向的 row 由 <tr> 來表示，  
  而表格的每格單位則由 <th> 和 <td> 組成
- 所有的 <th> 、 <td> 都必須被包含在 <tr> 中。
- 一個 <table> 中， <thead> 、 <tfoot> 只能有一個，<tbody> 則可以有多個，用來區別複雜資料的區段；
- 在 <table> 加上 role="presentation" ，表明這是裝飾性的內容，不需要被讀出；

正確使用 <th> 相當重要，因為在沒有其他額外屬性標示的情況下，螢幕閱讀器只能藉由 HTML 結構判斷哪些 table data 屬於哪個 table header。



## 支援度查詢
- [Can I email](https://www.caniemail.com/)

## 樣式相關
- 如果真的要用 background image 的話，記得要補上 background color 作為無法顯示背景圖時的替代方案，因為有些電子信箱不支援顯示背景圖
- 對齊方式靠td的align和valign屬性
- 不要用任何 CSS3 屬性
- 盡可能只使用 table 排版，可以用 table 或 td 的 align、valign
- 使用 inline-css
- 不要使用 absolute 排版，請使用 static 或 float 的排版方式
- 在 `<table>` 中使用 `cellpadding="0" cellspacing="0" border=“0" ` 去除表格的「預設寬度」
- 當你建立一個 table，就必須用 html attributes reset 掉他
  - 語法：
    `<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">` 
- Block 與 Block 之間的空格用 <td> 的 padding 建立（margin 在 <table> 上不成立）
- 背景顏色時用 bgcolor="#f7f7f7" 寫在 <td> 上
- 排版用 <table> 要靠哪裡需要使用 HTML attributes
  - `align`
    - `left` (預設值)
    - `right`
    - `center`
    - `justify`
      - IE 無法正確地處理 "justify" 值，IE 會以置中的方式進行處理
  	左对齐内容（默认值）。
	右对齐内容。
	居中对齐内容。
	对行进行伸展，这样每行都可以有相等的长度（就像在报纸和杂志中）。
	将内容对准指定字符。
  - `valign`
    - `top`
    - `middle` (預設值)
    - `bottom`
    - `baseline`
- 將 border-collapse 設定為 collapse
  如果我們不這麼做，新一點版本的 Outlook 會在我們的表單和邊框之間添加一個小的白色區域。
- 能用 html 屬性就盡量使用 html 屬性，沒有相對應的屬性再來考慮使用 inline-style
- 左右的樣子用 td 排版
  上下的樣子用 tr 排版


## 圖片相關
- Email .svg 檔支援度不佳，建議不要使用
- 每張 image 都要指定 width, height 屬性
- 透過指定 image 的 alt 屬性可以提升使用者體驗，因為用戶可以在沒有點擊下載圖片的狀況下先看到文字的描述，知道此封郵件大概的內容
- 添加一個 align="center" 到 td 標籤以置中圖片來居中顯示圖片


## 後台特殊設定
- `<td>`
  - padding 無效
  - height 可用
- `div`
  - width, height 無效
  - padding 可用
  - display 無效
- `a`
  - style 會直接被移除

## 其他
- 最後送出前，記得移除所有的注釋

## 參考文章
- [從頭開始構建一個 HTML Email 模板](https://webdesign.tutsplus.com/zh-hant/articles/build-an-html-email-template-from-scratch--webdesign-12770)
- [從零開始建立一個 Email HTML 模版](https://blog.newsleopard.com/coding-html-emails/)
- [漫談無障礙網頁設計-5](https://apodesign.tw/uiux/website-accessibility-5/)
- [EDM模板編寫踩坑指南（非響應式，純table有源碼）](https://www.796t.com/content/1526838092.html)
- [EDM製作要點](https://www.cnblogs.com/dolphinX/p/4082747.html)