import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import Charity from './Charity.js';
import CharityInfo from './CharityInfo.js';

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
                { value: 2, label: 'covid', trigger: 'covid-start' },
                { value: 3, label: 'I would like to help', trigger: 'charity-search'}
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
            }, {
              id: 'charity-search',
              message: 'Is there a current disaster or charity you wish to help in particular?',
              trigger: 'donation',
            }, {
              id: 'charity-search2',
              message: 'Which current disaster or charity do you wish to help in particular?',
              trigger: 'donation',
            } 
            , {
              id: 'donation',
              user: true,
              trigger: '3',
            }, {
              id: '3',
              component: <Charity />,
              waitAction: true,
              trigger: 'welcome',
            }, {
              id: 'charity-prompt',
              message: 'Here is some more information about {previousValue}',
              trigger: 'charity-info',
            }, 
            {
              id: 'charity-info',
              component: <CharityInfo />,
              waitAction: true,
              trigger: 'welcome',
            },
          ]}
        />
    </div>
  );
}

export default App;
