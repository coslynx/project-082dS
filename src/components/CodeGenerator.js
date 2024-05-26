// CodeGenerator.js

import React, { useState } from 'react';
import axios from 'axios';
import { errorHandling } from '../utils/errorHandling';
import { api } from '../utils/api';

const CodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generateCode = async () => {
    try {
      const response = await axios.post(api, {
        text: inputText,
        max_tokens: 500
      });

      setGeneratedCode(response.data.code);
    } catch (error) {
      errorHandling(error);
    }
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleInputChange} />
      <button onClick={generateCode}>Generate Code</button>
      <code>{generatedCode}</code>
    </div>
  );
};

export default CodeGenerator;