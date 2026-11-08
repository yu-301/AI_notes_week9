# 變更紀錄

> 只能往下新增，不可修改舊紀錄。格式見 CLAUDE.md 第 7 節。

## [2026-11-03] init | 建立專案骨架與規則
- 建立 CLAUDE.md / AGENTS.md、index.html、glossary.html、assets/style.css、templates/topic-template.html

## [2026-11-03] add | §6.12 SUPI 隱藏與 SUCI
- 新增 pages/suci-supi-concealment.html
- 更新 index.html、glossary.html（新增術語：5G-GUTI、ECIES、SIDF、SUCI、SUPI）

## [2026-11-03] add | 簡報版與原始資料匯入功能
- 新增 assets/slides.js、templates/slides-template.html、slides/suci-supi-concealment.html
- 新增 sources/ 資料夾與 sources/README.md
- 更新 CLAUDE.md / AGENTS.md：加入簡報規則（第 6 節）與匯入流程（第 7 節）
- 更新 pages/suci-supi-concealment.html：加入「看簡報版」連結與「依據來源」

## [2026-11-03] edit | 首頁目錄加入文字版／簡報版入口
- 更新 index.html：每個主題同時提供「文字版」「簡報版」連結
- 更新 assets/style.css、CLAUDE.md / AGENTS.md 第 5 節的目錄項目格式

## [2026-11-03] add | §6.1.3.2 5G-AKA 認證
- 新增 pages/5g-aka.html、slides/5g-aka.html
- 更新 index.html、glossary.html（新增術語：5G-AKA、ARPF、AUSF、AUTN、HXRES*、KAUSF、KSEAF、RAND、RES*、SEAF、UDM）

## [2026-11-03] ingest | 3GPP TS 33.501 V18.12.0（§6.1.3、§6.12）
- 更新 sources/README.md：新增 3GPP TS 33.501 V18.12.0 (Release 18).docx
- 本次只對照 §6.1.3（含 §6.1.1–§6.1.4、Annex A 相關部分）與 §6.12（含 Annex C）
- 更新 pages/5g-aka.html、slides/5g-aka.html：補上 SEAF 不論比對結果都轉送 RES*、AUSF 通知 UDM、AMF 啟動 NAS SMC 等步驟（流程改為 9 步）；修正 SN name 與金鑰綁定的說明；新增 RES* 驗證失敗考點；移除「待查證」並補上 §6.1.3.3、§6.1.4、Annex A.2–A.7 條文編號；依據來源改為原文檔名
- 更新 pages/suci-supi-concealment.html、slides/suci-supi-concealment.html：保護方案 ID 改為 0x0–0x2 並補上保留值；補上 NAI 格式 SUPI 的處理；修正 5G-GUTI 的分配時機、null scheme 使用條件、SUCI 使用時機；補上 Profile A/B 參數；依據來源改為原文檔名（簡報版補上原本缺少的「依據來源」行）

## [2026-11-03] edit | 首頁 GitHub 連結與 README 網站網址
- 更新 index.html：「GitHub 原始碼」連結改為 https://github.com/yu-301/AI_notes_week9
- 更新 README.md：填上網站網址 https://yu-301.github.io/AI_notes_week9/

## [2026-11-03] add | §6.1.3.1 EAP-AKA' 認證
- 新增 pages/eap-aka-prime.html、slides/eap-aka-prime.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx）
- 更新 index.html、glossary.html（新增術語：ABBA、EAP、EAP-AKA'、EMSK）

## [2026-11-03] add | §6.2 5G 金鑰階層與金鑰推導
- 新增 pages/key-hierarchy.html、slides/key-hierarchy.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx）
- 更新 index.html、glossary.html（新增術語：KAMF、KDF、KgNB、ngKSI、NH）

## [2026-11-03] add | §6.4 NAS 安全機制
- 新增 pages/nas-security.html、slides/nas-security.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx）
- 更新 index.html、glossary.html（新增術語：NAS、NAS COUNT、NAS-MAC、NEA、NIA、SMC）

## [2026-11-08] add | §6.7 安全演算法選擇與安全模式命令程序
- 新增 pages/security-mode-command.html、slides/security-mode-command.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx §6.7.1–§6.7.4）
- 更新 index.html、glossary.html（新增術語：AS、LSM、RRC）

## [2026-11-08] add | §6.6 使用者平面（UP）安全與完整性保護
- 新增 pages/up-security.html、slides/up-security.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx §5.2.2–§5.2.3、§5.3.2–§5.3.3、§6.6；4G 部分標記待查證）
- 更新 index.html、glossary.html（新增術語：DRB、KUPenc、KUPint、MAC-I、PDCP、SMF、UP）

## [2026-11-08] add | §6.9 換手時的安全處理與金鑰推導
- 新增 pages/handover-security.html、slides/handover-security.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx §6.9.2、§6.9.3、Annex A.10–A.13；4G 部分標記待查證）
- 更新 index.html、glossary.html（新增術語：KNG-RAN*、NASC、NCC、PCI）

## [2026-11-08] add | §13.2 SEPP 與 N32 介面的漫遊安全
- 新增 pages/sepp-n32-roaming.html、slides/sepp-n32-roaming.html（依據 sources/3GPP TS 33.501 V18.12.0 (Release 18).docx §5.9.3、§13.1.2、§13.2、§13.5；4G 互連部分標記待查證）
- 更新 index.html、glossary.html（新增術語：IPX、JWE、JWS、N32、PRINS、RI、SEPP）
