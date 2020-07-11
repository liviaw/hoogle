import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';


function App() {
  return (
    <div className="App">
      <ChatBot
          steps={[
            {
              id: 'welcome',
              message: 'Welcome to DisasterBot! Do you want bushfire or covid relief?',
              trigger: 'disaster-start'
            }, {
              id: 'disaster-start',
              options: [
                { value: 1, label: 'bushfire', trigger: 'bushfire-start' },
                { value: 2, label: 'covid', trigger: 'covid-start' }
              ]
            }, {
              id: 'bushfire-start',
              message: 'I will just ask a few questions. At the end, I will send you everything I know to help you :)',
              trigger: 'bushfire-business-owner'
            }, {
              id: 'bushfire-business-owner',
              user: true,
              end: true
            }, {
              id: 'covid-start',
              message: 'NOT IMPLEMENTED',
              end: true
            }
          ]}
        />
    </div>
  );
}

export default App;
