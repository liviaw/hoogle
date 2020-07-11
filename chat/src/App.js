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
              trigger: 'welcome-user'
            }, {
              id: 'welcome-user',
              user: true,
              trigger: 'disaster-start'
            }, {
              id: 'disaster-start',
              options: [
                { label: 'bushfire', value: 1, trigger: 'bushfire-start' },
                { label: 'covid-start', value: 2, trigger: 'covid-start'}
              ]
            }, {
              
            }
          ]}
        />
    </div>
  );
}

export default App;
