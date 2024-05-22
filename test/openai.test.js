const { promptValidator } = require('../modals/openai');

describe('promptValidator', () => {
    test('returns a valid response for a valid prompt', async () => {
        const apiKey = 'your_api_key';
        const prompt = 'How are you doing today?';
        const response = await promptValidator(apiKey, prompt);
        expect(response).toBeDefined();
     
    })
});
