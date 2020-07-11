import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import KlueBot from './components/KlueBot.js'

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='centreDiv'>
          <ThemeProvider theme={theme}>
            <KlueBot />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
