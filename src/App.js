import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import Charity from './Charity.js';
import CharityInfo from './CharityInfo.js';
import { ThemeProvider } from 'styled-components';
import BobRoss from './bob-ross.jpg';
import BotSentinel from './bot-sentinel.jpg';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Open Sans',
  headerBgColor: '#0084FF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0084FF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function App() {
  return (
    <div className="App">
      <div id='centreDiv'>
        <ThemeProvider theme={theme}>
          <ChatBot
              headerTitle={'Hoogle Bot'}
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
                    { value: 3, label: 'I would like to help!', trigger: 'charity-search'}
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
              botAvatar={BotSentinel}
              userAvatar={BobRoss}
              width={'100%'}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
