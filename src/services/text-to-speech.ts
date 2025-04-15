/**
 * Asynchronously converts text to speech and returns the audio as a buffer.
 *
 * @param text The text to be converted to speech.
 * @returns A promise that resolves to a Buffer containing the audio data.
 */
export async function textToSpeech(text: string): Promise<Buffer> {
  try {
    const apiKey = process.env.GOOGLE_CLOUD_API_KEY; // Ensure you have this set in .env
    if (!apiKey) {
      throw new Error("Google Cloud API key is not set in environment variables.");
    }

    const ttsRequest = {
      input: { text: text },
      voice: { languageCode: 'vi-VN', ssmlGender: 'MALE' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ttsRequest),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
    }

    const data = await response.json();
    const audioContent = data.audioContent;

    if (!audioContent) {
      throw new Error("No audio content returned from the TTS API.");
    }

    const audioBuffer = Buffer.from(audioContent, 'base64');
    return audioBuffer;
  } catch (error: any) {
    console.error('Error during text-to-speech:', error);
    throw error;
  }
}

