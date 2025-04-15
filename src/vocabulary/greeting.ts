export interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const greetings: VocabularyItem[] = [
  {
    Vietnamese: "Xin chào",
    Chinese: "你好",
    Example: "Xin chào, bạn khỏe không?",
    Translation: "你好，你好嗎？",
    Category: "問候",
  },
  {
    Vietnamese: "Cảm ơn",
    Chinese: "謝謝",
    Example: "Cảm ơn bạn rất nhiều.",
    Translation: "非常感謝你。",
    Category: "問候",
  },
  {
    Vietnamese: "Tạm biệt",
    Chinese: "再見",
    Example: "Tạm biệt, hẹn gặp lại.",
    Translation: "再見，下次見。",
    Category: "問候",
  },
];

export default greetings;