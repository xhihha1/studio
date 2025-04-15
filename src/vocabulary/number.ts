export interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const numbers: VocabularyItem[] = [
  {
    Vietnamese: "một",
    Chinese: "一",
    Example: "Tôi có một con mèo.",
    Translation: "我有一隻貓。",
    Category: "數字",
  },
  {
    Vietnamese: "hai",
    Chinese: "二",
    Example: "Chúng tôi có hai người.",
    Translation: "我們有兩個人。",
    Category: "數字",
  },
  {
    Vietnamese: "ba",
    Chinese: "三",
    Example: "Có ba quyển sách trên bàn.",
    Translation: "桌上有三本書。",
    Category: "數字",
  },
];

export default numbers;