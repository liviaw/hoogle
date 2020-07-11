const axios = require('axios');
const prompt = require('prompt-sync')();

const bushfireData = {
    "basicAssistance": {
        "businessOwner":false,
        "farmerOrPrimaryProducer":false,
        "propertyOwner":false,
        "renter":true,
        "volunteerFirefighterOrSES":false,
        "noneOfTheAbove":false
    },
    "certificate": {
        "documentReplacement":"true"
    },
    "propertyAndVehicle":{
        "damagedProperty":"false",
        "registeredVehicle":true,
        "registeredVessel":true,
        "noVehicle":false
    },
    "livestock":{
        "livestock":"true"
    },
    "disasterType":"bushfire"
};

const sendBushfireSurvey = async (json) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/bushfire/surveyform`;
    axios.post(url, json, { headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
            getBushFireResults(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
}

const getBushFireResults = async (code) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${code}`;
    axios.get(url)
        .then((response) => {
                categories = response.data.availableServices
            for (let c = 0; c < categories.length; c++) {
                category = categories[c];
                console.log(`Category: ${category.category}\n`);
                for (let s = 0; s < category.services.length; s++) {
                    service = category.services[s];
                    console.log(`Provider: ${service.provider}$`);
                    console.log(`Initiative: ${service.initiativeName}`);
                    console.log(service.description.replace(/<.*>/, ''));
                    console.log(`Further information: ${service.furtherInformationLink}\n`);
                }
                console.log('\n');
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

const covidData = {
    "userAnswers":[
        "ageBracket16to21",
        "residentTypeAustralian",
        "housingSituationRenter",
        "isTrainee",
        "employmentStatusFullTime",
        "selfIsolatingReasonReturnFromTravel",
        "supportOptionsIncomeSupport"
    ],"disasterType":"covid"
};

const sendCovidSurvey = async (json) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform`;
    axios.post(url, json, { headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
            getCovidResults(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
}

const getCovidResults = async (code) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${code}&disasterType=covid`;
    axios.get(url)
        .then((response) => {
            console.log(JSON.stringify(response.data.availableServices))
        })
        .catch((error) => {
            console.log(error);
        })
}

// sendBushfireSurvey(JSON.stringify(bushfireData));

// sendCovidSurvey(JSON.stringify(covidData));


console.log("Do you need assistance for the bushfires or COVID-19?");
console.log("Please type 'b' for bushfire or 'c' for covid.");

let type = prompt();
while (type !== 'b' && type !== 'c') {
    console.log("That was not valid. Please type 'b' for bushfire or 'c' for covid.")
    type = prompt();
}

const data = {};

if (type === 'b') {

    data.disasterType = "bushfire";

    console.log("Type 'y' for Yes or 'n' for No to the following questions.");

    // Basic Assistance

    data.basicAssistance = {};

    console.log("Have you been affected as a business owner?")
    let businessOwner = prompt();
    while (businessOwner !== 'y' && businessOwner !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        businessOwner = prompt();
    }

    if (businessOwner === 'y') {
        data.basicAssistance.businessOwner = true;
    } else {
        data.basicAssistance.businessOwner = false;
    }

    data.basicAssistance = {};

    console.log("Have you been affected as a farmer or primary producer?")
    let farmerOrPrimaryProducer = prompt();
    while (farmerOrPrimaryProducer !== 'y' && farmerOrPrimaryProducer !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        farmerOrPrimaryProducer = prompt();
    }

    if (farmerOrPrimaryProducer === 'y') {
        data.basicAssistance.farmerOrPrimaryProducer = true;
    } else {
        data.basicAssistance.farmerOrPrimaryProducer = false;
    }

    console.log("Have you been affected as a property owner?")
    let propertyOwner = prompt();
    while (propertyOwner !== 'y' && propertyOwner !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        propertyOwner = prompt();
    }

    if (propertyOwner === 'y') {
        data.basicAssistance.propertyOwner = true;
    } else {
        data.basicAssistance.propertyOwner = false;
    }

    console.log("Have you been affected as a renter?")
    let renter = prompt();
    while (renter !== 'y' && renter !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        renter = prompt();
    }

    if (propertyOwner === 'y') {
        data.basicAssistance.renter = true;
    } else {
        data.basicAssistance.renter = false;
    }

    console.log("Have you been affected as a Volunteer Firefighter or SES?")
    let volunteerFirefighterOrSES = prompt();
    while (volunteerFirefighterOrSES !== 'y' && volunteerFirefighterOrSES !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        volunteerFirefighterOrSES = prompt();
    }

    if (volunteerFirefighterOrSES === 'y') {
        data.basicAssistance.volunteerFirefighterOrSES = true;
    } else {
        data.basicAssistance.volunteerFirefighterOrSES = false;
    }

    if (businessOwner === 'n' && farmerOrPrimaryProducer === 'n' && propertyOwner === 'n' && renter === 'n' && volunteerFirefighterOrSES === 'n') {
        data.basicAssistance.noneOfTheAbove = true;
    } else {
        data.basicAssistance.noneOfTheAbove = false;
    }

    // Certificate

    console.log("Do you need to replace any documents or licences?");
    let certificate = prompt();
    while (certificate !== 'y' && certificate !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        certificate = prompt();
    }

    data.certificate = {};

    if (certificate === 'y') {
        data.certificate.documentReplacement = "true";
    } else {
        data.certificate.documentReplacement = "false";
    }

    // Property and Vehicle

    data.propertyAndVehicle = {};

    console.log("Has your property been impacted or damaged?");
    console.log("This includes houses, buildings, sheds, fencing, business premises and fallen trees.")
    let property = prompt();
    while (property !== 'y' && property !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        property = prompt();
    }

    if (property === 'y') {
        data.propertyAndVehicle.damagedProperty = "true";
    } else {
        data.propertyAndVehicle.damagedProperty = "false";
    }

    console.log("Do you have any damaged vehicles?");
    let vehicle = prompt();
    while (vehicle !== 'y' && vehicle !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        vehicle = prompt();
    }

    if (vehicle === 'y') {
        data.propertyAndVehicle.registeredVehicle = "true";
    } else {
        data.propertyAndVehicle.registeredVehicle = "false";
    }

    console.log("Do you have any damaged vessels?");
    let vessel = prompt();
    while (vessel !== 'y' && vessel !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        vessel = prompt();
    }

    if (vessel === 'y') {
        data.propertyAndVehicle.registeredVehicle = true;
    } else {
        data.propertyAndVehicle.registeredVessel = false;
    }

    if (vehicle === 'n' && vessel === 'n') {
        data.propertyAndVehicle.noVehicle = true;
    } else {
        data.propertyAndVehicle.noVehicle = false;
    }

    // Livestock

    console.log("Do you have livestock or animals that are injured or affected?");
    console.log("This includes stock, cattle, horses, sheep and domestic pets.")
    let livestock = prompt();
    while (livestock !== 'y' && livestock !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        livestock = prompt();
    }

    data.livestock = {};

    if (livestock === 'y') {
        data.livestock.livestock = "true";
    } else {
        data.livestock.livestock = "false";
    }

    sendBushfireSurvey(JSON.stringify(data));

} else if (type === 'c') {


}

