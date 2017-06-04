 function init() {
    // $.material.init();

    var json ={
 "pages": [
  {
   "elements": [
    {
     "type": "panel",
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
         "title": "Primary Phone"
        },
        {
         "name": "secondaryPhone",
         "title": "Secondary Phone"
        },
        {
         "name": "email",
         "title": "Email"
        }
       ],
       "name": "basicDetails",
       "title": "Basic Details"
      },
      {
       "type": "multipletext",
       "colCount": 2,
       "items": [
        {
         "name": "employeeId",
         "title": "Employee ID"
        },
        {
         "name": "role",
         "title": "Role"
        },
        {
         "name": "workLocation",
         "title": "Work Location"
        }
       ],
       "name": "workDetails",
       "title": "Work Details"
      },
      {
       "type": "multipletext",
       "colCount": 2,
       "items": [
        {
         "name": "doorNo",
         "title": "Door No."
        },
        {
         "name": "buildingNumber",
         "title": "Building No."
        },
        {
         "name": "buildingName",
         "title": "Building Name"
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
        }
       ],
       "name": "ContactAddress",
       "title": "Contact Address"
      }
     ]
    }
   ],
   "name": "page1"
  }
 ],
 "showPageTitles": false,
 "showQuestionNumbers": "off",
 "showTitle": false
};



//Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
////Survey.Survey.cssType = "bootstrapmaterial";
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
  WorkDetailJson = {WorkDetails:[]};

  var PersonalDetail={ 
  "FirstName":survey.data.basicDetails.firstName,
  "LastName":survey.data.basicDetails.lastName,
  "PrimaryPhone":survey.data.basicDetails.primaryPhone,
  "SecondaryPhone":survey.data.basicDetails.secondaryPhone,
  "email":survey.data.basicDetails.secondaryPhone
  }; 
  WorkDetailJson.WorkDetails={
  "EmployeeID":survey.data.workDetails.employeeID,
  "Role":survey.data.workDetails.role,
  "WorkLocation":survey.data.workDetails.workLocation 
  } 
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

 var finalEmployeeObject = $.extend(PersonalDetail,ContactAddressJson,WorkDetailJson);
 $.ajax({
        url: "https://gdmp-server.herokuapp.com/employee/profile",         
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