import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class Filled extends Component {
	state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
  	const { pageNumber, numPages } = this.state;
    return (
    	<div>
    	 <a href="./filled-form.pdf" download> Your filled in Form </a>
     
      </div>
    );
  }
}

export default Filled;
