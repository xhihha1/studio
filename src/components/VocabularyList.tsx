"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import * as Adverb from "@/vocabulary/adverb";
import * as Conjunction from "@/vocabulary/conjunction";
import * as Greeting from "@/vocabulary/greeting";
import * as Noun from "@/vocabulary/noun";
import * as NumberVocabulary from "@/vocabulary/number";
import * as Preposition from "@/vocabulary/preposition";
import * as Pronoun from "@/vocabulary/pronoun";
import * as Time from "@/vocabulary/time";
import * as Verb from "@/vocabulary/verb";
import * as Color from "@/vocabulary/color";
import * as Animal from "@/vocabulary/animal";
import { Vocabulary } from "@/types";

type VocabularyItem = Vocabulary
export const vocabularyOptions: string[] = ["adverb", "conjunction", "greeting", "noun", "number", "preposition", "pronoun", "time", "verb", "color", "animal"];

const vocabularyData: { [key: string]: VocabularyItem[] } = {
  "adverb": Adverb.default,
  "conjunction": Conjunction.default,
  "greeting": Greeting.default,
  "noun": Noun.default,
  "number": NumberVocabulary.default,
  "preposition": Preposition.default,
  "pronoun": Pronoun.default,
  "time": Time.default,
  "verb": Verb.default,
  "color": Color.default,
  "animal": Animal.default,

};

interface VocabularyListProps {
  selectedVocabulary: string;
  onSelectVocabulary: (vocabulary: string) => void;
  onPronunciation: (text: string) => void;
}

const VocabularyList: React.FC<VocabularyListProps> = ({selectedVocabulary, onSelectVocabulary, onPronunciation}) => {
  const currentVocabulary = vocabularyData[selectedVocabulary] || [];

  if (!currentVocabulary || currentVocabulary.length === 0) {
    return <p>No vocabulary words found.</p>;
  }

  const headers = Object.keys(currentVocabulary[0]);

  return (
    <div className="overflow-x-auto">
        <div className="mb-4">
            <Select onValueChange={onSelectVocabulary} defaultValue={selectedVocabulary}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select vocabulary" />
                </SelectTrigger>
                <SelectContent>
                    {vocabularyOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
          {headers.map(header => (
            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {header}
            </th>
          ))}
          <th>Pronunciation</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
        {currentVocabulary.map((item, index) => (
          <tr key={index.toString()}>
            {headers.map(header => (
              <td key={`${index}-${header}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item[header] ? item[header] : '-'}
              </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <Button onClick={() => onPronunciation(item["vietnamese"])} variant="outline">Pronounce</Button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default VocabularyList;

