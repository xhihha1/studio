interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const conjunction: VocabularyItem[] = [
  {
    Vietnamese: "và",
    Chinese: "和",
    Example: "Tôi và bạn.",
    Translation: "我和你。",
    Category: "連接詞",
  },
  {
    Vietnamese: "nhưng",
    Chinese: "但是",
    Example: "Tôi muốn đi nhưng không có thời gian.",
    Translation: "我想去但是沒有時間。",
    Category: "連接詞",
  },
  {
    Vietnamese: "hoặc",
    Chinese: "或者",
    Example: "Bạn muốn ăn táo hoặc cam?",
    Translation: "你想吃蘋果或者橘子？",
    Category: "連接詞",
  },
];

export default conjunction;