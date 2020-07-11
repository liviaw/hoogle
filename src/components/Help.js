import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';

class Help extends Component {

  render() {
    return (
      <div className="App">
        <ChatBot
          steps={ steps }
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
    message: 'Welcome to DisasterBot! Do you want bushfire or covid relief?',
    trigger: 'disasterType'
  }, {
    id: 'disasterType',
    options: [
      { value: 'bushfire', label: 'Bushfire', trigger: 'bushfire' },
      { value: 'covid', label: 'Covid', trigger: 'covid' }
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
    message: 'NOT IMPLEMENTED',
    end: true
  }
];

export default Help;
