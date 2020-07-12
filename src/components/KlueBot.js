import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Dropzone from 'react-dropzone-uploader'

import Filled from './Filled.js'
import BobRoss from '../assets/bob-ross.jpg';
import BotSentinel from '../assets/bot-sentinel.jpg';
import StyledDropzone from './StyledDropzone.js';

import Bushfire from './Bushfire.js'
import Covid from './Covid.js'
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
          headerTitle={'KlueBot'}
          speechSynthesis={{ enable: true, lang: 'en' }}
          recognitionEnable={true}
          steps={ steps }
          botAvatar={BotSentinel}
          userAvatar={BobRoss}
          width={'100%'}
        />
      </div>
    );
  }
}

const steps = [
  {
    id: 'welcome',
    message: 'Hello! My name is Kluebot! What can I help you with?',
    trigger: 'disasterType'
  }, {
    id: 'welcomeAgain',
    message: 'What else can Kluebot help you with?',
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
    message: 'I will just ask a few questions. At the end, I will send you everything I know to help you',
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
    trigger: 'welcomeAgain'
  }, {
    id: 'covid',
    message: "What form of help do you need?",
    trigger: 'covid-options'
  }, {
    id: 'covid-options',
    options: [
      { value: 1, label: 'Support', trigger: 'covidSupport' },
      { value: 2, label: 'Fill in Form', trigger: 'covid-form' },
      { value: 3, label: 'Translate Form to a different language', trigger: 'translate-covid-form' },
      { value: 4, label: 'Information', trigger: 'covid-info' }
    ]
  }, {
    id: 'covidSupport',
    message: 'I will just ask a few questions. At the end, I will send you everything I know to help you :)',
    trigger: 'housingSituationQuestion'
  }, {
    id: 'housingSituationQuestion',
    message: 'What is your current housing situation?',
    trigger: 'housingSituation'
  }, {
    id: 'housingSituation',
    options: [
      { value: 'housingSituationRenter', label: 'Renter', trigger: 'isPrimaryCarerQuestion' },
      { value: 'housingSituationOwnerWithMortgage', label: 'Owner with mortgage', trigger: 'isPrimaryCarerQuestion' },
      { value: 'housingSituationOwnerWithoutMortgage', label: 'Owner - without mortgage', trigger: 'isPrimaryCarerQuestion' },
      { value: 'housingSituationLivingWithFamilyOrFriendsWithoutExpense', label: 'Living with family or friends - few expenses', trigger: 'isPrimaryCarerQuestion' },
      { value: 'housingSituationOther', label: 'Other', trigger: 'isPrimaryCarerQuestion' }
    ]
  }, {
    id: 'isPrimaryCarerQuestion',
    message: 'Do you have children or dependents?',
    trigger: 'isPrimaryCarer'
  }, {
    id: 'isPrimaryCarer',
    options: [
      { value: 'true', label: 'Yes', trigger: 'ageBracketQuestion' },
      { value: 'false', label: 'No', trigger: 'ageBracketQuestion' }
    ]
  }, {
    id: 'ageBracketQuestion',
    message: 'How old are you?',
    trigger: 'ageBracket'
  }, {
    id: 'ageBracket',
    options: [
      { value: 'ageBracketUnder16', label: 'Under 16', trigger: 'residentTypeQuestion' },
      { value: 'ageBracket16to21', label: '16 - 21', trigger: 'residentTypeQuestion' },
      { value: 'ageBracket22to39', label: '22 - 39', trigger: 'residentTypeQuestion' },
      { value: 'ageBracket40to66', label: '40 - 66', trigger: 'residentTypeQuestion' },
      { value: 'ageBracket67to80', label: '67 - 80', trigger: 'residentTypeQuestion' },
      { value: 'ageBracketOver80', label: 'Over 80', trigger: 'residentTypeQuestion' }
    ]
  }, {
    id: 'residentTypeQuestion',
    message: 'What is your resident status? Please select the option that best represents your residency as at 1 March 2020.',
    trigger: 'residentType'
  }, {
    id: 'residentType', 
    options: [
      { value: 'residentTypeAustralia', label: 'Australian citizen, permanent residence visa holder or protected Special Category visa (SCV) holder', trigger: 'doesIdentifyAsIndigenousAustralianQuestion' },
      { value: 'residentTypeNewZealand', label: 'New Zealand citizen living in Australia (non SCV holder)', trigger: 'doesIdentifyAsIndigenousAustralianQuestion' },
      { value: 'residentTypeInternational', label: 'International citizen living in Australia (non New Zealand)', trigger: 'doesIdentifyAsIndigenousAustralianQuestion' }
    ]
  }, {
    id: 'doesIdentifyAsIndigenousAustralianQuestion',
    message: 'Do you identify as Aboriginal or Torres Strait Islander?',
    trigger: 'doesIdentifyAsIndigenousAustralian'
  }, {
    id: 'doesIdentifyAsIndigenousAustralian',
    options: [
      { value: 'true', label: 'Yes', trigger: 'educationQuestion' },
      { value: 'false', label: 'No', trigger: 'educationQuestion' }
    ]
  }, {
    id: 'educationQuestion',
    message: 'Are you a student, trainee or apprentice?',
    trigger: 'education'
  }, {
    id: 'education',
    options: [
      { value: 'isStudent', label: 'Student', trigger: 'employmentStatusQuestion' },
      { value: 'isTrainee', label: 'Trainee', trigger: 'employmentStatusQuestion' },
      { value: 'isApprentice', label: 'Apprentice', trigger: 'employmentStatusQuestion' }, {
        value: 'false', label: 'None of the above', trigger: 'employmentStatusQuestion'
      }
    ]
  }, {
    id: 'employmentStatusQuestion',
    message: 'What is your employment status?',
    trigger: 'employmentStatus'
  }, {
    id: 'employmentStatus',
    options: [
      { value: 'employmentStatusFullTime', label: 'Full-time employee', trigger: 'isBusinessOwnerQuestion' },
      { value: 'employmentStatusPartTime', label: 'Part-time employee', trigger: 'isBusinessOwnerQuestion' },
      { value: 'employmentStatusLongTermCasual', label: 'Long-term casual employee', trigger: 'isBusinessOwnerQuestion' },
      { value: 'employmentStatusRecentlyStoodDown', label: 'Recently stood down', trigger: 'isBusinessOwnerQuestion' },
      { value: 'employmentStatusLookingForWork', label: 'Looking for work', trigger: 'isBusinessOwnerQuestion' },
      { value: 'employmentStatusRetiredOrNotLookingForWork', label: 'Retired or not looking for work', trigger: 'isBusinessOwnerQuestion' },
      { value: 'false', label: 'None of the above', trigger: 'isBusinessOwnerQuestion' }
    ]
  }, {
    id: 'isBusinessOwnerQuestion',
    message: 'Are you a business owner?',
    trigger: 'isBusinessOwner'
  }, {
    id: 'isBusinessOwner',
    options: [
      { value: 'true', label: 'Yes', trigger: 'numEmployeesQuestion' },
      { value: 'false', label: 'No', trigger: 'selfIsolatingQuestion' }
    ]
  }, {
    id: 'numEmployeesQuestion',
    message: 'How many employees do you currently have?',
    trigger: 'numEmployees'
  }, {
    id: 'numEmployees',
    options: [
      { value: 'numEmployeesMyselfOnly', label: "I'm a sole trader", trigger: 'revenueReductionQuestion' },
      { value: 'numEmployees1to19', label: '1 to 19', trigger: 'revenueReductionQuestion' },
      { value: 'numEmployees20to49', label: '20 to 49', trigger: 'revenueReductionQuestion' },
      { value: 'numEmployees50to249', label: '50 to 249', trigger: 'revenueReductionQuestion' },
      { value: 'numEmployees250OrMore', label: '250 or More', trigger: 'revenueReductionQuestion' }
    ]
  }, {
    id: 'revenueReductionQuestion',
    message: 'How does your current revenue compare to a similar period last year? The period can be a month from March 2020 to September 2020 compared to the same month in 2019. Where a quarterly period is chosen, businesses will compare projected turnover for either the June or September 2020 quarters to the same quarter in 2019.',
    trigger: 'revenueReduction'
  }, {
    id: 'revenueReduction',
    options: [
      { value: 'revenueReductionNone', label: 'No reduction at the moment', trigger: 'selfIsolatingQuestion' },
      { value: 'revenueReduction0to14Percent', label: '0-14% reduction', trigger: 'selfIsolatingQuestion' },
      { value: 'revenueReduction15to29Percent', label: '15-29% reduction', trigger: 'selfIsolatingQuestion' },
      { value: 'revenueReduction30to49Percent', label: '30-49% reduction', trigger: 'selfIsolatingQuestion' },
      { value: 'revenueReduction50orMorePercent', label: '50% or more reduction', trigger: 'selfIsolatingQuestion' }
    ]
  }, {
    id: 'selfIsolatingQuestion',
    message: 'Does any of the below circumstances apply to you?',
    trigger: 'selfIsolating'
  }, {
    id: 'selfIsolating',
    options: [
      { value: 'selfIsolatingReasonExistingHealthConcerns', label: 'In self-isolation or self-quarantine due to health concerns', trigger: 'supportOptionsQuestion' },
      { value: 'selfIsolatingReasonReturnFromTravel', label: 'In self-isolation or self-quarantine due to travel', trigger: 'supportOptionsQuestion' },
      { value: 'selfIsolatingReasonNdisParticipant', label: 'National Disability Insurance Scheme (NDIS) participant', trigger: 'supportOptionsQuestion' },
      { value: 'selfIsolatingReasonHealthcareWorker', label: 'Healthcare worker', trigger: 'supportOptionsQuestion' },
      { value: 'false', label: 'None of the above', trigger: 'supportOptionsQuestion' }
    ]
  }, {
    id: 'supportOptionsQuestion',
    message: 'What support do you need most right now?',
    trigger: 'supportOptions'
  }, {
    id: 'supportOptions',
    options: [
      { value: 'supportOptionsIncomeSupport', label: 'Income support', trigger: 'covidEnd' },
      { value: 'supportOptionsSupportWithHousingPayments', label: 'Support with housing payments', trigger: 'covidEnd' },
      { value: 'supportOptionsFoodAndHousehold', label: 'Help with food and household items', trigger: 'covidEnd' },
      { value: 'supportOptionsLifestyle', label: 'Help adjusting to a different lifestyle', trigger: 'covidEnd' },
      { value: 'supportOptionsChildSupport', label: 'Support for my children or dependents', trigger: 'covidEnd' },
      { value: 'supportOptionsMentalHealth', label: 'Support for my mental health', trigger: 'covidEnd' },
      { value: 'false', label: 'None of the above', trigger: 'covidEnd' }
    ]
  }, {
    id: 'covidEnd',
    message: 'Thanks! I will get some useful information now.',
    trigger: 'covidComponent'
  }, {
    id: 'covidComponent',
    component: <Covid />,
    trigger: 'welcomeAgain'
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
    trigger: 'welcomeAgain'
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
    trigger: 'welcomeAgain'
  }, {
    id: 'charity-prompt',
    message: 'Here is some more information about {previousValue}',
    trigger: 'charity-info'
  }, {
    id: 'charity-info',
    component: <CharityInfo />,
    waitAction: true,
    trigger: 'welcomeAgain'
  }
];

export default KlueBot;
