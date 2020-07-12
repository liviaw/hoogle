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
    const { housingSituation, isPrimaryCarer, ageBracket, residentType, doesIdentifyAsIndigenousAustralian, education, employmentStatus, isBusinessOwner, numEmployees, revenueReduction, selfIsolating, supportOptions } = steps;

    const json = {
      disasterType: 'covid',
      userAnswers: []
    };

    json.userAnswers.push(housingSituation.value);

    if (isPrimaryCarer.value === 'true') {
      json.userAnswers.push('isPrimaryCarer');
    }

    json.userAnswers.push(ageBracket.value);

    json.userAnswers.push(residentType.value);

    if (doesIdentifyAsIndigenousAustralian.value === 'true') {
      json.userAnswers.push('doesIdentifyAsIndigenousAustralian');
    }

    if (education.value !== 'false') {
      json.userAnswers.push(education.value);
    }

    if (employmentStatus.value !== 'false') {
      json.userAnswers.push(employmentStatus.value);
    }

    if (isBusinessOwner.value === 'true') {
      json.userAnswers.push('isBusinessOwner');

      json.userAnswers.push(numEmployees.value);

      json.userAnswers.push(revenueReduction.value);

    }

    if (selfIsolating.value !== 'false') {
      json.userAnswers.push(selfIsolating.value);
    }

    if (supportOptions.value !== 'false') {
      json.userAnswers.push(supportOptions.value);
    }



    const firstUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform`;

    try {
      const firstData = await axios.post(firstUrl, json, { headers: { 'Content-Type': 'application/json' }});
      const param = firstData.data;
      const secondUrl = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${param}&disasterType=covid`;
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
      <div className="Covid">
        { this.state.content.map(category) }
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

export default Covid;
