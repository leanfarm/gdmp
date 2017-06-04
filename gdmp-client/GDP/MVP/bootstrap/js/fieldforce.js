 function init() {
    // $.material.init();

    var json ={
 "completedHtml": "<p>Completed</p>",
 "pages": [
  {
   "name": "FieldForce",
   "elements": [
    {
     "type": "multipletext",
     "colCount": 2,
     "items": [
      {
       "name": "name",
       "title": "Name"
      },
      {
       "name": "id",
       "title": "ID"
      },
      {
       "name": "designation",
       "title": "Designation"
      },
      {
       "name": "organization",
       "title": "Organization"
      },
      {
       "name": "dateOfBirth",
       "title": "Date Of Birth"
      },
      {
       "name": "email",
       "title": "Email"
      },
      {
       "name": "phone",
       "title": "Phone"
      },
      {
       "name": "alternativePhone",
       "title": "Alternative Phone"
      },
      {
       "name": "joiningDate",
       "title": "Joining Date"
      },
      {
       "name": "leavingDate",
       "title": "Leaving Date"
      }
     ],
     "name": "FieldForceDetails",
     "title": "FieldForce Details ",
     "width": "20"
    },
    {
     "type": "multipletext",
     "colCount": 2,
     "items": [
      {
       "name": "city",
       "title": "City"
      },
      {
       "name": "area",
       "title": "Area"
      },
      {
       "name": "pincode",
       "title": "Pincode"
      }
     ],
     "name": "WorkLocation",
     "title": "Work Location",
     "width": "20"
    },
    {
     "type": "multipletext",
     "colCount": 2,
     "items": [
      {
       "name": "doorNo",
       "title": "Door Number"
      },
      {
       "name": "buildingNo",
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
       "name": "state",
       "title": "State"
      },
      {
       "name": "pincode",
       "title": "Pincode"
      }
     ],
     "name": "contactaddress",
     "title": "Contact Address",
     "width": "10"
    }
   ],
   "navigationButtonsVisibility": "show"
  }
 ],
 "showQuestionNumbers": "off",
 "showTitle": false
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

