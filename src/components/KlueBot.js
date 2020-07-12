import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios';

import Filled from './Filled.js'
import BobRoss from '../assets/bob-ross.jpg';
import BotSentinel from '../assets/bot-sentinel.jpg';
import StyledDropzone from './StyledDropzone.js';

import Charity from './Charity.js';
import CharityInfo from './CharityInfo.js';

const getUploadParams = ({ meta }) => {
  return { url: 'https://pdf2doc.com/' };
}
  
// called every time a file's `status` changes
const handleChangeStatus = ({ meta, file }, status) => {
  console.log(status, meta, file);
}

// receives array of files that are done uploading when submit button is clicked
const handleSubmit = (files) => {
  console.log(files.map(f => f.meta));
}

class KlueBot extends Component {

  render() {
    return (
      <div className="App">
        <ChatBot
          headerTitle={'Hoogle Bot'}
          steps={ steps }
          botAvatar={BotSentinel}
          userAvatar={BobRoss}
          width={'100%'}
        />
      </div>
    );
  }
}

class Bushfire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    }

  }

  async componentDidMount() {
    const { steps } = this.props;
    const { businessOwner, farmerOrPrimaryProducer, propertyOwner, renter, volunteerFirefighterOrSES, documentReplacement, damagedProperty, registeredVehicle, registeredVessel, livestock } = steps;

    const json = {
      disasterType: 'bushfire',
      basicAssistance: {
        businessOwner: businessOwner.value,
        farmerOrPrimaryProducer: farmerOrPrimaryProducer.value,
        propertyOwner: propertyOwner.value,
        renter: renter.value,
        volunteerFirefighterOrSES: volunteerFirefighterOrSES.value,
        noneOfTheAbove: businessOwner.value || farmerOrPrimaryProducer.value || propertyOwner.value || renter.value || volunteerFirefighterOrSES.value
      },
      documentReplacement: {
        documentReplacement: documentReplacement.value
      },
      propertyAndVehicle: {
        damagedProperty: damagedProperty.value,
        registeredVehicle: registeredVehicle.value,
        registeredVessel: registeredVessel.value,
        noVehicle: damagedProperty.value || registeredVehicle.value || registeredVessel.value
      },
      livestock: {
        livestock: livestock.value
      }
    };

    const firstUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/bushfire/surveyform`;

    try {
      const firstData = await axios.post(firstUrl, json, { headers: { 'Content-Type': 'application/json' }});
      const param = firstData.data;
      const secondUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${param}`;
      const secondData = await axios.get(secondUrl);
      console.log(secondData);
      const data = secondData.data.availableServices;
      this.setState({
        content: data
      })
    } catch (e) {
      console.log(e);
    }

  }

  render() {
    return (
      <div className="Bushfire">
        { this.state.content ? this.state.content.map(category) : "Loading..." }
      </div>
    );
  }
}

Bushfire.propTypes = {
  steps: PropTypes.object
};

Bushfire.defaultProps = {
  steps: undefined
};

const category = (category) => {
  return (
    <div className="category" key={ category.rank }>
      <h2>Category: { category.category }</h2>
      { category.services.map(service) }
    </div>
  )
}

const service = (service) => {
  return (
    <div className="service" key={ service.serviceOfferingId }>
      <h3>Provider: { service.provider }</h3>
      <p>Initiative: { service.initiativeName }</p>
      <p>Description: { service.description.replace(/<[^<>]*>/g, '') }</p>
      <p>Find more information <a href={ service.furtherInformationLink }>here</a>.</p>
    </div>
  );
}

