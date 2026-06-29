# DESIGN.md — thementorship.tw

本網站的視覺與互動設計規範。  
**適用對象：** AI coding agent、前端開發者。  
程式碼路徑詳見第 12 節「檔案對照」。

若任務需求與本文件衝突，**先問清楚再改**，不要自行偏離。

---

## 快速參考（Agent 用）

| 用途 | Token / class | 說明 |
|----------|---------------|------|
| 主要文字 | `text-neutral-10` | 內文、淺色背景上的標題 |
| 次要文字 | `text-neutral-8` | 輔助說明 |
| 弱化文字 | `text-neutral-6` | 標籤、輔助資訊 |
| 主要 CTA | `bg-blue-7` → hover `bg-blue-9` | 航海士 / 預設主要按鈕 |
| 船長(導師) CTA | `bg-yellow-6` → hover `bg-yellow-8` | 船長相關按鈕強調 |
| 區塊底色 | `bg-blue-1` | 淡藍面板背景 |
| 暖色強調線 | `border-yellow-6` / `bg-yellow-2` | 邊框、底線、hover |
| Hero 天空色 | `#E6F4FF` | 不在 token.json；僅限 hero 區塊謹慎使用 |
| 展示用襯線 | `font-eb-garamond` | 英文標題、區塊展示行 |
| 內文 / UI 無襯線 | `font-sans`（預設） | 所有中文與 UI 文字 |
| 膠囊圓角 | `rounded-pill` | 按鈕、標籤 |
| 卡片圓角 | `rounded-3`（8px） | 多數卡片與面板 |

---

## 1. 品牌與氛圍

### 核心概念

導師制度即 **導航與航程** — 引領使用者走過職涯與成長旅程。

### 情緒調性

沉穩 · 可信 · 鼓舞 · 務實 · 溫暖而專業。

### 視覺語言

| 元素 | 用途 |
|------|------|
| 天空與海洋 | Hero 背景、波浪分隔、營造開闊感 |
| 航線與羅盤 | 導覽意象、子選單羅盤圖示 |
| 柔和動態 | 跑馬燈迴圈、船/浪輕擺、淡入淡出 |
| 留白充足 | 寧可少放資訊，也不要擠成報表式排版 |

### 文案語氣（UI 文字）

具教育性、鼓勵性、直接。避免誇張行銷或矯情語氣。

---

## 2. 色彩系統

優先使用下方色票表與 Tailwind token class。元件內避免直接寫 hex，除非下文另有說明。

### 2.1 中性色

| Token | Hex | 用途 |
|-------|-----|------|
| `neutral-10` | `#1F2630` | 主要文字、重要圖示 |
| `neutral-9` | `#323B47` | 次要標題強調 |
| `neutral-8` | `#47515F` | 次要文字、頁尾邊框 |
| `neutral-7` | `#5E6876` | 完整色階見 `token.json` |
| `neutral-6` | `#78818E` | 較淡的說明文字、弱化標籤 |
| `neutral-5` | `#949BA5` | 停用文字、停用圓點 |
| `neutral-4` | `#B3B7BD` | 完整色階見 `token.json` |
| `neutral-3` | `#D4D4D4` | 完整色階見 `token.json` |
| `neutral-2` | `#E9E9EA` | 邊框、停用背景 |
| `neutral-1` | `#F4F4F4` | 區塊淡底、篩選器外框 |
| `white` | `#FFFFFF` | 卡片、較亮的背景區塊 |
| `black` | `#000000` | 極少使用；優先中性色 |

### 2.2 品牌藍

| Token | Hex | 用途 |
|-------|-----|------|
| `blue-10` | `#00042C` | 最深品牌色 |
| `blue-9` | `#00063A` | 主要按鈕 hover（實心藍） |
| `blue-8` | `#090E3E` | 頁尾、導覽文字、區塊展示色 |
| `blue-7` | `#131956` | 主要行動、外框按鈕邊框/文字 |
| `blue-6` | `#202870` | 較深的主色 |
| `blue-5` | `#525AA4` | 較淺強調 |
| `blue-4`–`blue-3` | — | 裝飾色階 |
| `blue-2` | `#E1E3F2` | 標籤背景（`HashTag`） |
| `blue-1` | `#F4F6FA` | 面板淡藍底（`ProfileCard`、`InfoCard` 淡藍版本） |

### 2.3 品牌暖黃

