import React, {Component, useState} from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import Charity from './Charity.js';
import CharityInfo from './CharityInfo.js';
import { ThemeProvider } from 'styled-components';
import BobRoss from './bob-ross.jpg';
import BotSentinel from './bot-sentinel.jpg';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone-uploader'
import filledForm from './filled-form.pdf';


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


///


class Filled extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
        <a href="./filled-form.pdf"> Your filled in Form </a>
      )

    
  }
}




//


function App() {
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }



  return (
    <div className="App">
      <div id='centreDiv'>
        <ThemeProvider theme={theme}>
          <ChatBot
              headerTitle={'KlueBot'}
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
                  message: "What form of help do you need?",
                  trigger: 'covid-options'
                },
                {
                  id: 'covid-options',
                  options: [
                    { value: 1, label: 'Fill in Form', trigger: 'covid-form' },
                    { value: 2, label: 'Translate Form to a different language', trigger: 'translate-covid-form' },
                    { value: 3, label: 'Information', trigger: 'covid-info' }
                  ]
                },
                { 
                  id: 'translate-covid-form',
                  component: <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    accept="image/*,audio/*,video/*"
                  />,
                  end: true
                },

                {
                  id: 'covid-info',
                  message: 'Here are the info about COVID-19?',
                  trigger: 'covid-form-finance'
                },
                {
                  id: 'covid-form',
                  message: 'What form do you need?',
                  trigger: 'covid-form-user'
                },
                {
                  id: 'covid-form-user',
                  user: true,
                  trigger: 'covid-form-finance'
                },
                {
                  id: 'covid-form-finance',
                  message: "what is your preferable language?",
                  trigger: 'user-form-language'
                }, 
                {
                  id: 'user-form-language',
                  user: true,
                  trigger: 'covid-form-name'
                }, 
                {
                  id: 'covid-form-name',
                  message: "cual es tu nombre legal completo",
                  trigger: 'user-form-legal-name'
                }, 
                {
                  id: 'user-form-legal-name',
                  user: true,
                  trigger: 'what-is-your-age'
                }, 
                {
                  id: 'what-is-your-age',
                  message: "Cuál es tu edad",
                  trigger: 'user-what-is-your-age'
                }, 
                

                {
                  id: 'user-what-is-your-age',
                  user: true,
                  trigger: 'filled-form'
                }, 
                {
                  id: 'filled-form',
                  message: "aquí está tu forma",
                  trigger: 'give-filled-form'
                },
                {
                  id:'give-filled-form',
                  component: <Filled/>,
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
