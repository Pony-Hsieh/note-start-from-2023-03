# 簡介
- 設計模式(Design Pattern)是前輩們對程式碼開發經驗的總結，也是解決特定問題的一系列套路。  
  它不是語法規定，而是一套用來提高程式碼可複用性、可維護性、可讀性、穩健性以及安全性的解決方案。  
  1995年，GoF（Gang of Four，四人組/四人幫）合作出版了 "Design Patterns: Elements of Reusable Object-Oriented Software" 一書，共收錄了 23 種設計模式，人們稱之為 GoF 設計模式。  
  這23 種設計模式的本質是物件導向設計原則的實際運用
# 分類
1. 創建型模式：解決與 建立物件 相關的問題
   1. 工廠模式 (Factory Method)
      - 工廠模式根據抽象程度的不同分為三種：
        1. 簡單工廠模式
        2. 工廠方法模式
        3. 抽象工廠模式 (Abstract Factory)
      - 比較：
        - 簡單工廠：用來生產同一等級結構中的任意產品。（不支援拓展增加產品）
        - 工廠方法：用來生產同一等級結構中的固定產品。（支援拓展增加產品）
        - 抽象工廠：用來生產不同產品族的全部產品。（支援拓展增加產品；支援增加產品族）
   2. 抽象工廠模式
   3. 建構器模式 (Builder)
   4. 原型模式 (Prototype)
   5. 單例模式 (Singleton)
2. 結構型模式：處理 實體 之間的關係，以及它們如何共同組成一個更大的結構
   1. 適配器模式 (Adapter)
   2. 橋接模式 (Bridge)
   3. 組合模式 (Composite)
   4. 裝飾者模式 (Decorator)
   5. 門面模式 (Facade)
   6. 享元模式 (Flyweight)
   7. 代理模式 (Proxy)
3. 行為型模式：處理物件如何相互溝通和互動
  ![](https://pic2.zhimg.com/80/v2-80d3f34442ab1c0e8e349e6a35d895bd_1440w.webp)
   1. 透過父類與子類的關係進行實現
      1. 策略模式 (Strategy)
      2. 模板方法模式 (Template Method)
   2.  兩個類之間
       1. 觀察者模式 (Observer)
       2. 迭代器模式 (Iterator)
       3. 責任鏈模式 (Chain of Responsibility)
       4. 命令模式 (Command)
   3.  類的狀態
       1. 備忘錄模式 (Memento)
       2. 狀態模式 (State)
   4.  透過中間類
       1. 訪客模式 (Visitor)
       2. 中介者模式 (Mediator)
       3. 解釋器模式 (Interpreter)

# 參考文章
- [23 种设计模式详解（全23种）](https://zhuanlan.zhihu.com/p/575645658)