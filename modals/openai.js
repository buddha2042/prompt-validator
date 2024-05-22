const {
    OpenAI
} = require('openai');


async function promptValidator(key, prompt) {
    const openai = new OpenAI({
        apiKey: key
    });
    try {
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "user",
                content: prompt
            }],
            model: "gpt-3.5-turbo",
        });
        const responseText = completion.choices[0].message.content;
        return responseText
    } catch (error) {
        throw new Error(`Error generating text: ${error.message}`);
    }
}


module.exports = {
    promptValidator
};