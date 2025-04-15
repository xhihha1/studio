'use client'
import { vocabularyOptions } from "@/components/VocabularyList";
import VocabularyList from "@/components/VocabularyList";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { TranslateWordInput, translateWord } from "@/ai/flows/translate-word";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [translation, setTranslation] = useState('');
  const [textToTranslate, setTextToTranslate] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Chinese');
  const [selectedVocabulary, setSelectedVocabulary] = useState("noun");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSelectVocabulary = (vocabulary: string) => {
    setSelectedVocabulary(vocabulary);
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
            {vocabularyOptions.map((option) => (
              <SidebarMenuItem key={option}>
                <SidebarMenuButton
                  onClick={() => handleSelectVocabulary(option)}
                >
                  {option}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarFooter>
            <p>Footer content</p>
          </SidebarFooter>
        </Sidebar>
        <SidebarContent>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Vocabulary</h1>

            <Input
              type="text"
              placeholder="Search vocabulary..."
              value={searchText}
              onChange={handleSearch}
            />            
            <VocabularyList
              key={selectedVocabulary}
              selectedVocabulary={selectedVocabulary}
              onSelectVocabulary={handleSelectVocabulary}
              onPronunciation={handlePronunciation}
            />
            

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
