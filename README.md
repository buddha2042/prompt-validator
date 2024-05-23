
<!-- ABOUT THE PROJECT -->
## About The Project

Prompt Validator is a Node.js package designed to validate OpenAI prompts for high levels of violation. It utilizes the OpenAI API to analyze prompts and detect potential violations such as hate speech, inappropriate content, or other harmful material. This package aims to assist developers in ensuring that their AI-generated content meets moderation guidelines and ethical standards.


### Built With


* NodeJS

<!-- GETTING STARTED -->
## Getting Started

To install Prompt Validator, simply run:

* npm
  ```sh
  npm install prompt-validator
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a  API Key at [https://platform.openai.com/docs/](https://platform.openai.com/docs/overview)

4. Enter your API in `openai.test.js` 
   ```js
   const key = 'ENTER YOUR API';
   ```

<!-- USAGE EXAMPLES -->
## Usage

Once installed, you can use Prompt Validator in your Node.js applications as follows:

1. ES Modules
   ```sh
import { promptValidator } from ('prompt-validator');

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
  const { promptValidator } = require('prompt-validator');

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

3. If the prompt contains a violation, the response will indicate the type of violation. For example:
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

Buddha Kharel  - info@buddhakharel.com

Project Link: [https://github.com/buddha2042/prompt-validator](https://github.com/buddha2042/prompt-validator)





