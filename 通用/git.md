# 指令
## 本地
- 新建本地數據庫  
  `$ git init`
- 將全部檔案移入索引中  
  `$ git add .`
- 將索引內的檔案提交至本地數據庫  
  `$ git commit -m "COMMIT_MESSAGE"`
- 查看目前 config 設定  
  `$ git config --list`
- 設定 user name 及 user email
  - 全域  
    `$ git config --global user.name "LOREM_NAME"`  
    `$ git config --global user.email "LOREM_NAME@gmail.com"`
  - 特定資料夾  
    `$ git config --local user.name "LOREM_NAME"`  
    `$ git config --local user.email "LOREM_NAME@gmail.com"`
- 創建空白提交  
  `$ git commit --allow-empty -m "init"`
- 修改第一個 commit  
  `$ git rebase -i --root`
- 查看目前所有的分支  
  `$ git branch --list`
- 建立分支  
  `$ git branch <branchname>`
- 切換分支  
  `$ git checkout <branch>`
- 建立並切換分支  
  `$ git checkout -b <branch>`
## 遠端
- 下載遠端數據庫  
  `$ git clone <url>`
- 顯示遠端數據庫清單  
  `$ git remote`
  ```
  origin
  ```
- 顯示遠端數據庫的詳細情況  
  `$ git remote -v`
  ```
  origin https://github.com/Pony-Hsieh/note-start-from-2023-03.git (fetch)
  origin https://github.com/Pony-Hsieh/note-start-from-2023-03.git (push)
  ```
- GitHub 新開 repository 時，預設的三個指令解析  
  1. `$ git remote add origin https://github.com/Pony-Hsieh/note.git`
     - git remote add [short_name] [url]
     - 可以理解為將 short_name 的值宣告為 url，之後在打指令時，就不用打一長串的 url 了
  2. `$ git branch -M master`
     - `-M` 在這裡等價於 `-m`
     - 重新命名當前分支為 master
  3. `$ git push -u origin master`
     - `-u` 等價於 `--set-upstream`
     - 將本地的 master 分支推送到 origin 主機，同時指定 origin 為預設主機，後面就可以不加任何參數使用 git push 了
     - 如果當前分支與多個主機存在追蹤關係，則可以使用 `-u` 選項指定一個預設主機，這樣後面就可以不加任何參數使用 `git push`
- git push
  - 完整指令  
    `$ git push <遠程主機名> <本地分支名>:<遠程分支名>`  
    ex: `$ git push origin master:master`
    - 分支推送順序的寫法是 <來源地>:<目的地>，  
      所以 git push 是 <本地分支>:<遠程分支>，  
      git pull 是 <遠程分支>:<本地分支>
  - 省略遠程分支名  
    `$ git push <遠程主機名> <本地分支名>`  
    ex: `$ git push origin master`  
      - 將本地分支推送到與之存在"追蹤關係"的遠程分支(通常兩者同名)；  
      如該遠程分支不存在，則被新建
  - 省略本地分支名(冒號不可省略)  
    `$ git push <遠程主機名> :<遠程分支名>`  
    ex: `$ git push origin :master`
      - 刪除指定的遠程分支，因為這等同於推送一個空的本地分支到遠程分支
      - 等價於 `$ git push origin --delete master`
  - 省略 本地分支名 及 遠程分支名  
    `$ git push <遠程主機名>`  
    ex: `$ git push origin`
    - 將當前分支推送到 origin 主機的對應分支
    - 如果 [當前分支] 與 [遠程分支] 之間存在追蹤關係，則本地分支和遠程分支都可以省略
  - `$ git push`  
    如果當前分支與多個主機存在追蹤關係，則可以使用 `-u` 選項指定一個預設主機，這樣後面就可以不加任何參數使用 git push
## 一起紀錄
- 刪除分支
  - 本地  
    `$ git branch -d <branch>`
  - 遠端  
    `$ git push origin --delete fix/authentication`  
    簡短版本：  
    `$ git push origin :fix/authentication`
- 重新命名分支
  - 本地
    1. 切換到要重新命名的分支
    2. `$ git branch -m <new-name>`
  - 遠端
    - 待查詢


# 相關文章
- [GitHub 10月起將以 main 取代 master 作為新 Git 儲存庫預設名稱](https://www.ithome.com.tw/news/140094)
  > 為響應黑人平權運動，GitHub 宣布從10月1日起改變新 Git 儲存庫的預設命名，以 main 來取代原本的 master
- [2.5 Git 基礎 - 與遠端協同工作](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E8%88%87%E9%81%A0%E7%AB%AF%E5%8D%94%E5%90%8C%E5%B7%A5%E4%BD%9C)
- [git push -u origin master 的實際原理](https://blog.51cto.com/feirenraoyuan/5270334)
- [Git教學：如何 Push 上傳到 GitHub？](https://gitbook.tw/chapters/github/push-to-github)
- [設定 Upstream](https://zlargon.gitbooks.io/git-tutorial/content/remote/upstream.html)