| Token | Hex | 用途 |
|-------|-----|------|
| `yellow-10`–`yellow-5` | — | 深度 / 裝飾 |
| `yellow-8` | `#735B35` | 金色按鈕 hover |
| `yellow-7` | `#7B6748` | 完整色階見 `token.json` |
| `yellow-6` | `#7E7059` | 導師 CTA、暖色強調、姓名強調 |
| `yellow-4` | `#B5A68D` | 次要裝飾 |
| `yellow-2` | `#D9CFBF` | 導覽底線、頭像邊框、hover 底色 |
| `yellow-1` | `#F8F5F2` | 子選單 hover 背景 |

### 2.4 特殊色

| 名稱 | 色值 | 用途 |
|------|------|------|
| Hero 天空 | `#E6F4FF` | 僅首頁 hero 底色；漸層保持柔和 |

### 2.5 配色規則

```
主要操作按鈕  → 藍色系（blue-7 基底，blue-9 hover）
導師相關按鈕  → 黃色系（yellow-6 基底，yellow-8 hover）
一般背景      → white、blue-1、neutral-1
深色背景區    → blue-8（如頁尾）
強調線條      → yellow-6、yellow-2
```

**禁止：** 霓虹色系、高飽和漸層、過強圖片疊色。

---

## 3. 字體排版

### 3.1 字體家族

| 字體 | CSS / Tailwind | 用途 |
|------|----------------|------|
| EB Garamond | `font-eb-garamond`（`var(--font-eb-garamond)`） | 英文展示行、導覽英文標題、區塊副標 |
| 系統無襯線 | `font-sans`（預設） | 中文內文、UI 標籤、內文 |

**字體堆疊：** `Verdana, Helvetica, Microsoft JhengHei, Heiti TC, sans-serif`

中文可讀性不可妥協 — 內文絕不使用裝飾字體。

### 3.2 字級尺度

使用 `token.json` 的預設排版 class（`text-{name}`）。格式：`字級 / 行高`，字重。

| Token class | 字級 / 行高 | 字重 | 常見用途 |
|-------------|-------------|------|----------|
| `text-h1-title` | 48 / 48 | 600 | Hero 展示（EB Garamond） |
| `text-h2-title` | 40 / 40 | 600 | 大型展示 |
| `text-h3-title` | 36 / 36 | 600 | 區塊副標（EB Garamond） |
| `text-h1` | 40 / 52 | 600 | 頁面 H1 |
| `text-h2` | 28 / 44 | 600 | 區塊 H2 |
| `text-h3` | 26 / 40 | 600 | 卡片姓名、強調 |
| `text-h4` | 24 / 32 | 600 | 導覽英文行 |
| `text-h4-title` | 22 / 24 | 400 | Header 導覽英文（EB Garamond） |
| `text-h5` | 22 / 28 | 600 | 區塊小標（yellow-6） |
| `text-h6` | 18 / 24 | 600 | 緊湊標題 |
| `text-subtitle-lg` | 16 / 24 | 600 | 副標、卡片職稱 |
| `text-subtitle-md` | 14 / 20 | 600 | 導覽中文行、篩選標籤 |
| `text-body-lg` | 16 / 24 | 400 | 導言內文 |
| `text-body-md` | 14 / 20 | 400 | 預設內文 |
| `text-body-sm` | 12 / 16 | 400 | 標籤、細字 |

另有原始尺寸 class（`text-1` … `text-11`），但優先使用上表具名排版 class。

### 3.3 區塊標題模式

參考：`components/pages/main/SectionTitle.tsx`

```
[小標]    text-h5 md:text-h4  →  text-yellow-6（淺色）或 text-white（深色）
[展示行]  text-h3-title font-eb-garamond md:text-h1-title  →  text-blue-8 或 text-white
[分隔線]  title-symbol-line.png 素材，置中
```

### 3.4 排版行為

- Hero 標題：短行、兩行排版可接受。
- 不使用過緊字距技巧。
- 襯線僅用於英文展示；中文一律無襯線。

---

## 4. 間距、版面與圓角

### 4.1 間距尺度

Token 對應 Tailwind spacing（`p-5` = 16px 等）：

`2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56` px

間距請用 `token.json` 定義的數值（見上方列表），不要自行亂訂。區塊之間保留足夠上下留白。

### 4.2 斷點

| 名稱 | 最小寬度 | Tailwind 前綴 |
|------|----------|---------------|
| 預設 | < 600px | （無） |
| `md` | 600px | `md:` |
| `lg` | 840px | `lg:` |
| `xl` | 1280px | `xl:` |

### 4.3 容器

- 透過 Tailwind `container` 置中
- `xl` 最大寬度：**1156px**
- 典型水平內距：手機 `px-5`，桌面 `md:px-7`

