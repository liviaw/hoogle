import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Covid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    }

  }

  async componentDidMount() {
    const { steps } = this.props;
    const { housingSituation, isPrimaryCarer, isPrimaryCarer, ageBracket, residentType, doesIdentifyAsIndigenousAustralian, education, employmentStatus, isBusinessOwner, numEmployees, revenueReduction, healthStatus, supportOptions } = steps;

    const json = {
      disasterType: 'covid',
      userAnswers: []
    };

    json.userAnswers.push(housingSituation);

    if (isPrimaryCarer) {
      json.userAnswers.push('isPrimaryCarer');
    }

    json.userAnswers.push(ageBracket);

    json.userAnswers.push(residentType);

    if (doesIdentifyAsIndigenousAustralian) {
      json.userAnswers.push('doesIdentifyAsIndigenousAustralian');
    }

    json.userAnswers.push(education);

    json.userAnswers.push(employmentStatus);

    if (isBusinessOwner) {
      json.userAnswers.push('isBusinessOwner');

      json.push(numEmployees);

      json.push(revenueReduction);

    }

    json.userAnswers.push(healthStatus);

    json.userAnswers.push(supportOptions);




    const firstUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform`;

    try {
      const firstData = await axios.post(firstUrl, json, { headers: { 'Content-Type': 'application/json' }});
      const param = firstData.data;
      const secondUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${param}&disasterType=covid`;
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
      <div className="Covid">
        { this.state.content ? this.state.content.map(category) : "Loading..." }
      </div>
    );
  }
}

Covid.propTypes = {
  steps: PropTypes.object
};

Covid.defaultProps = {
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
