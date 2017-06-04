 function init() {
    // $.material.init();

    var json ={
 "pages": [
  {
   "elements": [
    {
     "type": "multipletext",
     "colCount": 2,
     "items": [
      {
       "name": "firstName",
       "title": "First Name"
      },
      {
       "name": "lastName",
       "title": "Last Name"
      },
      {
       "name": "primaryPhone",
       "isRequired": true,
       "title": "Primary Phone"
      },
      {
       "name": "secondaryPhone",
       "title": "Secondary Phone"
      }
     ],
     "name": "customerPersonalDetails",
     "startWithNewLine": false,
     "title": "Customer Details",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "ScheduleDateAndTime",
     "title": "May I know the Date and time when our executive can meet you?",
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
     "name": "ContactAddress",
     "title": "Customer Contact Address",
     "width": "10"
    }
   ],
   "name": "CustomerServiceSchedule",
   "title": "Customer Service Schedule"
  }
 ],
 "showPageTitles": false,
 "showQuestionNumbers": "off",
 "showTitle": false
};



//Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
//Survey.Survey.cssType = "bootstrapmaterial";
//Survey.Survey.cssType = "bootstrap";

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.Survey.cssType = "bootstrapmaterial";

var model = new Survey.Model(json);

window.survey = model;
model.showTitle = false;

$("#surveyElement").Survey({
  model:model,
  onComplete:sendDataToServer //SearchCustomerData
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
 
  CustomerServiceScheduleJson ={CustomerServiceSchedule:[]};
  var ContactAddressJson={ContactAddress:[]};
  var PersonalDetail={
  "PrimaryPhone":survey.data.customerPersonalDetails.primaryPhone,
  "SecondaryPhone":survey.data.customerPersonalDetails.secondaryPhone,
  "FirstName":survey.data.customerPersonalDetails.firstName,
  "LastName":survey.data.customerPersonalDetails.lastName
  }; 
  ContactAddressJson.ContactAddress={
  "DoorNumber":survey.data.ContactAddress.doorNo,
  "BuildingNumber":survey.data.ContactAddress.buildingNumber,
  "BuildingName":survey.data.ContactAddress.doorNo,
  "Street":survey.data.ContactAddress.street,
  "Area":survey.data.ContactAddress.area,
  "City":survey.data.ContactAddress.city,
  "Taluk":survey.data.ContactAddress.taluk,
  "District":survey.data.ContactAddress.district,
  "State":survey.data.ContactAddress.state, 
  "Pincode":survey.data.ContactAddress.pincode,
  "Landmark":survey.data.ContactAddress.landmark
  } 
  CustomerServiceScheduleJson.CustomerServiceSchedule={
  "Schedul Date and Time":survey.data.ScheduleDateAndTime 
  }
 var finalEmployeeObject = $.extend(PersonalDetail,ContactAddressJson,CustomerServiceScheduleJson);
 $.ajax({
        url: "http://localhost:3000/customer/profile",         
        type: "POST",
        crossDomain: true,
        data: finalEmployeeObject,
        dataType: "json",
        success:function(result){
            alert(JSON.stringify(result));
        },
        error:function(xhr,status,error){
            alert(status);
        }
    });
}