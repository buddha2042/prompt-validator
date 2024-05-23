const { promptValidator } = require('../src/modals/openai');


describe('promptValidator', () => {
  test('returns a valid response for a valid prompt', async () => {
    const key = 'your_api_key'
    const prompt = 'This is a test prompt';
    const response = await promptValidator(key, prompt);
    expect(response).toBeDefined();
  });
});
