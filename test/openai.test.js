const { promptValidator } = require('../src/modals/openai');
describe('promptValidator', () => {
  test('returns a valid response for a valid prompt', async () => {
    const apiKey = 'your-openai-api-key';
    const prompt = 'This is a test prompt';
    const response = await promptValidator(apiKey, prompt);
    expect(response).toBeDefined();
  });
});
