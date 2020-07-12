import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


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

export default Bushfire;
