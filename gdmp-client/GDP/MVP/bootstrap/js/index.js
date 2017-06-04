 function init() {
    // $.material.init();

    var json ={
 "completedHtml": "<p>Completed</p>",
 "pages": [
  {
   "elements": [
    {
     "type": "html",
     "html": "<p>வணக்கம், நான் வோடஃபோனில் இருந்து பேசுகிறேன் </p>\n<p>Goodmorning/Afternoon/Evening, I am calling from Vodafone</>\n\n\n",
     "name": "greetings",
     "width": "50"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "permission",
       "text": "Permission"
      },
      {
       "value": "denied",
       "text": "Denied"
      }
     ],
     "colCount": 0,
     "name": "checkPermission",
     "title": "I would like to talk to you about Vodafone new paln for you,  Can I have your time please?",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "CallBackTime",
     "title": "May I know the call back date and time?",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0,
     "name": "exit",
     "title": "Exit Survey?",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10"
    }
   ],
   "name": "Greetings",
   "navigationButtonsVisibility": "show",
   "title": "Greeting"
  },
  {
   "elements": [
    {
     "type": "text",
     "name": "CustomerName",
     "title": "May I know your Name Sir/Madam?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0,
     "name": "UserOfConnection",
     "title": "Are you the user of the connection?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "prepaid",
       "text": "Pre Paid"
      },
      {
       "value": "postpaid",
       "text": "Post Paid"
      }
     ],
     "colCount": 0,
     "name": "TypeOfConnecton",
     "title": "Are you using a prepaid number or postpaid?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "3g",
       "text": "3G"
      },
      {
       "value": "4g",
       "text": "4G"
      }
     ],
     "colCount": 0,
     "name": "typesOfHandsets",
     "title": "Are you using a 3G Handset or a 4G handset?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "vodafone",
       "text": "Vodafone"
      },
      {
       "value": "airtel",
       "text": "Airtel"
      },
      {
       "value": "bsnl",
       "text": "BSNL"
      },
      {
       "value": "idea",
       "text": "IDEA"
      },
      {
       "value": "aircel",
       "text": "Aircel"
      },
      {
       "value": "jio",
       "text": "Jio"
      }
     ],
     "colCount": 0,
     "name": "TypesOfNetwork",
     "title": "May I know which network you are using?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "SpendOnPhoneUsage",
     "title": "How much do you spend for your mobile phone usage in a month?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "SpendOnInternet",
     "title": "May I know How much Internet do you use?",
     "width": "10"
    },
    {
     "type": "panel",
     "elements": [
      {
       "type": "checkbox",
       "choices": [
        {
         "value": "std",
         "text": "STD"
        },
        {
         "value": "isd",
         "text": "ISD"
        }
       ],
       "colCount": 0,
       "name": "question2",
       "title": "Do you use STD and ISD?"
      },
      {
       "type": "text",
       "name": "minutesUsageOfStdIsd",
       "title": "If so, how many minutes do you use?",
       "width": "10"
      }
     ],
     "name": "STDISDusage"
    },
    {
     "type": "text",
     "name": "RomingDays",
     "title": "How many days in a month you will be in Roaming?",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "Basics",
   "navigationButtonsVisibility": "show"
  },
  {
   "elements": [
    {
     "type": "html",
     "html": "<p> Explain about the plan</p>",
     "name": "checkCustomerInterest"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "interested",
       "text": "Interested"
      },
      {
       "value": "notInterested",
       "text": "Not Interested"
      },
      {
       "value": "callback",
       "text": "Callback"
      }
     ],
     "colCount": 0,
     "name": "planExplain",
     "title": "check if he is interested/not interested/call back"
    }
   ],
   "innerIndent": 3,
   "name": "productPitch",
   "navigationButtonsVisibility": "show",
   "title": "Product Pitch"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "salaried",
       "text": "Salaried"
      },
      {
       "value": "professional",
       "text": "Professional"
      },
      {
       "value": "ownBusiness",
       "text": "Own Business"
      },
      {
       "value": "agriculture",
       "text": "Agriculture"
      },
      {
       "value": "retired",
       "text": "Retired"
      },
      {
       "value": "student",
       "text": "Student"
      },
      {
       "value": "housewife",
       "text": "House Wife"
      },
      {
       "value": "others",
       "text": "Others"
      }
     ],
     "colCount": 4,
     "name": "OccupationType",
     "title": "May I know your occupation?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0,
     "name": "convertToCUG",
     "title": "Do you use any other number which you can change to vodafone postpaid and make CUG?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "currentAddress",
       "text": "Current Address"
      },
      {
       "value": "differentAddress",
       "text": "Different Address"
      }
     ],
     "colCount": 0,
     "name": "AddressProof",
     "title": "Does your proof contains the current address or different address?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "distancToVodafoneStore",
     "title": "What is the distance between your residence and Vodafone store?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "monthlyIncome",
     "title": "May I know your current monthly income?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "familyStay",
       "text": "Family Stay"
      },
      {
       "value": "bachelorStay",
       "text": "Bachelor Stay"
      }
     ],
     "colCount": 0,
     "name": "whereStay",
     "title": "May I know whether you are staying with your family or in bachelor stay?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "concreteHouse",
       "text": "Concrete House"
      },
      {
       "value": "hutHouse",
       "text": "Hut House"
      }
     ],
     "colCount": 0,
     "name": "houseType",
     "title": "Are you living in a concrete builing or a hut house?",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0,
     "name": "previousBillCopy",
     "title": "Can I get your previous bill copy?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "usageDays",
     "title": "May I know how long you are using this number with your current Network?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "companyName",
     "title": "May I  know your company name?",
     "width": "10"
    }
   ],
   "name": "Intrested",
   "navigationButtonsVisibility": "show",
   "title": "Intrested",
   "visible": false,
   "visibleIf": "{planExplain}=1"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "1",
       "text": "Happy with other network Coverage"
      },
      {
       "value": "2",
       "text": "Not happy with the suggested plan"
      },
      {
       "value": "3",
       "text": "Not ready to pay the Deposit"
      },
      {
       "value": "4",
       "text": "Ability to make payment"
      },
      {
       "value": "5",
       "text": "Happy with the current networks's retention plan"
      },
      {
       "value": "6",
       "text": "Company linked connections"
      },
      {
       "value": "7",
       "text": "Happy with the exxisting network's offer"
      },
      {
       "value": "8",
       "text": "Happy with prepaid"
      },
      {
       "value": "9",
       "text": "Previous bad experience in Postpaid"
      },
      {
       "value": "10",
       "text": "Others"
      }
     ],
     "colCount": 2,
     "name": "reasonForNotInterested",
     "title": "May I know the reason why you are not interested?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "residingLocation",
     "title": "Can you tell me the location & area in which you are residing now ?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=1",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question4",
     "title": "Based on your usage we have suggested this plan, if you are not satisfied with this can we suggest some other plan?if yes need to explain some other plan?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=2",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question5",
     "title": "OCL - As your area is Out of City Limit, so Rs.______ is mandate ",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=3",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question6",
     "title": "Bachelor - Sir Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=3",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question8",
     "title": "May I know your affordability for your monthly bill?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=4",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question9",
     "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=4",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question10",
     "title": "What was the offer provided by existing network?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=5",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question11",
     "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=6",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question12",
     "title": "Are you interested to take new postpaid coonnection for your personal purpose?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=6",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question13",
     "title": "What is the current plan your are using?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=7",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question14",
     "title": "With Which network?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=7",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question15",
     "title": "How much you are spening per month for your recharge",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=8",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question16",
     "title": "Is the amount inclusive of Voice & Data",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=8",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question17",
     "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=8",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question18",
     "title": "May I know what was the issue you have faced?",
     "visible": false,
     "visibleIf": "{reasonForNotInterested}=9",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "1",
       "text": "Exit"
      },
      {
       "value": "2",
       "text": "Continue"
      }
     ],
     "colCount": 0,
     "name": "exit",
     "title": "Exit Survey",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "NotInterested",
   "navigationButtonsVisibility": "show",
   "title": "Not Interested",
   "visible": false,
   "visibleIf": "{planExplain}=2"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "outOfStation",
       "text": "Out of station"
      },
      {
       "value": "2",
       "text": "No Proof currently"
      },
      {
       "value": "3",
       "text": "Have to decide checking with family and Friends"
      },
      {
       "value": "4",
       "text": "Have to arrange deposit amount"
      },
      {
       "value": "5",
       "text": "Currently Busy"
      },
      {
       "value": "6",
       "text": "Need time to decide"
      },
      {
       "value": "7",
       "text": "Will activate once the current balance get completed"
      },
      {
       "value": "8",
       "text": "MNP Customer wil change once the BC gets completed"
      },
      {
       "value": "9",
       "text": "MNP Customer wil change once the data offer is completed"
      },
      {
       "value": "10",
       "text": "Others"
      }
     ],
     "colCount": 2,
     "name": "ifDecideAndCallback",
     "title": "If Decide and Call back",
     "width": "10"
    },
    {
     "type": "text",
     "name": "availableInTown",
     "title": "When will you be available in the home town",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=1",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "callbackWhenInTown",
     "title": "Get the call back Date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=1",
     "width": "10"
    },
    {
     "type": "text",
     "name": "callbackWhenProofReady",
     "title": "Can you able to arrange the necessary proof? If yes, get Call back date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=2",
     "width": "10"
    },
    {
     "type": "text",
     "name": "necessaryOfHavingProof",
     "title": "If there is no proper proof, explain the customer about the necessasity of proof & close the call",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=2",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question23",
     "title": "Get the call back Date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=4",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question24",
     "title": "Based on the customer's situation close the call ",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question25",
     "title": "If possible get the Call back time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question26",
     "title": "When can get back to you, get the call back date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=6",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question27",
     "title": "Convince the customer that he can able to carry forward the balance with the postpaid i.e, the amount will be credited with the first month bill",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=7",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question28",
     "title": "Collect the Bill date & payment date , fix a time to call back the customer",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=8",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question29",
     "title": "When can get back to you, get the call back date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=9",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "1",
       "text": "Exit"
      },
      {
       "value": "2",
       "text": "Continue"
      }
     ],
     "name": "exit",
     "title": "Exit Survey",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "DecideAndCallback",
   "navigationButtonsVisibility": "show",
   "title": "DecideAndCallback",
   "visible": false,
   "visibleIf": "{planExplain}=3"
  },
  {
   "elements": [
    {
     "type": "multipletext",
     "colCount": 2,
     "itemSize": "30",
     "items": [
      {
       "name": "doorNo",
       "title": "Door Number"
      },
      {
       "name": "buildingNumber",
       "title": "Building Number"
      },
      {
       "name": "street",
       "title": "Street"
      },
      {
       "name": "area",
       "title": "Area"
      },
      {
       "name": "city",
       "title": "City"
      },
      {
       "name": "taluk",
       "title": "Taluk"
      },
      {
       "name": "district",
       "title": "District"
      },
      {
       "name": "state",
       "title": "State"
      },
      {
       "name": "landMark",
       "title": "LandMark"
      },
      {
       "name": "pinCode",
       "title": "Pincode"
      }
     ],
     "name": "ContactAddress",
     "title": "May I know your full address  with Landmark?",
     "width": "10"
    },
    {
     "type": "checkbox",
     "choices": [
      {
       "value": "1",
       "text": "Driving Licence"
      },
      {
       "value": "2",
       "text": "Ration Card"
      },
      {
       "value": "3",
       "text": "Passport"
      },
      {
       "value": "4",
       "text": "Bank Passbook"
      },
      {
       "value": "5",
       "text": "Aaadhar "
      }
     ],
     "colCount": 2,
     "name": "addressProof",
     "title": "May I know What is the ID and Address Proof you have? ",
     "width": "10"
    },
    {
     "type": "multipletext",
     "colCount": 2,
     "itemSize": "30",
     "items": [
      {
       "name": "doorNo",
       "title": "Door Number"
      },
      {
       "name": "buildingNumber",
       "title": "Building Number"
      },
      {
       "name": "street",
       "title": "Street"
      },
      {
       "name": "area",
       "title": "Area"
      },
      {
       "name": "city",
       "title": "City"
      },
      {
       "name": "taluk",
       "title": "Taluk"
      },
      {
       "name": "district",
       "title": "District"
      },
      {
       "name": "state",
       "title": "State"
      },
      {
       "name": "landMark",
       "title": "LandMark"
      },
      {
       "name": "pinCode",
       "title": "Pincode"
      }
     ],
     "name": "meetingAddress",
     "title": "Is the address you have mentioned is the address to meet you in person? If not please share the address to meet.",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "meetingTime",
     "title": "May I know the Date and time when our executive can meet you?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "noOfCooection",
     "title": "How many connections do you require?",
     "width": "10"
    }
   ],
   "name": "EligibleCustomer",
   "title": "Eligible Customer"
  }
 ],
 "showProgressBar": "top",
 "showQuestionNumbers": "off",
 "triggers": [
  {
   "type": "complete",
   "operator": "equal",
   "value": "yes",
   "name": "exit"
  }
 ]
};



    Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
    //Survey.Survey.cssType = "bootstrapmaterial";
    Survey.Survey.cssType = "bootstrap";

    var model = new Survey.Model(json);

    window.survey = model;
   
    $("#surveyElement").Survey({
      model:model,
      onComplete:sendDataToServer
    });
/*
    survey.onComplete.add(function (s) { 
    var result = "\nThe results are:\n" + JSON.stringify(survey.data);
    document.getElementById('survey_result').innerHTML = result; 
    document.getElementById('survey_oncomplete').style.display = '';
});
*/

}

if(!window["%hammerhead%"]) {
    init();
}
function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
}