const steps = [
  {
    id: 'welcome',
    message: 'Welcome to KlueBot! Do you want bushfire or covid relief?',
    trigger: 'disasterType'
  }, {
    id: 'disasterType',
    options: [
      { value: 'bushfire', label: 'Bushfire', trigger: 'bushfire' },
      { value: 'covid', label: 'Covid', trigger: 'covid' },
      { value: 'charity', label: 'I would like to help!', trigger: 'charity-search'}
    ]
  }, {
    id: 'bushfire',
    message: 'I will just ask a few questions. At the end, I will send you everything I know to help you :)',
    trigger: 'businessOwnerMessage'
  }, {
    id: 'businessOwnerMessage',
    message: 'Have you been affected as a business owner?',
    trigger: 'businessOwner'
  }, {
    id: 'businessOwner',
    options: [
      { value: 'true', label: 'Yes', trigger: 'farmerOrPrimaryProducerMessage' },
      { value: 'false', label: 'No', trigger: 'farmerOrPrimaryProducerMessage' }
    ]
  }, {
    id: 'farmerOrPrimaryProducerMessage',
    message: 'Have you been affected as a farmer or primary producer?',
    trigger: 'farmerOrPrimaryProducer'
  }, {
    id: 'farmerOrPrimaryProducer',
    options: [
      { value: 'true', label: 'Yes', trigger: 'propertyOwnerMessage' },
      { value: 'false', label: 'No', trigger: 'propertyOwnerMessage' }
    ]
  }, {
    id: 'propertyOwnerMessage',
    message: 'Have you been affected as a property owner?',
    trigger: 'propertyOwner'
  }, {
    id: 'propertyOwner',
    options: [
      { value: 'true', label: 'Yes', trigger: 'renterMessage' },
      { value: 'false', label: 'No', trigger: 'renterMessage' }
    ]
  }, {
    id: 'renterMessage',
    message: 'Have you been affected as a renter?',
    trigger: 'renter'
  }, {
    id: 'renter',
    options: [
      { value: 'true', label: 'Yes', trigger: 'volunteerFirefighterOrSESMessage' },
      { value: 'false', label: 'No', trigger: 'volunteerFirefighterOrSESMessage' }
    ]
  }, {
    id: 'volunteerFirefighterOrSESMessage',
    message: 'Have you been affected as a Volunteer Firefighter or SES?',
    trigger: 'volunteerFirefighterOrSES'
  }, {
    id: 'volunteerFirefighterOrSES',
    options: [
      { value: 'true', label: 'Yes', trigger: 'documentReplacementMessage' },
      { value: 'false', label: 'No', trigger: 'documentReplacementMessage' }
    ]
  }, {
    id: 'documentReplacementMessage',
    message: 'Do you need to replace any documents or licences?',
    trigger: 'documentReplacement'
  }, {
    id: 'documentReplacement',
    options: [
      { value: 'true', label: 'Yes', trigger: 'damagedPropertyMessage' },
      { value: 'false', label: 'No', trigger: 'damagedPropertyMessage' }
    ]
  }, {
    id: 'damagedPropertyMessage',
    message: 'Has your property been impacted or damaged? This includes houses, buildings, sheds, fencing, business premises and fallen trees.',
    trigger: 'damagedProperty'
  }, {
    id: 'damagedProperty',
    options: [
      { value: 'true', label: 'Yes', trigger: 'registeredVehicleMessage' },
      { value: 'false', label: 'No', trigger: 'registeredVehicleMessage' }
    ]
  }, {
    id: 'registeredVehicleMessage',
    message: 'Do you have any damaged vehicles?',
    trigger: 'registeredVehicle'
  }, {
    id: 'registeredVehicle',
    options: [
      { value: 'true', label: 'Yes', trigger: 'registeredVesselMessage' },
      { value: 'false', label: 'No', trigger: 'registeredVesselMessage' }
    ]
  }, {
    id: 'registeredVesselMessage',
    message: 'Do you have any damaged vessels?',
    trigger: 'registeredVessel'
  }, {
    id: 'registeredVessel',
    options: [
      { value: 'true', label: 'Yes', trigger: 'livestockMessage' },
      { value: 'false', label: 'No', trigger: 'livestockMessage' }
    ]
  }, {
    id: 'livestockMessage',
    message: 'Do you have livestock or animals that are injured or affected? This includes stock, cattle, horses, sheep and domestic pets.',
    trigger: 'livestock'
  }, {
    id: 'livestock',
    options: [
      { value: 'true', label: 'Yes', trigger: 'bushfireEnd' },
      { value: 'false', label: 'No', trigger: 'bushfireEnd' }
    ]
  }, {
    id: 'bushfireEnd',
    message: 'Thanks! I will get some useful information now.',
    trigger: 'bushfireComponent'
  }, {
    id: 'bushfireComponent',
    component: <Bushfire />,
    end: true
  }, {
    id: 'covid',
    message: "What form of help do you need?",
    trigger: 'covid-options'
  }, {
    id: 'covid-options',
    options: [
      { value: 1, label: 'Fill in Form', trigger: 'covid-form' },
      { value: 2, label: 'Translate Form to a different language', trigger: 'translate-covid-form' },
      { value: 3, label: 'Information', trigger: 'covid-info' }
    ]
  }, { 
    id: 'translate-covid-form',
    component: <StyledDropzone />,
    trigger: 'covid-form-finance'
  }, {
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
  }, {
    id: 'user-what-is-your-age',
    user: true,
    trigger: 'filled-form'
  }, {
    id: 'filled-form',
    message: "aquí está tu forma",
    trigger: 'give-filled-form'
  }, {
    id:'give-filled-form',
    component: <Filled />,
    end: true
  }, {
    id: 'charity-search',
    message: 'Is there a current disaster or charity you wish to help in particular?',
    trigger: 'donation'
  }, {
    id: 'charity-search2',
    message: 'Which current disaster or charity do you wish to help in particular?',
    trigger: 'donation'
  }, {
    id: 'donation',
    user: true,
    trigger: '3'
  }, {
    id: '3',
    component: <Charity />,
    waitAction: true,
    trigger: 'welcome'
  }, {
    id: 'charity-prompt',
    message: 'Here is some more information about {previousValue}',
    trigger: 'charity-info'
  }, {
    id: 'charity-info',
    component: <CharityInfo />,
    waitAction: true,
    trigger: 'welcome'
  }
];

export default KlueBot;
