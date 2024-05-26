// App.js

import React, { useState } from 'react';
import CodeGenerator from './components/CodeGenerator';
import ChatInterface from './components/ChatInterface';

const App = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  
  const handleCodeGeneration = (code) => {
    setGeneratedCode(code);
  }

  return (
    <div className="app">
      <h1>Code Generator Website</h1>
      <ChatInterface onCodeGenerate={handleCodeGeneration} />
      <CodeGenerator generatedCode={generatedCode} />
    </div>
  );
}

export default App;