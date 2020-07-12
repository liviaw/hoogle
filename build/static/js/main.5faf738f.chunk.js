(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{137:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r.n(a),n=r(59),s=r.n(n),o=(r(72),r(2)),l=r(3),u=r(5),g=r(4),c=r(38),d=(r(73),r(25)),p=r.n(d),m=(r(75),r(76),function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={numPages:null,pageNumber:1},e.onDocumentLoadSuccess=function(t){var r=t.numPages;e.setState({numPages:r})},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state;e.pageNumber,e.numPages;return i.a.createElement("div",null,i.a.createElement("a",{href:"./filled-form.pdf",download:!0}," Your filled in Form "))}}]),r}(a.Component)),v=r(63),f=r.n(v),h=r(64),y=r.n(h),b=r(66),w=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).onDrop=function(t){e.setState({files:t})},e.state={files:[]},e}return Object(l.a)(r,[{key:"render",value:function(){var e={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},t={display:"flex",minWidth:0,overflow:"hidden"},r={display:"block",width:"auto",height:"100%"},a={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},n=(this.state.files.map((function(e){return i.a.createElement("div",{style:a,key:e.name},i.a.createElement("div",{style:t},i.a.createElement("img",{src:e.preview,style:r})))})),this.state.files.map((function(e){return i.a.createElement("li",{key:e.name},e.name," - ",e.size," bytes")})));return i.a.createElement(b.a,{onDrop:this.onDrop},(function(t){var r=t.getRootProps,a=t.getInputProps;return i.a.createElement("section",{className:"container"},i.a.createElement("div",r({className:"dropzone"}),i.a.createElement("input",a()),i.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")),i.a.createElement("aside",{style:e},i.a.createElement("ul",null,n)))}))}}]),r}(a.Component),O=r(8),E=r.n(O),S=r(21),k=r(26),A=r.n(k),N=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={content:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){var t,r,a,i,n,s,o,l,u,g,c,d,p,m,v,f,h;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.steps,r=t.businessOwner,a=t.farmerOrPrimaryProducer,i=t.propertyOwner,n=t.renter,s=t.volunteerFirefighterOrSES,o=t.documentReplacement,l=t.damagedProperty,u=t.registeredVehicle,g=t.registeredVessel,c=t.livestock,d={disasterType:"bushfire",basicAssistance:{businessOwner:r.value,farmerOrPrimaryProducer:a.value,propertyOwner:i.value,renter:n.value,volunteerFirefighterOrSES:s.value,noneOfTheAbove:"true"===r.value||"true"===a.value||"true"===i.value||"true"===n.value||"true"===s.value},documentReplacement:{documentReplacement:o.value},propertyAndVehicle:{damagedProperty:l.value,registeredVehicle:u.value,registeredVessel:g.value,noVehicle:"true"===l.value||"true"===u.value||"true"===g.value},livestock:{livestock:c.value}},"https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/bushfire/surveyform",e.prev=4,e.next=7,A.a.post("https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/bushfire/surveyform",d,{headers:{"Content-Type":"application/json"}});case 7:return p=e.sent,m=p.data,v="https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=".concat(m),e.next=12,A.a.get(v);case 12:f=e.sent,h=f.data.availableServices,this.setState({content:h}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[4,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"Bushfire"},this.state.content.map(I))}}]),r}(a.Component);N.defaultProps={steps:void 0};var I=function(e){return i.a.createElement("div",{className:"category",key:e.rank},i.a.createElement("h2",null,"Category: ",e.category),e.services.map(C))},C=function(e){return i.a.createElement("div",{className:"service",key:e.serviceOfferingId},i.a.createElement("h3",null,"Provider: ",e.provider),i.a.createElement("p",null,"Initiative: ",e.initiativeName),i.a.createElement("p",null,"Description: ",e.description.replace(/<[^<>]*>/g,"")),i.a.createElement("p",null,"Find more information ",i.a.createElement("a",{href:e.furtherInformationLink},"here"),"."))},Q=N,P=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={content:[]},a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(S.a)(E.a.mark((function e(){var t,r,a,i,n,s,o,l,u,g,c,d,p,m,v,f,h,y,b;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.steps,r=t.housingSituation,a=t.isPrimaryCarer,i=t.ageBracket,n=t.residentType,s=t.doesIdentifyAsIndigenousAustralian,o=t.education,l=t.employmentStatus,u=t.isBusinessOwner,g=t.numEmployees,c=t.revenueReduction,d=t.selfIsolating,p=t.supportOptions,(m={disasterType:"covid",userAnswers:[]}).userAnswers.push(r.value),"true"===a.value&&m.userAnswers.push("isPrimaryCarer"),m.userAnswers.push(i.value),m.userAnswers.push(n.value),"true"===s.value&&m.userAnswers.push("doesIdentifyAsIndigenousAustralian"),"false"!==o.value&&m.userAnswers.push(o.value),"false"!==l.value&&m.userAnswers.push(l.value),"true"===u.value&&(m.userAnswers.push("isBusinessOwner"),m.userAnswers.push(g.value),m.userAnswers.push(c.value)),"false"!==d.value&&m.userAnswers.push(d.value),"false"!==p.value&&m.userAnswers.push(p.value),"https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform",e.prev=14,e.next=17,A.a.post("https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/covid/surveyform",m,{headers:{"Content-Type":"application/json"}});case 17:return v=e.sent,f=v.data,h="https://api.g.service.nsw.gov.au/biz/drs/v1/drs/api/summary?surveyFormId=".concat(f,"&disasterType=covid"),e.next=22,A.a.get(h);case 22:y=e.sent,b=y.data.availableServices,this.setState({content:b}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(14),console.log(e.t0);case 30:case"end":return e.stop()}}),e,this,[[14,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"Covid"},this.state.content.map(j))}}]),r}(a.Component);P.defaultProps={steps:void 0};var j=function(e){return i.a.createElement("div",{className:"category",key:e.rank},i.a.createElement("h2",null,"Category: ",e.category),e.services.map(T))},T=function(e){return i.a.createElement("div",{className:"service",key:e.serviceOfferingId},i.a.createElement("h3",null,"Provider: ",e.provider),i.a.createElement("p",null,"Initiative: ",e.initiativeName),i.a.createElement("p",null,"Description: ",e.description.replace(/<[^<>]*>/g,"")),i.a.createElement("p",null,"Find more information ",i.a.createElement("a",{href:e.furtherInformationLink},"here"),"."))},M=P,x=r(24),R=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={loading:!0,result:"",trigger:!1},a.triggetNext=a.triggetNext.bind(Object(x.a)(a)),a}return Object(l.a)(r,[{key:"componentWillMount",value:function(){var e=this,t=this.props.steps.donation.value;function r(){return a.apply(this,arguments)}function a(){return(a=Object(S.a)(E.a.mark((function e(){var t,r,a=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}"no"===t?r("https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q=covid-19").then((function(t){console.log(t),t.result.records&&t.result.records.length>0?e.setState({loading:!1,result:t.result.records}):e.setState({loading:!1,result:"Not found."})})):"yes"===t?this.props.triggerNextStep({value:"",trigger:"charity-search2"}):r("https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q="+t).then((function(t){console.log(t),t.result.records&&t.result.records.length>0?e.setState({loading:!1,result:t.result.records}):e.setState({loading:!1,result:"Not found."})}))}},{key:"triggetNext",value:function(){var e=this;this.setState({trigger:!0},(function(){e.props.triggerNextStep()}))}},{key:"displayCharities",value:function(e){var t=this;return e.length>5&&(e=e.slice(0,5)),i.a.createElement("div",null,"These are the top recommended charities for you:",e.map((function(e){return i.a.createElement("div",{key:e._id,onClick:function(){return t.props.triggerNextStep({value:e.Charity_Legal_Name,trigger:"charity-prompt"})}},i.a.createElement("div",null,i.a.createElement("b",null,e.Charity_Legal_Name," ->")),i.a.createElement("div",null,e.Charity_Website))})))}},{key:"render",value:function(){var e=this,t=this.state,r=t.trigger,a=t.loading,n=t.result;return i.a.createElement("div",{className:"charity"},a?i.a.createElement(d.Loading,null):this.displayCharities(n),!a&&i.a.createElement("div",{style:{textAlign:"center",marginTop:20}},!r&&i.a.createElement("button",{onClick:function(){return e.triggetNext()}},"Search Again")))}}]),r}(a.Component);R.defaultProps={steps:void 0,triggerNextStep:void 0};var F=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={loading:!0,result:"",trigger:!1},a.triggetNext=a.triggetNext.bind(Object(x.a)(a)),a}return Object(l.a)(r,[{key:"componentWillMount",value:function(){var e=this,t=this.props.steps;console.log(t);var r="https://data.gov.au/data/api/3/action/datastore_search?resource_id=eb1e6be4-5b13-4feb-b28e-388bf7c26f93&q="+t[3].value;function a(){return(a=Object(S.a)(E.a.mark((function e(){var t,r,a=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(r),function(){return a.apply(this,arguments)}(r).then((function(t){console.log(t),t.result.records&&t.result.records.length>0?e.setState({loading:!1,result:t.result.records}):e.setState({loading:!1,result:"Not found."})}))}},{key:"triggetNext",value:function(){var e=this;this.setState({trigger:!0},(function(){e.props.triggerNextStep()}))}},{key:"displayCharities",value:function(e){return i.a.createElement("div",{key:e[0]._id},i.a.createElement("div",null,i.a.createElement("b",null,e[0].Charity_Legal_Name)),i.a.createElement("div",null,e[0].Charity_Website),e[0].Address_Line_1?i.a.createElement("div",null,e[0].Address_Line_1):"",e[0].Address_Line_2?i.a.createElement("div",null,e[0].Address_Line_2):"",e[0].Address_Line_3?i.a.createElement("div",null,e[0].Address_Line_3):"",e[0].Town_City?i.a.createElement("div",null,e[0].Town_City,", ",e[0].State," ",e[0].Postcode):"")}},{key:"render",value:function(){var e=this,t=this.state,r=t.trigger,a=t.loading,n=t.result;return i.a.createElement("div",{className:"charity"},a?i.a.createElement(d.Loading,null):this.displayCharities(n),!a&&i.a.createElement("div",{style:{textAlign:"center",marginTop:20}},!r&&i.a.createElement("button",{onClick:function(){return e.triggetNext()}},"Search Again")))}}]),r}(a.Component);F.defaultProps={steps:void 0,triggerNextStep:void 0};var B=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{headerTitle:"KlueBot",recognitionEnable:!0,speechSynthesis:{enable:!0,lang:"en"},steps:_,botAvatar:y.a,userAvatar:f.a}))}}]),r}(a.Component),_=[{id:"welcome",message:"Hello! My name is Kluebot! What can I help you with?",trigger:"disasterType"},{id:"welcomeAgain",message:"What else can Kluebot help you with?",trigger:"disasterType"},{id:"disasterType",options:[{value:"bushfire",label:"Bushfire",trigger:"bushfire"},{value:"covid",label:"Covid",trigger:"covid"},{value:"charity",label:"I would like to help!",trigger:"charity-search"}]},{id:"bushfire",message:"I will just ask a few questions. At the end, I will send you everything I know to help you",trigger:"businessOwnerMessage"},{id:"businessOwnerMessage",message:"Have you been affected as a business owner?",trigger:"businessOwner"},{id:"businessOwner",options:[{value:"true",label:"Yes",trigger:"farmerOrPrimaryProducerMessage"},{value:"false",label:"No",trigger:"farmerOrPrimaryProducerMessage"}]},{id:"farmerOrPrimaryProducerMessage",message:"Have you been affected as a farmer or primary producer?",trigger:"farmerOrPrimaryProducer"},{id:"farmerOrPrimaryProducer",options:[{value:"true",label:"Yes",trigger:"propertyOwnerMessage"},{value:"false",label:"No",trigger:"propertyOwnerMessage"}]},{id:"propertyOwnerMessage",message:"Have you been affected as a property owner?",trigger:"propertyOwner"},{id:"propertyOwner",options:[{value:"true",label:"Yes",trigger:"renterMessage"},{value:"false",label:"No",trigger:"renterMessage"}]},{id:"renterMessage",message:"Have you been affected as a renter?",trigger:"renter"},{id:"renter",options:[{value:"true",label:"Yes",trigger:"volunteerFirefighterOrSESMessage"},{value:"false",label:"No",trigger:"volunteerFirefighterOrSESMessage"}]},{id:"volunteerFirefighterOrSESMessage",message:"Have you been affected as a Volunteer Firefighter or SES?",trigger:"volunteerFirefighterOrSES"},{id:"volunteerFirefighterOrSES",options:[{value:"true",label:"Yes",trigger:"documentReplacementMessage"},{value:"false",label:"No",trigger:"documentReplacementMessage"}]},{id:"documentReplacementMessage",message:"Do you need to replace any documents or licences?",trigger:"documentReplacement"},{id:"documentReplacement",options:[{value:"true",label:"Yes",trigger:"damagedPropertyMessage"},{value:"false",label:"No",trigger:"damagedPropertyMessage"}]},{id:"damagedPropertyMessage",message:"Has your property been impacted or damaged? This includes houses, buildings, sheds, fencing, business premises and fallen trees.",trigger:"damagedProperty"},{id:"damagedProperty",options:[{value:"true",label:"Yes",trigger:"registeredVehicleMessage"},{value:"false",label:"No",trigger:"registeredVehicleMessage"}]},{id:"registeredVehicleMessage",message:"Do you have any damaged vehicles?",trigger:"registeredVehicle"},{id:"registeredVehicle",options:[{value:"true",label:"Yes",trigger:"registeredVesselMessage"},{value:"false",label:"No",trigger:"registeredVesselMessage"}]},{id:"registeredVesselMessage",message:"Do you have any damaged vessels?",trigger:"registeredVessel"},{id:"registeredVessel",options:[{value:"true",label:"Yes",trigger:"livestockMessage"},{value:"false",label:"No",trigger:"livestockMessage"}]},{id:"livestockMessage",message:"Do you have livestock or animals that are injured or affected? This includes stock, cattle, horses, sheep and domestic pets.",trigger:"livestock"},{id:"livestock",options:[{value:"true",label:"Yes",trigger:"bushfireEnd"},{value:"false",label:"No",trigger:"bushfireEnd"}]},{id:"bushfireEnd",message:"Thanks! I will get some useful information now.",trigger:"bushfireComponent"},{id:"bushfireComponent",component:i.a.createElement(Q,null),trigger:"welcomeAgain"},{id:"covid",message:"What form of help do you need?",trigger:"covid-options"},{id:"covid-options",options:[{value:1,label:"Support",trigger:"covidSupport"},{value:2,label:"Fill in Form",trigger:"covid-form"},{value:3,label:"Translate Form to a different language",trigger:"translate-covid-form"},{value:4,label:"Information",trigger:"covid-info"}]},{id:"covidSupport",message:"I will just ask a few questions. At the end, I will send you everything I know to help you :)",trigger:"housingSituationQuestion"},{id:"housingSituationQuestion",message:"What is your current housing situation?",trigger:"housingSituation"},{id:"housingSituation",options:[{value:"housingSituationRenter",label:"Renter",trigger:"isPrimaryCarerQuestion"},{value:"housingSituationOwnerWithMortgage",label:"Owner with mortgage",trigger:"isPrimaryCarerQuestion"},{value:"housingSituationOwnerWithoutMortgage",label:"Owner - without mortgage",trigger:"isPrimaryCarerQuestion"},{value:"housingSituationLivingWithFamilyOrFriendsWithoutExpense",label:"Living with family or friends - few expenses",trigger:"isPrimaryCarerQuestion"},{value:"housingSituationOther",label:"Other",trigger:"isPrimaryCarerQuestion"}]},{id:"isPrimaryCarerQuestion",message:"Do you have children or dependents?",trigger:"isPrimaryCarer"},{id:"isPrimaryCarer",options:[{value:"true",label:"Yes",trigger:"ageBracketQuestion"},{value:"false",label:"No",trigger:"ageBracketQuestion"}]},{id:"ageBracketQuestion",message:"How old are you?",trigger:"ageBracket"},{id:"ageBracket",options:[{value:"ageBracketUnder16",label:"Under 16",trigger:"residentTypeQuestion"},{value:"ageBracket16to21",label:"16 - 21",trigger:"residentTypeQuestion"},{value:"ageBracket22to39",label:"22 - 39",trigger:"residentTypeQuestion"},{value:"ageBracket40to66",label:"40 - 66",trigger:"residentTypeQuestion"},{value:"ageBracket67to80",label:"67 - 80",trigger:"residentTypeQuestion"},{value:"ageBracketOver80",label:"Over 80",trigger:"residentTypeQuestion"}]},{id:"residentTypeQuestion",message:"What is your resident status? Please select the option that best represents your residency as at 1 March 2020.",trigger:"residentType"},{id:"residentType",options:[{value:"residentTypeAustralia",label:"Australian citizen, permanent residence visa holder or protected Special Category visa (SCV) holder",trigger:"doesIdentifyAsIndigenousAustralianQuestion"},{value:"residentTypeNewZealand",label:"New Zealand citizen living in Australia (non SCV holder)",trigger:"doesIdentifyAsIndigenousAustralianQuestion"},{value:"residentTypeInternational",label:"International citizen living in Australia (non New Zealand)",trigger:"doesIdentifyAsIndigenousAustralianQuestion"}]},{id:"doesIdentifyAsIndigenousAustralianQuestion",message:"Do you identify as Aboriginal or Torres Strait Islander?",trigger:"doesIdentifyAsIndigenousAustralian"},{id:"doesIdentifyAsIndigenousAustralian",options:[{value:"true",label:"Yes",trigger:"educationQuestion"},{value:"false",label:"No",trigger:"educationQuestion"}]},{id:"educationQuestion",message:"Are you a student, trainee or apprentice?",trigger:"education"},{id:"education",options:[{value:"isStudent",label:"Student",trigger:"employmentStatusQuestion"},{value:"isTrainee",label:"Trainee",trigger:"employmentStatusQuestion"},{value:"isApprentice",label:"Apprentice",trigger:"employmentStatusQuestion"},{value:"false",label:"None of the above",trigger:"employmentStatusQuestion"}]},{id:"employmentStatusQuestion",message:"What is your employment status?",trigger:"employmentStatus"},{id:"employmentStatus",options:[{value:"employmentStatusFullTime",label:"Full-time employee",trigger:"isBusinessOwnerQuestion"},{value:"employmentStatusPartTime",label:"Part-time employee",trigger:"isBusinessOwnerQuestion"},{value:"employmentStatusLongTermCasual",label:"Long-term casual employee",trigger:"isBusinessOwnerQuestion"},{value:"employmentStatusRecentlyStoodDown",label:"Recently stood down",trigger:"isBusinessOwnerQuestion"},{value:"employmentStatusLookingForWork",label:"Looking for work",trigger:"isBusinessOwnerQuestion"},{value:"employmentStatusRetiredOrNotLookingForWork",label:"Retired or not looking for work",trigger:"isBusinessOwnerQuestion"},{value:"false",label:"None of the above",trigger:"isBusinessOwnerQuestion"}]},{id:"isBusinessOwnerQuestion",message:"Are you a business owner?",trigger:"isBusinessOwner"},{id:"isBusinessOwner",options:[{value:"true",label:"Yes",trigger:"numEmployeesQuestion"},{value:"false",label:"No",trigger:"selfIsolatingQuestion"}]},{id:"numEmployeesQuestion",message:"How many employees do you currently have?",trigger:"numEmployees"},{id:"numEmployees",options:[{value:"numEmployeesMyselfOnly",label:"I'm a sole trader",trigger:"revenueReductionQuestion"},{value:"numEmployees1to19",label:"1 to 19",trigger:"revenueReductionQuestion"},{value:"numEmployees20to49",label:"20 to 49",trigger:"revenueReductionQuestion"},{value:"numEmployees50to249",label:"50 to 249",trigger:"revenueReductionQuestion"},{value:"numEmployees250OrMore",label:"250 or More",trigger:"revenueReductionQuestion"}]},{id:"revenueReductionQuestion",message:"How does your current revenue compare to a similar period last year? The period can be a month from March 2020 to September 2020 compared to the same month in 2019. Where a quarterly period is chosen, businesses will compare projected turnover for either the June or September 2020 quarters to the same quarter in 2019.",trigger:"revenueReduction"},{id:"revenueReduction",options:[{value:"revenueReductionNone",label:"No reduction at the moment",trigger:"selfIsolatingQuestion"},{value:"revenueReduction0to14Percent",label:"0-14% reduction",trigger:"selfIsolatingQuestion"},{value:"revenueReduction15to29Percent",label:"15-29% reduction",trigger:"selfIsolatingQuestion"},{value:"revenueReduction30to49Percent",label:"30-49% reduction",trigger:"selfIsolatingQuestion"},{value:"revenueReduction50orMorePercent",label:"50% or more reduction",trigger:"selfIsolatingQuestion"}]},{id:"selfIsolatingQuestion",message:"Does any of the below circumstances apply to you?",trigger:"selfIsolating"},{id:"selfIsolating",options:[{value:"selfIsolatingReasonExistingHealthConcerns",label:"In self-isolation or self-quarantine due to health concerns",trigger:"supportOptionsQuestion"},{value:"selfIsolatingReasonReturnFromTravel",label:"In self-isolation or self-quarantine due to travel",trigger:"supportOptionsQuestion"},{value:"selfIsolatingReasonNdisParticipant",label:"National Disability Insurance Scheme (NDIS) participant",trigger:"supportOptionsQuestion"},{value:"selfIsolatingReasonHealthcareWorker",label:"Healthcare worker",trigger:"supportOptionsQuestion"},{value:"false",label:"None of the above",trigger:"supportOptionsQuestion"}]},{id:"supportOptionsQuestion",message:"What support do you need most right now?",trigger:"supportOptions"},{id:"supportOptions",options:[{value:"supportOptionsIncomeSupport",label:"Income support",trigger:"covidEnd"},{value:"supportOptionsSupportWithHousingPayments",label:"Support with housing payments",trigger:"covidEnd"},{value:"supportOptionsFoodAndHousehold",label:"Help with food and household items",trigger:"covidEnd"},{value:"supportOptionsLifestyle",label:"Help adjusting to a different lifestyle",trigger:"covidEnd"},{value:"supportOptionsChildSupport",label:"Support for my children or dependents",trigger:"covidEnd"},{value:"supportOptionsMentalHealth",label:"Support for my mental health",trigger:"covidEnd"},{value:"false",label:"None of the above",trigger:"covidEnd"}]},{id:"covidEnd",message:"Thanks! I will get some useful information now.",trigger:"covidComponent"},{id:"covidComponent",component:i.a.createElement(M,null),trigger:"welcomeAgain"},{id:"translate-covid-form",component:i.a.createElement(w,null),trigger:"covid-form-finance"},{id:"covid-info",message:"Here are the info about COVID-19?",trigger:"covid-form-finance"},{id:"covid-form",message:"What form do you need?",trigger:"covid-form-user"},{id:"covid-form-user",user:!0,trigger:"covid-form-finance"},{id:"covid-form-finance",message:"what is your preferable language?",trigger:"user-form-language"},{id:"user-form-language",user:!0,trigger:"covid-form-name"},{id:"covid-form-name",message:"cual es tu nombre legal completo",trigger:"user-form-legal-name"},{id:"user-form-legal-name",user:!0,trigger:"what-is-your-age"},{id:"what-is-your-age",message:"Cu\xe1l es tu edad",trigger:"user-what-is-your-age"},{id:"user-what-is-your-age",user:!0,trigger:"filled-form"},{id:"filled-form",message:"aqu\xed est\xe1 tu forma",trigger:"give-filled-form"},{id:"give-filled-form",component:i.a.createElement(m,null),trigger:"welcomeAgain"},{id:"charity-search",message:"Is there a current disaster or charity you wish to help in particular?",trigger:"donation"},{id:"charity-search2",message:"Which current disaster or charity do you wish to help in particular?",trigger:"donation"},{id:"donation",user:!0,trigger:"3"},{id:"3",component:i.a.createElement(R,null),waitAction:!0,trigger:"welcomeAgain"},{id:"charity-prompt",message:"Here is some more information about {previousValue}",trigger:"charity-info"},{id:"charity-info",component:i.a.createElement(F,null),waitAction:!0,trigger:"welcomeAgain"}],W=B,D={background:"#f5f8fb",fontFamily:"Open Sans",headerBgColor:"#0084FF",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#0084FF",botFontColor:"#fefefe",userBubbleColor:"#fefefe",userFontColor:"#4a4a4a"},L=function(e){Object(u.a)(r,e);var t=Object(g.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"centreDiv"},i.a.createElement(c.ThemeProvider,{theme:D},i.a.createElement(W,null))))}}]),r}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=31},63:function(e,t,r){e.exports=r.p+"static/media/bob-ross.3baa4bfc.jpg"},64:function(e,t,r){e.exports=r.p+"static/media/bot-sentinel.7971d029.jpg"},67:function(e,t,r){e.exports=r(137)},72:function(e,t,r){},73:function(e,t,r){},80:function(e,t){},82:function(e,t){},83:function(e,t){},84:function(e,t){},85:function(e,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.5faf738f.chunk.js.map