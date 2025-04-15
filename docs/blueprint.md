# **App Name**: VietVocab

## Core Features:

- Vocabulary List: Display a list of vocabulary words, grouped by category, loaded from CSV or JSON files.
- Dynamic Table Display: Display each word with its Vietnamese spelling, Chinese translation, example sentence, and example sentence translation in a tabular format. Dynamically adjust the table headers based on the fields present in the data file.
- Bilingual Search: Implement a search bar to allow users to search for words in both Vietnamese and Chinese. Highlight search results and indicate the category the word belongs to.
- Pronunciation: Add a play button next to each Vietnamese word and example sentence to trigger the pronunciation using a text-to-speech API.
- AI Translation: Use AI tool to help users to automatically translate Vietnamese words or sentences to another language, if the user want to. 

## Style Guidelines:

- Primary color: Light green (#A7D1AB) to evoke a sense of freshness and growth.
- Secondary color: Light beige (#E5DDC8) for a neutral background.
- Accent: Gold (#FFD700) for highlighting important elements like pronunciation buttons and search results.
- Clean and readable sans-serif font for both Vietnamese and Chinese characters.
- Simple and intuitive icons for navigation and actions (e.g., play button, search icon).
- Responsive layout that adapts to different screen sizes, with a card-based layout for mobile devices.
- Subtle animations for transitions and interactions, such as highlighting a row when a word is played.

## Original User Request:
# 建立一個越南語發音學習網站
## 🔧 功能需求規格

### 1. 首頁（分類瀏覽）
- 顯示所有單字檔的分類（從資料目錄或 metadata 自動生成）
- 每個分類是一個連結，點擊可進入對應單字列表頁
- 支援簡易搜尋欄（跨分類搜尋）

### 2. 單字分類頁面
- 顯示該分類的所有條目（由對應的文字檔載入）
- 支援表格形式呈現：  
  | 越南語 | 中文翻譯 | 例句 | 例句翻譯 | ▶️ 發音按鈕（字/例句） |
- 若欄位不一致（如句型說明），能動態根據該檔案的欄位顯示對應表頭與資料欄位

### 3. 全站搜尋功能
- 支援中越雙語搜尋
- 搜尋結果顯示所有匹配的項目，標示來源分類
- 顯示格式與分類頁相同

### 4. 新增單字資料
- 管理者介面或簡易上傳功能（例如可選擇檔案上傳，或透過表單輸入）
- 支援：
  - 單筆新增（表單）
  - 批次新增（CSV 或 JSON 上傳）
- 自動根據欄位產生 UI 表格欄位

### 5. 發音功能
- 使用 Web Speech API 或第三方語音 API（建議 Google TTS、iSpeech、ResponsiveVoice 等）
- 每個越南語詞彙與例句右側顯示「🔊」按鈕，點擊播放

---

## 📁 資料格式建議（CSV or JSON）

### 📄 通用文字檔（CSV）
```csv
越南語,中文翻譯,例句,例句翻譯
trái táo,蘋果,Tôi ăn một trái táo.,我吃了一顆蘋果。
```

### 📄 句型說明類型（JSON）
```json
[
  {
    "句型": "Tôi + 動詞 + 目的語",
    "說明": "表達我正在做某件事，例如：Tôi học tiếng Việt.",
    "例句": "Tôi học tiếng Việt.",
    "翻譯": "我學越南語。"
  }
]
```

---

## 🖥️ UI/UX 建議

### 使用框架
- 前端：Vue 3 + Pinia 或 React + Zustand（可支援動態欄位與搜尋）
- 表格呈現：可考慮用 [AG Grid](https://www.ag-grid.com/) 或 [Vuetify DataTable]
- 語音播放：HTML `<audio>` 或 JavaScript 語音合成（SpeechSynthesis API）

### 響應式設計
- 手機/桌機友好顯示（條列轉為卡片）
- 發音按鈕放在字詞下方

---

## 🛠 技術建議

### 資料儲存
- 初期使用：文字檔（CSV/JSON）儲存在 GitHub / 本地
- 中期可轉為：Firebase、Google Sheet API 或 SQLite 作為資料庫

### 部署方式
- 靜態網站：使用 Nuxt 或 Next.js + GitHub Pages/Netlify
- 或後端 API + 前端分離架構（Node.js + Express）

---

## ✨ 延伸功能（可選）

| 功能名稱 | 說明 |
|----------|------|
| 使用者標記 | 可以對單字做「已學習」「困難」「加入我的收藏」等標記 |
| 自訂學習清單 | 依使用者標記產生學習清單 |
| 分類圖片 | 每個分類加上代表圖片（例如「食物」加餐具圖） |
| 音調顯示 | 顯示越南語的聲調或標記（加強初學者學習） |
| 小遊戲/測驗模式 | 用於記憶單字、選擇題練習 |

---

如果你需要，我可以幫你：
- 建立初步的 Vue3 專案骨架
- 規劃資料格式樣板
- 撰寫語音播放模組
- 撰寫分類讀取和動態欄位的表格元件
  