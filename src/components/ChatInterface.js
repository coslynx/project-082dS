// File: src/components/ChatInterface.js

import React, { useState } from 'react';
import axios from 'axios';
import { apiEndpoint } from '../utils/api';
import { handleErrors } from '../utils/errorHandling';

const ChatInterface = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCodeGeneration = async () => {
    try {
      const response = await axios.post(apiEndpoint, { text: inputText });
      const generatedCode = response.data.code;
      setOutputText(generatedCode);
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-input">
        <textarea
          placeholder="Enter your code request here..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleCodeGeneration}>Generate Code</button>
      </div>
      <div className="chat-output">
        <textarea
          placeholder="Generated code will appear here..."
          value={outputText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default ChatInterface;