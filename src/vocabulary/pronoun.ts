export interface VocabularyItem {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
}

const pronouns: VocabularyItem[] = [
  {
    "Vietnamese": "Tôi",
    "Chinese": "我",
    "Example": "Tôi là sinh viên.",
    "Translation": "我是學生。",
    "Category": "人稱代詞"
  },
  {
    "Vietnamese": "Bạn",
    "Chinese": "你",
    "Example": "Bạn tên là gì?",
    "Translation": "你叫什麼名字？",
    "Category": "人稱代詞"
  },
  {
    "Vietnamese": "Ông",
    "Chinese": "先生",
    "Example": "Chào ông!",
    "Translation": "先生您好！",
    "Category": "人稱代詞"
  },
  {
    "Vietnamese": "Bà",
    "Chinese": "女士",
    "Example": "Chào bà!",
    "Translation": "女士您好！",
    "Category": "人稱代詞"
  }
];

export default pronouns;