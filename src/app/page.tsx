'use client'

import VocabularyList from '@/components/VocabularyList';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import {textToSpeech} from '@/services/text-to-speech';
import {useEffect, useState} from 'react';
import {TranslateWordInput, translateWord} from '@/ai/flows/translate-word';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';

const initialVocabulary = [
  {
    "Vietnamese": "Xin chào",
    "Chinese": "你好",
    "Example": "Xin chào, bạn khỏe không?",
    "Translation": "你好，你好嗎？",
    "Category": "問候"
  },
  {
    "Vietnamese": "Cảm ơn",
    "Chinese": "謝謝",
    "Example": "Cảm ơn bạn rất nhiều.",
    "Translation": "非常感謝你。",
    "Category": "問候"
  },
  {
    "Vietnamese": "Tạm biệt",
    "Chinese": "再見",
    "Example": "Tạm biệt, hẹn gặp lại.",
    "Translation": "再見，下次見。",
    "Category": "問候"
  },
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
  },
  {
    "Vietnamese": "ăn",
    "Chinese": "吃",
    "Example": "Tôi muốn ăn cơm.",
    "Translation": "我想吃飯。",
    "Category": "動詞"
  },
  {
    "Vietnamese": "uống",
    "Chinese": "喝",
    "Example": "Uống trà không?",
    "Translation": "要喝茶嗎？",
    "Category": "動詞"
  },
  {
    "Vietnamese": "học",
    "Chinese": "學",
    "Example": "Tôi học tiếng Việt.",
    "Translation": "我學越南語。",
    "Category": "動詞"
  },
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
  },
  {
    "Vietnamese": "hôm nay",
    "Chinese": "今天",
    "Example": "Hôm nay trời đẹp.",
    "Translation": "今天天氣很好。",
    "Category": "時間"
  },
  {
    "Vietnamese": "ngày mai",
    "Chinese": "明天",
    "Example": "Ngày mai tôi sẽ đi du lịch.",
    "Translation": "明天我要去旅行。",
    "Category": "時間"
  },
  {
    "Vietnamese": "hôm qua",
    "Chinese": "昨天",
    "Example": "Hôm qua tôi đã rất vui.",
    "Translation": "我昨天很開心。",
    "Category": "時間"
  },
  {
    "Vietnamese": "một",
    "Chinese": "一",
    "Example": "Tôi có một con mèo.",
    "Translation": "我有一隻貓。",
    "Category": "數字"
  },
  {
    "Vietnamese": "hai",
    "Chinese": "二",
    "Example": "Chúng tôi có hai người.",
    "Translation": "我們有兩個人。",
    "Category": "數字"
  },
  {
    "Vietnamese": "ba",
    "Chinese": "三",
    "Example": "Có ba quyển sách trên bàn.",
    "Translation": "桌上有三本書。",
    "Category": "數字"
  },
  {
    "Vietnamese": "rất",
    "Chinese": "很",
    "Example": "Tôi rất vui.",
    "Translation": "我很高興。",
    "Category": "副詞"
  },
  {
    "Vietnamese": "không",
    "Chinese": "不",
    "Example": "Tôi không hiểu.",
    "Translation": "我不明白。",
    "Category": "副詞"
  },
  {
    "Vietnamese": "cũng",
    "Chinese": "也",
    "Example": "Tôi cũng vậy.",
    "Translation": "我也是。",
    "Category": "副詞"
  },
  {
    "Vietnamese": "ở",
    "Chinese": "在",
    "Example": "Tôi ở nhà.",
    "Translation": "我在家裡。",
    "Category": "介詞"
  },
  {
    "Vietnamese": "trên",
    "Chinese": "在...上面",
    "Example": "Quyển sách ở trên bàn.",
    "Translation": "書在桌子上面。",
    "Category": "介詞"
  },
  {
    "Vietnamese": "dưới",
    "Chinese": "在...下面",
    "Example": "Con mèo ở dưới ghế.",
    "Translation": "貓在椅子下面。",
    "Category": "介詞"
  },
  {
    "Vietnamese": "và",
    "Chinese": "和",
    "Example": "Tôi và bạn.",
    "Translation": "我和你。",
    "Category": "連接詞"
  },
  {
    "Vietnamese": "nhưng",
    "Chinese": "但是",
    "Example": "Tôi muốn đi nhưng không có thời gian.",
    "Translation": "我想去但是沒有時間。",
    "Category": "連接詞"
  },
  {
    "Vietnamese": "hoặc",
    "Chinese": "或者",
    "Example": "Bạn muốn ăn táo hoặc cam?",
    "Translation": "你想吃蘋果或者橘子？",
    "Category": "連接詞"
  }
];

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [vocabulary, setVocabulary] = useState(initialVocabulary);
  const [categories, setCategories] = useState([...new Set(initialVocabulary.map(item => item.Category))]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [speakingText, setSpeakingText] = useState('');
  const [translation, setTranslation] = useState('');

  const [textToTranslate, setTextToTranslate] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Chinese');

  useEffect(() => {
    setCategories(['All', ...new Set(initialVocabulary.map(item => item.Category))]);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredVocabulary = selectedCategory === 'All'
    ? vocabulary.filter(item =>
      Object.values(item).some((value: any) =>
        typeof value === 'string' && value.toLowerCase().includes(searchText.toLowerCase())
      )
    )
    : vocabulary.filter(
      item =>
        item.Category === selectedCategory &&
        Object.values(item).some((value: any) =>
          typeof value === 'string' && value.toLowerCase().includes(searchText.toLowerCase())
        )
    );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePronunciation = async (text: string) => {
    setSpeakingText(text);
    try {
      const audio = await textToSpeech(text);
      const audioURL = URL.createObjectURL(new Blob([audio], {type: 'audio/mpeg'}));
      const audioElement = new Audio(audioURL);
      audioElement.play();
    } catch (error) {
      console.error("Error during text-to-speech:", error);
    }
  };

  const handleTranslate = async () => {
    try {
      const input: TranslateWordInput = {
        text: textToTranslate,
        targetLanguage: targetLanguage,
      };
      const result = await translateWord(input);
      setTranslation(result.translation);
    } catch (error) {
      console.error("Error during translation:", error);
      setTranslation('Translation failed.');
    }
  };

  return (
    <SidebarProvider>
      <div className="md:pl-64">
        <Sidebar className="w-64">
          <SidebarHeader>
            <div>VietVocab</div>
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => handleCategoryChange('All')}>All Categories</SidebarMenuButton>
            </SidebarMenuItem>
            {categories.filter(cat => cat !== 'All').map(category => (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton onClick={() => handleCategoryChange(category)}>{category}</SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarFooter>
            <p>Footer content</p>
          </SidebarFooter>
        </Sidebar>
        <SidebarContent>
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search vocabulary..."
              value={searchText}
              onChange={handleSearch}
            />
            <div className="mt-4">
              <VocabularyList vocabulary={filteredVocabulary} onPronunciation={handlePronunciation}/>
            </div>

            <div className="mt-4">
              <Label htmlFor="textToTranslate">Text to Translate:</Label>
              <Textarea
                id="textToTranslate"
                value={textToTranslate}
                onChange={(e) => setTextToTranslate(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <Label htmlFor="targetLanguage">Target Language:</Label>
              <Input
                type="text"
                id="targetLanguage"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              />
            </div>

            <Button className="mt-2" onClick={handleTranslate}>Translate</Button>

            {translation && (
              <div className="mt-4">
                <Label>Translation:</Label>
                <p>{translation}</p>
              </div>
            )}
          </div>
        </SidebarContent>
      </div>
    </SidebarProvider>
  );
}
