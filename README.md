# 退休金小學堂

給長輩的退休理財入門，四堂引導式課程 + 一個極簡記帳工具。
純靜態網站，無建置步驟、無相依套件。

## 檔案

```
index.html     首頁（課程列表、進度）
lesson1.html   第1課 物價與時間
lesson2.html   第2課 錢可以放哪裡
lesson3.html   第3課 三個桶子
lesson4.html   第4課 實際開始，還有怎麼不被騙
jizhang.html   30 天記帳工具
style.css      共用樣式
progress.js    進度記錄（localStorage）
_headers       Cloudflare Pages 回應標頭
```

## 部署到 Cloudflare Pages

**方式一：直接上傳**
Pages → Create a project → Upload assets，把這個資料夾整包拖進去。

**方式二：接 Git**
推到 GitHub 後，在 Pages 連結該 repo，設定：
- Build command：留空
- Build output directory：`/`（若整站放在子資料夾，填該資料夾名）

## 資料儲存

- `xuetang.v1` — 各課完成狀態
- `jizhang.v1` — 記帳紀錄

兩者都只存在使用者的瀏覽器 localStorage，不會上傳。
清除瀏覽器資料會一併消失，記得提醒長輩不要清。

## 外部相依

只有 Google Fonts（Noto Sans TC）。想完全離線的話，把字型檔下載下來自行託管，
並改掉各頁 `<head>` 裡的 fonts.googleapis.com 連結。

## 注意

內容為理財觀念教學，非投資建議。歷史數據整理自元大投信、台灣證券交易所、
行政院主計總處與公開財經資料，日後需自行更新。
