import OpenAI from 'openai';

interface OpenAICompletionResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function promptValidator(key: string, prompt: string): Promise<string> {
  const openai = new OpenAI({ apiKey: key });
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: prompt }]
    }) as OpenAICompletionResponse;

    const responseText = completion.choices[0].message.content;
    return responseText;
  } catch (error: any) { 
    throw new Error(`Error generating text: ${error.message}`);
  }
}
