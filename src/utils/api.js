// File: src/utils/api.js

// Import necessary packages
import axios from 'axios';

// Function to call the OpenAI GPT-3 API for code generation
const generateCode = async (inputText) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: inputText,
      max_tokens: 500
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY_HERE'
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating code:', error);
    return 'Error generating code. Please try again.';
  }
};

// Export the function for use in other files
export { generateCode };