# Prompt Validator

A package to validate OpenAI prompts for high levels of violation.

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Overview

Prompt Validator is a Node.js package designed to help you validate OpenAI prompts to ensure they comply with moderation guidelines. It uses the OpenAI API to analyze prompts and detect potential violations such as hate speech, inappropriate content, or other harmful material.

## Installation

To install Prompt Validator, simply run:

```bash
npm install prompt-validator

 ## Usage
Sending a Request
To use Prompt Validator, you'll need your OpenAI API key. Once you have it, you can send a request to validate a prompt as follows:


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

If the prompt contains a violation:
{
  "validate": "The message contains a high-level violation as it incites violence and harm towards others."
}
If the prompt is verified and does not contain a violation:
{
  "validate": "verified"
}


 ## Authors
to report the bug please contact - info@buddhakharel.com

