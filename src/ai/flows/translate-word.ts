'use server';
/**
 * @fileOverview A translation AI agent.
 *
 * - translateWord - A function that handles the translation process.
 * - TranslateWordInput - The input type for the translateWord function.
 * - TranslateWordOutput - The return type for the translateWord function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const TranslateWordInputSchema = z.object({
  text: z.string().describe('The Vietnamese word or sentence to translate.'),
  targetLanguage: z.string().describe('The language to translate the text to.'),
});
export type TranslateWordInput = z.infer<typeof TranslateWordInputSchema>;

const TranslateWordOutputSchema = z.object({
  translation: z.string().describe('The translated text.'),
});
export type TranslateWordOutput = z.infer<typeof TranslateWordOutputSchema>;

export async function translateWord(input: TranslateWordInput): Promise<TranslateWordOutput> {
  return translateWordFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateWordPrompt',
  input: {
    schema: z.object({
      text: z.string().describe('The Vietnamese word or sentence to translate.'),
      targetLanguage: z.string().describe('The language to translate the text to.'),
    }),
  },
  output: {
    schema: z.object({
      translation: z.string().describe('The translated text.'),
    }),
  },
  prompt: `Translate the following Vietnamese text to {{targetLanguage}}:\n\n{{text}}`,
});

const translateWordFlow = ai.defineFlow<
  typeof TranslateWordInputSchema,
  typeof TranslateWordOutputSchema
>(
  {
    name: 'translateWordFlow',
    inputSchema: TranslateWordInputSchema,
    outputSchema: TranslateWordOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
