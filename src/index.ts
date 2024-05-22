
import { promptValidator } from './modals/openai';
const teacher = require('../teacher/validateMessage.json').instruction;

export async function validatePrompt(apiKey: string, question: string): Promise<string> {
  if (!apiKey) {
    throw new Error('API key is required');
  }
  if (!question) {
    throw new Error('Question is required');
  }

  const prompt = `${teacher}, Here is the message ---- ${question}`;
  try {
    const response = await promptValidator(apiKey, prompt);
    return response;
  } catch (error: any) {  // casting error to any
    throw new Error(`Failed to validate prompt: ${error.message}`);
  }
}
