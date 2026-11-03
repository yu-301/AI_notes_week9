# 5G 安全筆記站

把 3GPP **TS 33.501（5G System Security，Release 18）** 依主題拆成一頁一頁的筆記網站，每個主題都有**文字版**與**簡報版**。

- 🌐 網站：<https://yu-301.github.io/AI_notes_week9/>
- 📘 AI 規則：[`CLAUDE.md`](CLAUDE.md)（內容與 [`AGENTS.md`](AGENTS.md) 相同）

## 這個專案怎麼運作

所有頁面的格式、命名、首頁目錄與術語表的更新方式，都寫在 `CLAUDE.md`。
要新增內容時，只要對 AI 說：

> 依照 CLAUDE.md，新增一頁關於 5G-AKA（§6.1.3.2）的主題頁

AI 就會：
1. 用模板建立文字版（`pages/`）與簡報版（`slides/`）
2. 自動把新頁面加進 `index.html` 目錄，並依條文編號排序
3. 把新術語補進 `glossary.html`
4. 在 `log.md` 記下這次變更

## 加入原始資料

把 3GPP 規格或講義放進 `sources/`，再對 AI 說：

> 依照 CLAUDE.md 第 7 節，匯入 sources/ 的新文件

AI 會根據原文修正既有頁面、移除「待查證」標記，並建議可以新增的主題。

## 檔案結構

```
index.html                  首頁（目錄）
glossary.html               術語表
pages/                      各主題文字版
slides/                     各主題簡報版
sources/                    原始資料（3GPP 規格、講義）
templates/                  文字版與簡報版模板
assets/style.css            共用樣式
assets/slides.js            簡報播放器
log.md                      變更紀錄
```
