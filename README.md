<!-- ABOUT THE PROJECT -->
[![npm version](https://img.shields.io/npm/v/prompt-validator.svg)](https://www.npmjs.com/package/prompt-validator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## About The Project

Prompt Validator is a Node.js package designed to validate OpenAI prompts for high levels of violation. It utilizes the OpenAI API to analyze prompts and detect potential violations such as hate speech, inappropriate content, or other harmful material. This package aims to assist developers in ensuring that their AI-generated content meets moderation guidelines and ethical standards.

### Built With

- NodeJS

<!-- GETTING STARTED -->

## Getting Started

To install Prompt Validator, simply run:

- npm
  ```sh
  npm install prompt-validator
  ```

### Installation

#### Setting Up OpenAI API Key

To use the OpenAI API with `prompt-validator`, you need to obtain an API key from OpenAI. Follow these steps to sign in and set up your OpenAI API key:

1. **Sign Up or Log In to OpenAI:**
   - Go to the [OpenAI website](https://www.openai.com/).
   - Click on the "Sign Up" button to create a new account, or "Log In" if you already have an account.

2. **Generate an API Key:**
   - Once you are logged in, navigate to the API section of your account.
   - Click on "API Keys" and then "Create API Key" to generate a new key.
   - Copy the generated API key. You will need this key to authenticate your requests.

3. **Enter Your API Key in `openai.test.js`:**
   - Open the `openai.test.js` file in your project.
   - Replace the placeholder text with your actual API key as shown below:

     ```javascript
     const key = "ENTER YOUR API";
     ```

By following these steps, you will have your OpenAI API key set up and ready to use with `prompt-validator`.


<!-- USAGE EXAMPLES -->

## Usage

Once installed, you can use Prompt Validator in your Node.js applications as follows:

1. ES Modules

   ```sh
   import { promptValidator } from 'prompt-validator';
   const apiKey = 'your-openai-api-key';
   const prompt = 'Your prompt text goes here';
   promptValidator(apiKey, prompt)
   .then(response => {
   console.log('Response:', response);
   })
   .catch(error => {
   console.error('Error:', error);
   });

   ```

2. CommonJs`

```js
const { promptValidator } = require("prompt-validator");

const apiKey = "your-openai-api-key";
const prompt = "Your prompt text goes here";

promptValidator(apiKey, prompt)
  .then((response) => {
    console.log("Response:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

If the prompt contains a violation, the response will indicate the type of violation. For example:

```sh
{
"validate": "The message contains a high-level violation as it incites violence and harm towards others."
}

```

4. If the prompt contains a violation, the response will indicate the type of violation. For example:

```sh
{
 "validate": "verified"
}
```

## Configuration

Before using Prompt Validator, you'll need to obtain an API key from OpenAI. Once you have the API key, you can pass it as a parameter when calling the promptValidator function. also you can perferm unit test with key.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

This project is licensed under the ISC License.

<!-- CONTACT -->

## Contact

Buddha Kharel - info@buddhakharel.com

Project Link: [https://github.com/buddha2042/prompt-validator](https://github.com/buddha2042/prompt-validator)
