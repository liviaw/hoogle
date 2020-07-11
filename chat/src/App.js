import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from 'react-simple-chatbot';


function App() {
  return (
    <div className="App">
      <ChatBot
          headerTitle="Speech Synthesis"
          speechSynthesis={{ enable: true, lang: 'es' }}
          recognitionEnable={true} 
          steps={[
            {
              id: 'hello-world',
              message: 'Hello World!',
              trigger: 'user1'
            }, {
              id: 'user1',
              user: true,
              trigger: 'next-message'
            }, {
              id: 'next-message',
              message: 'hi',
              end: true
            }
          ]}
        />
    </div>
  );
}

export default App;
