interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const preposition: VocabularyItem[] = [
  {
    Vietnamese: "ở",
    Chinese: "在",
    Example: "Tôi ở nhà.",
    Translation: "我在家裡。",
    Category: "介詞",
  },
  {
    Vietnamese: "trên",
    Chinese: "在...上面",
    Example: "Quyển sách ở trên bàn.",
    Translation: "書在桌子上面。",
    Category: "介詞",
  },
  {
    Vietnamese: "dưới",
    Chinese: "在...下面",
    Example: "Con mèo ở dưới ghế.",
    Translation: "貓在椅子下面。",
    Category: "介詞",
  },
];

export default preposition;