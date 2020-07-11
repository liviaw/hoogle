const axios = require('axios');
const prompt = require('prompt-sync')();

const sendBushfireSurvey = async (json) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/bushfire/surveyform`;
    axios.post(url, json, { headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
            getBushFireResults(response.data);
        })
        .catch((error) => {
            console.log(error);
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
                    console.log(`Provider: ${service.provider}`);
                    console.log(`Initiative: ${service.initiativeName}`);
                    console.log(service.description.replace(/<[^<>]*>/g, ''));
                    console.log(`Further information: ${service.furtherInformationLink}\n`);
                }
                console.log('\n');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}


const sendCovidSurvey = async (json) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform`;
    axios.post(url, json, { headers: { 'Content-Type': 'application/json' }})
        .then((response) => {
            getCovidResults(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getCovidResults = async (code) => {
    const url = `https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=${code}&disasterType=covid`;
    axios.get(url)
        .then((response) => {
            categories = response.data.availableServices;
            for (let c = 0; c < categories.length; c++) {
                category = categories[c];
                console.log(`Category: ${category.category}\n`);
                for (let s = 0; s < category.services.length; s++) {
                    service = category.services[s];
                    console.log(`Provider: ${service.provider}`);
                    console.log(`Initiative: ${service.initiativeName}`);
                    console.log(service.description.replace(/<[^<>]*>/g, ''));
                    console.log(`Further information: ${service.furtherInformationLink}\n`);
                }
                console.log('\n');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}


console.log("Do you need assistance for the bushfires or COVID-19?");
console.log("Please type 'b' for bushfire or 'c' for covid.");

let type = prompt();
while (type !== 'b' && type !== 'c') {
    console.log("That was not valid. Please type 'b' for bushfire or 'c' for covid.");
    type = prompt();
}

const data = {};

if (type === 'b') {

    data.disasterType = "bushfire";

    console.log("Type 'y' for Yes or 'n' for No to the following questions.");

    // Basic Assistance

    data.basicAssistance = {};

    console.log("Have you been affected as a business owner?");
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

    console.log("Have you been affected as a farmer or primary producer?");
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

    console.log("Have you been affected as a property owner?");
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

    console.log("Have you been affected as a renter?");
    let renter = prompt();
    while (renter !== 'y' && renter !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        renter = prompt();
    }

    if (renter === 'y') {
        data.basicAssistance.renter = true;
    } else {
        data.basicAssistance.renter = false;
    }

    console.log("Have you been affected as a Volunteer Firefighter or SES?");
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
    console.log("This includes houses, buildings, sheds, fencing, business premises and fallen trees.");
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
        data.propertyAndVehicle.registeredVessel = true;
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
    console.log("This includes stock, cattle, horses, sheep and domestic pets.");
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

    data.userAnswers = []

    data.disasterType = "covid";

    // What is your current housing situation?

    console.log("What is your current housing situation? Type the appropriate number.");
    console.log("1. Renter");
    console.log("2. Owner with mortgage");
    console.log("3. Owner - without mortgage");
    console.log("4. Living with family or friends - few expenses");
    console.log("5. Other");
    let valid = false;
    while (!valid) {
        let residentType = prompt();
        switch(residentType) {
            case "1":
                data.userAnswers.push("residentTypeAustralian");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("housingSituationOwnerWithMortgage");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("housingSituationOwnerWithoutMortgage");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("housingSituationLivingWithFamilyOrFriendsWithoutExpense");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("housingSituationOther");
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4' or '5'.");
        }
    }

    // Do you have children or dependents?

    console.log("Do you have children or dependents?");
    let isPrimaryCarer = prompt();
    while (isPrimaryCarer !== 'y' && isPrimaryCarer !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        isPrimaryCarer = prompt();
    }

    if (isPrimaryCarer === 'y') {
        data.userAnswers.push("isPrimaryCarer");
    }

    // How old are you?

    console.log("How old are you? Type the appropriate number.");
    console.log("1. Under 16");
    console.log("2. 16 - 21");
    console.log("3. 22 - 39");
    console.log("4. 40 - 66");
    console.log("5. 67 - 80");
    console.log("6. Over 80");
    valid = false;
    while (!valid) {
        let ageBracket = prompt();
        switch(ageBracket) {
            case "1":
                data.userAnswers.push("ageBracketUnder16");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("ageBracket16to21");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("ageBracket22to39");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("ageBracket40to66");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("ageBracket67to80");
                valid = true;
                break;
            case "6":
                data.userAnswers.push("ageBracketOver80");
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4', '5' or '6'.");
        }
    }

    // What is your resident status?

    console.log("What is your resident status? Type the appropriate number.");
    console.log("Please select the option that best represents your residency as at 1 March 2020.");
    console.log("1. Australian citizen, permanent residence visa holder or protected Special Category visa (SCV) holder");
    console.log("2. New Zealand citizen living in Australia (non SCV holder)");
    console.log("3. International citizen living in Australia (non New Zealand)");
    valid = false;
    while (!valid) {
        let residentType = prompt();
        switch(residentType) {
            case "1":
                data.userAnswers.push("residentTypeAustralia");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("residentTypeNewZealand");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("residentTypeInternational");
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2' or '3'.");
        }
    }

    // Do you identify as Aboriginal or Torres Strait Islander?

    console.log("Do you identify as Aboriginal or Torres Strait Islander?");
    let doesIdentifyAsIndigenousAustralian = prompt();
    while (doesIdentifyAsIndigenousAustralian !== 'y' && doesIdentifyAsIndigenousAustralian !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        doesIdentifyAsIndigenousAustralian = prompt();
    }

    if (doesIdentifyAsIndigenousAustralian === 'y') {
        data.userAnswers.push("doesIdentifyAsIndigenousAustralian");
    }

    // Are you a student, trainee or apprentice?

    console.log("Are you a student, trainee or apprentice? Type the appropriate number.");
    console.log("1. Student");
    console.log("2. Trainee");
    console.log("3. Apprentice");
    console.log("4. None of the Above");
    valid = false;
    while (!valid) {
        let housingSituation = prompt();
        switch(housingSituation) {
            case "1":
                data.userAnswers.push("isStudent");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("isTrainee");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("isApprentice");
                valid = true;
                break;
            case "4":
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3' or '4'.");
        }
    }

    // What is your employment status?

    console.log("What is your employment status? Type the appropriate number.");
    console.log("1. Full-time employee");
    console.log("2. Part-time employee");
    console.log("3. Long-term casual employee");
    console.log("4. Recently stood down");
    console.log("5. Looking for work");
    console.log("6. Retired or not looking for work");
    console.log("7. None of the above");
    valid = false;
    while (!valid) {
        let employmentStatus = prompt();
        switch(employmentStatus) {
            case "1":
                data.userAnswers.push("employmentStatusFullTime");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("employmentStatusPartTime");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("employmentStatusLongTermCasual");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("employmentStatusRecentlyStoodDown");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("employmentStatusLookingForWork");
                valid = true;
                break;
            case "6":
                data.userAnswers.push("employmentStatusRetiredOrNotLookingForWork");
                valid = true;
                break;
            case "7":
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4', '5', '6' or '7'.");
        }

    }

    // Are you a business owner?

    console.log("Are you a business owner? Type the appropriate number.");
    let isBusinessOwner = prompt();
    while (isBusinessOwner !== 'y' && isBusinessOwner !== 'n') {
        console.log("That was not valid. Type 'y' for Yes or 'n' for no.");
        isBusinessOwner = prompt();
    }

    if (isBusinessOwner === 'y') {
        data.userAnswers.push("isBusinessOwner");


    // How many employees do you currently have?

    console.log("How many employees do you currently have? Type the appropriate number.");
    console.log("1. I'm a sole trader");
    console.log("2. 1 to 19");
    console.log("3. 20 to 49");
    console.log("4. 50 to 249");
    console.log("5. 250 or More");
    valid = false;
    while (!valid) {
        let numEmployees = prompt();
        switch(numEmployees) {
            case "1":
                data.userAnswers.push("numEmployeesMyselfOnly");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("numEmployees1to19");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("numEmployees20to49");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("numEmployees50to249");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("numEmployees250OrMore");
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4' or '5'.");
        }

    }

    // How does your current revenue compare to a similar period last year?

    console.log("How does your current revenue compare to a similar period last year?");
    console.log("The period can be a month from March 2020 to September 2020 compared to the same month in 2019. Where a quarterly period is chosen, businesses will compare projected turnover for either the June or September 2020 quarters to the same quarter in 2019.");

    console.log("Does any of the below circumstances apply to you?? Type the appropriate number.");
    console.log("1. 0-14% reduction");
    console.log("2. 15-29% reduction");
    console.log("3. 30-49% reduction");
    console.log("4. 50% or more reduction");
    console.log("5. No reduction at the moment");
    valid = false;
    while (!valid) {
        let revenueReduction = prompt();
        switch(revenueReduction) {
            case "1":
                data.userAnswers.push("revenueReduction0to14Percent");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("revenueReduction15to29Percent");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("revenueReduction30to49Percent");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("revenueReduction50orMorePercent");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("revenueReductionNone");
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4' or '5'.");
        }

    }



    }
    

    // Does any of the below circumstances apply to you?

    console.log("Does any of the below circumstances apply to you?? Type the appropriate number.");
    console.log("1. In self-isolation or self-quarantine due to health concerns");
    console.log("2. In self-isolation or self-quarantine due to travel");
    console.log("3. National Disability Insurance Scheme (NDIS) participant");
    console.log("4. Healthcare worker");
    console.log("5. None of the above");
    valid = false;
    while (!valid) {
        let employmentStatus = prompt();
        switch(employmentStatus) {
            case "1":
                data.userAnswers.push("selfIsolatingReasonExistingHealthConcerns");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("selfIsolatingReasonReturnFromTravel");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("selfIsolatingReasonNdisParticipant");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("selfIsolatingReasonHealthcareWorker");
                valid = true;
                break;
            case "5":
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4' or '5'.");
        }

    }

    // What support do you need most right now?

    console.log("What support do you need most right now? Type the appropriate number.");
    console.log("1. Income support");
    console.log("2. Support with housing payments");
    console.log("3. Help with food and household items");
    console.log("4. Help adjusting to a different lifestyle");
    console.log("5. Support for my children or dependents");
    console.log("6. Support for my mental health");
    console.log("7. None of the above");
    valid = false;
    while (!valid) {
        let employmentStatus = prompt();
        switch(employmentStatus) {
            case "1":
                data.userAnswers.push("supportOptionsIncomeSupport");
                valid = true;
                break;
            case "2":
                data.userAnswers.push("supportOptionsSupportWithHousingPayments");
                valid = true;
                break;
            case "3":
                data.userAnswers.push("supportOptionsFoodAndHousehold");
                valid = true;
                break;
            case "4":
                data.userAnswers.push("supportOptionsLifestyle");
                valid = true;
                break;
            case "5":
                data.userAnswers.push("supportOptionsChildSupport");
                valid = true;
                break;
            case "6":
                data.userAnswers.push("supportOptionsMentalHealth");
                valid = true;
                break;
            case "7":
                valid = true;
                break;
            default:
                console.log("That is invalid. Please type '1', '2', '3', '4', '5', '6' or '7'.");
        }

    }

    sendCovidSurvey(JSON.stringify(data));

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

// {"userAnswers":["ageBracketUnder16","residentTypeInternational","doesIdentifyAsIndigenousAustralian","isPrimaryCarer","housingSituationRenter","housingSituationOwnerWithMortgage","housingSituationOwnerWithoutMortgage","housingSituationLivingWithFamilyOrFriendsWithoutExpense","housingSituationOther","isStudent","isTrainee","isApprentice","employmentStatusFullTime","employmentStatusPartTime","employmentStatusLongTermCasual","employmentStatusReducedHours","employmentStatusRecentlyStoodDown","employmentStatusLookingForWork","employmentStatusRetiredOrNotLookingForWork","isBusinessOwner","numEmployeesMyselfOnly","revenueReduction15to29Percent","selfIsolatingReasonExistingHealthConcerns","selfIsolatingReasonReturnFromTravel","selfIsolatingReasonNdisParticipant","selfIsolatingReasonHealthcareWorker","supportOptionsLifestyle","supportOptionsMentalHealth"],"disasterType":"covid"}


// {"userAnswers":["ageBracketOver80","residentTypeAustralian","housingSituationOther","supportOptionsLifestyle"],"disasterType":"covid"}