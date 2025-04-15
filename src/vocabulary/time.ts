interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const time: VocabularyItem[] = [
  {
    Vietnamese: "hôm nay",
    Chinese: "今天",
    Example: "Hôm nay trời đẹp.",
    Translation: "今天天氣很好。",
    Category: "時間",
  },
  {
    Vietnamese: "ngày mai",
    Chinese: "明天",
    Example: "Ngày mai tôi sẽ đi du lịch.",
    Translation: "明天我要去旅行。",
    Category: "時間",
  },
  {
    Vietnamese: "hôm qua",
    Chinese: "昨天",
    Example: "Hôm qua tôi đã rất vui.",
    Translation: "我昨天很開心。",
    Category: "時間",
  },
];

export default time;