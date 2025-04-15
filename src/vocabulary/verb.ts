export interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const verbs: VocabularyItem[] = [
  {
    Vietnamese: "ăn",
    Chinese: "吃",
    Example: "Tôi muốn ăn cơm.",
    Translation: "我想吃飯。",
    Category: "動詞",
  },
  {
    Vietnamese: "uống",
    Chinese: "喝",
    Example: "Uống trà không?",
    Translation: "要喝茶嗎？",
    Category: "動詞",
  },
  {
    Vietnamese: "học",
    Chinese: "學",
    Example: "Tôi học tiếng Việt.",
    Translation: "我學越南語。",
    Category: "動詞",
  },
];

export default verbs;