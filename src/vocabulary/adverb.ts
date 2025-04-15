export interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const adverb: VocabularyItem[] = [
  {
    Vietnamese: "rất",
    Chinese: "很",
    Example: "Tôi rất vui.",
    Translation: "我很高興。",
    Category: "副詞",
  },
  {
    Vietnamese: "không",
    Chinese: "不",
    Example: "Tôi không hiểu.",
    Translation: "我不明白。",
    Category: "副詞",
  },
  {
    Vietnamese: "cũng",
    Chinese: "也",
    Example: "Tôi cũng vậy.",
    Translation: "我也是。",
    Category: "副詞",
  },
];

export default adverb;