"use client"

import React from 'react';
import {Button} from "@/components/ui/button";

interface VocabularyItem {
  [key: string]: string;
}

interface VocabularyListProps {
  vocabulary: VocabularyItem[];
  onPronunciation: (text: string) => void;
}

const VocabularyList: React.FC<VocabularyListProps> = ({vocabulary, onPronunciation}) => {
  if (!vocabulary || vocabulary.length === 0) {
    return <p>No vocabulary words found.</p>;
  }

  const headers = Object.keys(vocabulary[0]);

  return (
    <div className="overflow-x-auto">
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
        <tbody className="bg-white divide-y divide-gray-200">
        {vocabulary.map((item, index) => (
          <tr key={index}>
            {headers.map(header => (
              <td key={`${index}-${header}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item[header]}
              </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <Button onClick={() => onPronunciation(item["Vietnamese"])} variant="outline">Pronounce</Button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default VocabularyList;
