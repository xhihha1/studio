'use client'

import VocabularyList from '@/components/VocabularyList';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import {TranslateWordInput, translateWord} from '@/ai/flows/translate-word';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useEffect, useState} from 'react';
import greeting from '@/vocabulary/greeting';
import pronoun from '@/vocabulary/pronoun';
import verb from '@/vocabulary/verb';
import noun from '@/vocabulary/noun';
import time from '@/vocabulary/time';
import number from '@/vocabulary/number';
import adverb from '@/vocabulary/adverb';
import preposition from '@/vocabulary/preposition';
import conjunction from '@/vocabulary/conjunction';

type VocabularyItem = {
  Vietnamese: string;
  Chinese: string;
  Example: string;
  Translation: string;
  Category: string;
};

const initialVocabulary: VocabularyItem[] = [
  ...greeting,
  ...pronoun,
  ...verb,
  ...noun,
  ...time,
  ...number,
  ...adverb,
  ...preposition,
  ...conjunction,
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

  const handlePronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN'; // Set the language to Vietnamese
      synth.speak(utterance);
    } else {
      console.error("Speech synthesis is not supported in this browser.");
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
            <h1 className="text-2xl font-bold mb-4">
                {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
            </h1>

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