### 4.4 圓角

| Token | 數值 | Tailwind | 用途 |
|-------|------|----------|------|
| `1` | 2px | `rounded-1` | — |
| `2` | 4px | `rounded-2` | 小標籤、頭像 |
| `3` | 8px | `rounded-3` | **預設卡片圓角** |
| `4` | 12px | `rounded-4` | — |
| `5` | 16px | `rounded-5` | 較大面板 |
| `pill` / `circle` | 999px | `rounded-pill` / `rounded-circle` | 按鈕、圓形頭像 |

### 4.5 頁面外殼

參考：`app/layout.tsx`

- Header 偏移：`pt-[80px] md:pt-[88px] lg:pt-[94px]`
- 頁面最小高度：`min-h-screen`
- Hero 高度：`h-[calc(100vh-{header})]`，並設 `lg:min-h-[780px]` 下限

---

## 5. 層級與陰影

| Token | Tailwind | 用途 |
|-------|----------|------|
| `action` | `shadow-action` | 淡淡的內陰影 |
| `fixed` | `shadow-fixed` | 微微浮起的區塊 |
| `raise` | `shadow-raise` | 卡片、彈窗 |
| `overlay` | `shadow-overlay` | 選單、上層覆蓋 |

陰影宜淡，不可搶過文字。介紹性內容區盡量保持扁平，少疊陰影。

---

## 6. 元件

**先重用再新建。** 共用元件位於 `nextjs-app/components/common/`。

### 6.1 按鈕（Button）

**檔案：** `components/common/Button/Button.tsx`

| Prop | 可選值 | 預設 |
|------|--------|------|
| `variant` | `filled` · `outline` | `filled` |
| `color` | `blue` · `golden` | `blue` |
| `paddingSize` | `default` · `with-icon` | `default` |

**結構：** 膠囊形狀 · 文字 · **右側圓點**（14px 圓形，5px 邊框）

| 狀態 | 樣式 |
|------|------|
| 實心藍 | `bg-blue-7` → hover `bg-blue-9`，白字 |
| 實心金 | `bg-yellow-6` → hover `bg-yellow-8`，白字 |
| 外框 | 白底、品牌色邊框/文字，圓點邊框同步 |
| 停用 | `bg-neutral-2`、`text-neutral-5`、`pointer-events-none` |
| 過渡 | 背景/邊框 `duration-300` |

專用包裝：`RegisterNavigatorButton`、`RegisterSailorButton`。

### 6.2 Header 與導覽

**檔案：** `components/common/Header/Header.tsx`

| 行為 | 細節 |
|------|------|
| 定位 | `fixed top-0 z-40` |
| 捲動 | 向下捲動時隱藏、向上捲動時顯示（超過 50px 後生效） |
| 首頁頂部 | 透明背景、無邊框 |
| 捲動後 / 內頁 | 白底、`md:border-b-neutral-2` |
| 桌面導覽 | 雙行項目：EB Garamond 英文 + 無襯線中文 |
| Hover | `bg-yellow-2` 底線條（`h-1`，底部） |
| 子選單 | 白底下拉、`hover:bg-yellow-1`、羅盤圖示 |
| 手機 | `HamburgerButton` + `MobileCollapseMenu` |
| 社群圖示 | `text-neutral-10` → hover `text-yellow-6` |

`NavItem` 是較簡化的雙行連結版本，用於其他情境。

### 6.3 卡片與面板

| 元件 | 檔案 | 主要樣式 |
|------|------|----------|
| `InfoCard` | `common/InfoCard.tsx` | `rounded-3`、白或 `bg-blue-1`、可選 `border-yellow-6`、序號徽章 |
| `ProfileCard` | `common/ProfileCard.tsx` | `bg-blue-1 rounded-3`、圓形照片、姓名 `text-yellow-6` |
| `ReviewCard` | `common/ReviewCard.tsx` | 白底、`border-neutral-2`、`rounded-3` |
| `PageNavigationCard` | `common/PageNavigationCard.tsx` | 跨頁導覽 |
| `ComingSoonCard` | `common/ComingSoonCard.tsx` | 尚未上線的佔位畫面 |

**卡片預設：** 白或 `blue-1` 底色 · `rounded-3` · 需要層次時用淡陰影 · 不用光暈或模糊效果。

### 6.4 標籤與篩選

| 元件 | 樣式 |
|------|------|
| `HashTag` | `rounded-pill bg-blue-2 text-body-sm`，`#` 前綴 |
| `TagFilter` | 分割面板：`bg-neutral-1` 標籤區 + 白色選項區，`peer-checked:bg-blue-1` |

