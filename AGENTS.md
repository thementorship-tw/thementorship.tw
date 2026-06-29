# AGENTS.md

本檔供 AI 輔助開發使用；人工開發可參考 `DESIGN.md`。

## 目的

本文件定義在此 repository 中，為 coding agent 必須遵循的行為規範。

## UI 的設計規範

任何 UI、前端、樣式、版面或互動相關任務，agent **必須**以 `DESIGN.md` 為設計規範的來源。

- 必讀：`DESIGN.md`（repository 根目錄）
- 若任務需求與 `DESIGN.md` 衝突，偏離前須取得明確確認

## 前端任務的工作流程

### 編碼前

1. 閱讀 `DESIGN.md`
2. 擷取適用規則：
   - 視覺主題
   - 色彩角色
   - 字體排版
   - 元件樣式
   - 間距與版面
   - 響應式行為
   - 動態與互動
3. 優先使用現有 token 與工具（Tailwind token、既有元件、既有變數）

### 編碼後

執行檢查並明確確認：

1. 色彩使用符合 `DESIGN.md` 的語意角色
2. 字體遵循文件中的層級與字體用途
3. 元件狀態一致（預設、hover、active、disabled）
4. 手機與桌面響應式行為正確
5. 動態克制，符合網站風格

## 重用政策

agent 應該優先重用既有元件，再考慮新增模式。

- 優先使用 `nextjs-app/components/common` 中的共用元件
- 優先使用 `nextjs-app/design-system/data/token.json` 中的 token
- 除非必要，避免引入一次性色彩、間距或臨時 UI 樣式

## MVP 例外

趕時間可以先做功能較少的版本，但外觀仍須符合 `DESIGN.md`。至少要做到：

1. 配色符合主視覺
2. 標題、內文字體大小大致正確
3. 按鈕、卡片風格跟現有頁面一致
4. 手機上不會破版

若因趕工省略了某些設計或功能（例如先用假資料、尚未做篩選器），請在回覆裡寫清楚簡化了什麼、哪些仍依 `DESIGN.md` 實作。

## 適用範圍

以下路徑強制遵循本文件：

- `nextjs-app/app/**`
- `nextjs-app/components/**`
- `nextjs-app/public/**`（視覺素材選用）
- `nextjs-app/design-system/**`

非前端任務（腳本、後端整合、schema 變更）依一般工程實務處理；僅在會影響 UI 輸出時套用 `DESIGN.md`。
