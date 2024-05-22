const { Configuration, OpenAIApi } = require("openai");
const { promptValidator } = require("./modals/openai");
const teacher = require("./teacher/validateMessage.json").instruction;

async function validatePrompt(apiKey, question) {
  if (!apiKey) {
    throw new Error("API key is required");
  }
  if (!question) {
    throw new Error("Question is required");
  }

  const prompt = `${teacher}, Here is the message ---- ${message}`;
  try {
    const response = await promptValidator(apiKey, prompt);
    return response;
  } catch (error) {
    throw new Error(`Failed to validate prompt: ${error.message}`);
  }
}

module.exports = {
  validatePrompt
};
