interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const noun: VocabularyItem[] = [
  {
    "Vietnamese": "nhà",
    "Chinese": "家",
    "Example": "Đây là nhà của tôi.",
    "Translation": "這是我家。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "sách",
    "Chinese": "書",
    "Example": "Tôi đang đọc sách.",
    "Translation": "我正在讀書。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "bàn",
    "Chinese": "桌子",
    "Example": "Trên bàn có một quyển sách.",
    "Translation": "桌上有一本書。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "ghế",
    "Chinese": "椅子",
    "Example": "Tôi ngồi trên ghế.",
    "Translation": "我坐在椅子上。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "máy tính",
    "Chinese": "電腦",
    "Example": "Tôi làm việc trên máy tính.",
    "Translation": "我在電腦上工作。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "điện thoại",
    "Chinese": "電話",
    "Example": "Tôi có một chiếc điện thoại mới.",
    "Translation": "我有一支新電話。",
    "Category": "名詞"
  },
  {
    "Vietnamese": "thời gian",
    "Chinese": "時間",
    "Example": "Tôi không có nhiều thời gian.",
    "Translation": "我沒有很多時間。",
    "Category": "名詞"
  }
];

export default noun;