### 6.5 區塊與裝飾

| 元件 | 用途 |
|------|------|
| `SectionTitle` | 標準區塊標題 |
| `MarqueeTitle` / `MarqueeContainer` | 水平迴圈標題 |
| `Wave` | 頁尾/區塊波浪分隔（`blue8` 等） |
| `Footer` | `bg-blue-8`、白字、頂部波浪、社群 outline 圖示 |
| `FAQItem` | 對話泡泡 FAQ |
| `Breadcrumb` | 麵包屑導覽 |
| `GroupLabel` | 團隊/群組標籤 |
| `AnimatedNumber` | 數字動畫統計 |
| `CountdownTimer` | 活動倒數 |
| `SloganPopup` | 提示標語彈窗 |

### 6.6 表單控制項

| 元件 | 檔案 |
|------|------|
| `Select` | `common/Select/Select.tsx` |

新增輸入元件時，邊框（`neutral-2`）、圓角（`rounded-3`）、文字（`body-md`）須與現有一致。

---

## 7. 影像與圖示

- 攝影風格：導師、成長、旅程 — 明亮沉穩，避免陰暗戲劇化。
- Hero 與關鍵區塊維持船/浪/航線視覺語言。
- Logo 版本：`public/images/program-logo/`（header、footer、白字版）。
- 社群圖示：header 用 filled、footer 用 outline。
- 區塊分隔線：`public/images/title-symbol-line.png`（含白色版本）。

---

## 8. 動態與互動

### 風格

緩慢、連續、不搶眼。避免快速彈跳、閃爍或誇張過場。

### 標誌性動畫（tailwind.config.ts）

| Class | 時長 | 用途 |
|-------|------|------|
| `animate-marquee-first-layer` | 180s linear | 標題跑馬燈 |
| `animate-marquee-container-first-layer` | 240s linear | 容器跑馬燈 |
| `animate-fade-in-out` | 6000ms | 單次淡入淡出 |

另有反向版本，可做雙向迴圈。

### 時長指引

| 互動 | 時長 |
|------|------|
| Hover（按鈕、連結） | 250–350ms（程式碼中 `duration-300`） |
| Header 顯隱 | 300ms |
| 背景迴圈 | 180–240s linear |

### 無障礙

新互動須尊重 `prefers-reduced-motion`（使用者關閉動畫時仍須看得懂）。不能靠動畫才能理解內容。

### 觸控目標

手機互動控制項最小高度約 40px。

---

## 9. 響應式模式

手機優先設計。常見切換：

| 模式 | 手機 | 桌面（`lg:`） |
|------|------|---------------|
| 導覽 | 漢堡選單 | 完整水平導覽 |
| 區塊標題 | `text-h5` / `text-h3-title` | `text-h4` / `text-h1-title` |
| 標籤篩選 | 上下堆疊圓角 | 水平分割面板 |
| Hero 圖 | 依斷點使用不同素材 | — |
| 頁尾 Logo | 較小寬度 | 完整寬度 |

背景圖上的文字可讀性永遠優先。

---

## 10. 建議與禁止

### 建議（Do）

- 以信任與清楚閱讀為首要。
- 藍色用於主要操作；黃色用於導師相關強調。
- 重用 `components/common` 與 token class。
- 動效維持網站一致的輕柔風格（見第 8 節「動態與互動」）。
- CTA 外觀統一（膠囊形 + 右側圓點）。

### 禁止（Don't）

- 自己亂訂顏色 hex 或間距數值。
- 使用霓虹色或過飽和漸層。
- 把內文字體換成流行展示字體。
- 在介紹、故事類區塊塞滿小格子或數據牆（像後台報表那樣）。
- 使用過快、過炫的動畫，或厚重的模糊、光暈效果。

---

## 11. Agent 工作流程

見 [`AGENTS.md`](./AGENTS.md)。

---

## 12. 檔案對照

| 關注點 | 路徑 |
|--------|------|
| 設計 Token | `nextjs-app/design-system/data/token.json` |
| Token → Tailwind | `nextjs-app/design-system/util/transferTokenToTailwindStyles.ts` |
| Tailwind 設定 | `nextjs-app/tailwind.config.ts` |
| 全域 CSS | `nextjs-app/app/globals.css` |
| 字體載入 | `nextjs-app/app/layout.tsx` |
| 共用元件 | `nextjs-app/components/common/` |
| 頁面區塊 | `nextjs-app/components/pages/` |
| Agent 規則 | `AGENTS.md` |
