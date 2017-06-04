 function SearchCustomerData(){

  	var name = "\"Name\""+":";
    var phoneNumber = "\"PhoneNumber\""+":";

    var nameValue="Deepak";
    var phoneValue="8248198568";

	var targetName = name + "\"" + nameValue + "\"";
	var targetPhone = phoneNumber + "\"" + phoneValue + "\"";
	var whereQuery='where={'+targetName+','+targetPhone+'}';
	var toEncodUriQuery = encodeURI(whereQuery);


	$.ajax({
    url: "http://192.168.2.66:1337/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,
    type: 'GET',
    contentType: 'application/json',
    headers: {
        'X-Parse-Application-Id': 'gdmp_app',
        'X-Parse-Master-Key': 'gdmp_master'
    },
   
    error: function (data) {
        alert("error");
        console.log('error');
    },
    success: function (data) {
        console.log('success', data)
        var customerProfiledData = JSON.stringify(data);
        var finalObj = JSON.parse(JSON.stringify(customerProfiledData));

        $(jQuery.parseJSON(finalObj)).each(function(){
			name = this.results[0].Name;
			phoneNumber = this.results[0].PhoneNumber;
	       document.getElementById('name').value = name;		
		   document.getElementById('phone').value = phoneNumber;
           for(var i=0; i<results[0].PersonalDetails.length;i++)
           {

           	if(results[0].PersonalDetails[i]=="FatherName")
           		{
           			document.getElementById('name').value = results[0].PersonalDetails[i];
           		};		
		   

           }

		});
    }
    });
}

function SubmitEmployeeData(){
	var PersonalDetailsJson={PersonalDetails:[]};
	var ContactAddressJson={ContactAddress:[]};
	var PermanentAddressJson={PermanentAddress:[]};
	var EducationDetailsJson={EducationDetails:[]};
	var EmployeeDetailsJson={EmployeeDetails:[]};
	var name,employeeid,role,remarks;
	var employeeFormData = {};

	$("form").serializeArray().map(function(x){employeeFormData[x.name] = x.value;});
	var employeeFormDataJson1 = $(jQuery.parseJSON(JSON.stringify(employeeFormData))).each(function(){
	name = this.Name;
	employeeid = this.EmployeeID;
	role = this.Role;
	remarks = this.remarks;

	var male = this.Male;
	var female = this.Female;
	var others = this.Others;

	
	PersonalDetailsJson.PersonalDetails.push({"Name":this.name});	
	PersonalDetailsJson.PersonalDetails.push({"Phone":this.phone}); 
	PersonalDetailsJson.PersonalDetails.push({"AlternatePhone":this.alternatephone});
	PersonalDetailsJson.PersonalDetails.push({"Email":this.email});
	PersonalDetailsJson.PersonalDetails.push({"WhatsApp":this.whatsapp});
	PersonalDetailsJson.PersonalDetails.push({"Skype":this.skype});  
	PersonalDetailsJson.PersonalDetails.push({"Facebook":this.facebook});
	PersonalDetailsJson.PersonalDetails.push({"DOB":this.dob});
	PersonalDetailsJson.PersonalDetails.push({"Nationality":this.nationality}); 
	PersonalDetailsJson.PersonalDetails.push({"Aadhar":this.aadhar});
	PersonalDetailsJson.PersonalDetails.push({"Pan":this.pan}); 
	PersonalDetailsJson.PersonalDetails.push({"MaritalStatus":this.martialstatus});
	PersonalDetailsJson.PersonalDetails.push({"NameOfSpouse":this.nameofspouse});
	PersonalDetailsJson.PersonalDetails.push({"WeddingDate":this.weddingdate});

	ContactAddressJson.ContactAddress.push({"DoorNumber":this.cdoornumber});
	ContactAddressJson.ContactAddress.push({"BuildingNumber":this.cbuildingnumber}); 
	ContactAddressJson.ContactAddress.push({"BuildingName":this.cbuildingname});
	ContactAddressJson.ContactAddress.push({"Street":this.cstreet}); 
	ContactAddressJson.ContactAddress.push({"Area":this.carea});
	ContactAddressJson.ContactAddress.push({"Taluk":this.ctaluk});
	ContactAddressJson.ContactAddress.push({"District":this.cdistrict});
	ContactAddressJson.ContactAddress.push({"Pincode":this.cpincode});  
	ContactAddressJson.ContactAddress.push({"State":this.cstate});    

	PermanentAddressJson.PermanentAddress.push({"DoorNumber":this.pdoornumber});
	PermanentAddressJson.PermanentAddress.push({"BuildingNumber":this.pbuildingnumber}); 
	PermanentAddressJson.PermanentAddress.push({"BuildingName":this.pbuildingname});
	PermanentAddressJson.PermanentAddress.push({"Street":this.pstreet}); 
	PermanentAddressJson.PermanentAddress.push({"Area":this.parea});
	PermanentAddressJson.PermanentAddress.push({"Taluk":this.ptaluk});
	PermanentAddressJson.PermanentAddress.push({"District":this.pdistrict});
	PermanentAddressJson.PermanentAddress.push({"Pincode":this.ppincode});  
	PermanentAddressJson.PermanentAddress.push({"State":this.pstate});   

	EducationDetailsJson.EducationDetails.push({"Degree":this.degree});
	EducationDetailsJson.EducationDetails.push({"YearOfCompletion":this.YearOfCompletion}); 
	EducationDetailsJson.EducationDetails.push({"University":this.University}); 

	EmployeeDetailsJson.EmployeeDetails.push({"EmployeeID":this.employeeid});
	EmployeeDetailsJson.EmployeeDetails.push({"Organisation":this.Organisation}); 
	EmployeeDetailsJson.EmployeeDetails.push({"Designation":this.Designation}); 
	EmployeeDetailsJson.EmployeeDetails.push({"JoingingDate":this.JoingingDate}); 
	EmployeeDetailsJson.EmployeeDetails.push({"LeavingDate":this.LeavingDate}); 

	});
	PernonalDetails={"Name":name,"EmployeeID":employeeid,"Role":role};

	var finalEmployeeObject = $.extend(PernonalDetails,PresentAddressJson, PermanentAddressJson,ContactDetailsJson,EducationDetailsJson,WorkDetailsJson);
	var finalEmployeeObjectStringify = JSON.stringify(finalEmployeeObject); 

	var xhr = new XMLHttpRequest();
	var url = "http://192.168.2.66:1337/parse/classes/EmployeeProfile";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
	xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
	xhr.setRequestHeader("Content-Type", "application/json"); 

	xhr.onreadystatechange = function() {             
		if (xhr.readyState == 4) {
			if(xhr.responseText.length != 0){
				var result = JSON.parse(xhr.responseText);
				console.log(xhr.responseText);
				alert('successfully submitted');
				if (result.objectId) {										
				}
			}
		}
	}
	xhr.send(finalEmployeeObjectStringify); 
}
function SaveCustomerData(){
	var PersonalDetailsJson={PersonalDetails:[]};
	var ContactAddressJson={ContactAddress:[]};
	var PermanentAddressJson={PermanentAddress:[]};
	var ContactDetailsJson={ContactDetails:[]};
	var EducationDetailsJson={EducationDetails:[]};
	var OccupationDetailsJson={OccupationDetails:[]};
	var FinanceDetailsJson={FinanceDetails:[]};
	var LiabilityDetailsJson={LiabilityDetails:[]};
	var AssetsDetailsJson={AssetsDetails:[]};
	var HealthDetailsJson={HealthDetails:[]};
	var WorkDetailsJson={WorkDetails:[]};
	var ScheduleDetailsJson={ScheduleDetails:[]};
	var FeedbackDetailsJson={FeedbackDetails:[]};
	var name,phoneNumber;
	var customerProfileData = {};
	var customerBasicData = {};

	$("form").serializeArray().map(function(x){customerProfileData[x.name] = x.value;});	
	$(jQuery.parseJSON(JSON.stringify(customerProfileData))).each(function(){

	name = this.name;
	phoneNumber = this.phone;

	PersonalDetailsJson.PersonalDetails.push({"Name":this.name});
	PersonalDetailsJson.PersonalDetails.push({"FatherName":this.fathername}); 
	PersonalDetailsJson.PersonalDetails.push({"MotherName":this.mothername});
	PersonalDetailsJson.PersonalDetails.push({"Phone":this.phone}); 
	PersonalDetailsJson.PersonalDetails.push({"AlternatePhone":this.alternatephone});
	PersonalDetailsJson.PersonalDetails.push({"Email":this.email});
	PersonalDetailsJson.PersonalDetails.push({"WhatsApp":this.whatsapp});
	PersonalDetailsJson.PersonalDetails.push({"Skype":this.skype});  
	PersonalDetailsJson.PersonalDetails.push({"Facebook":this.facebook});
	PersonalDetailsJson.PersonalDetails.push({"DOB":this.dob});
	PersonalDetailsJson.PersonalDetails.push({"Nationality":this.nationality}); 
	PersonalDetailsJson.PersonalDetails.push({"Aadhar":this.aadhar});
	PersonalDetailsJson.PersonalDetails.push({"Pan":this.pan}); 
	PersonalDetailsJson.PersonalDetails.push({"MaritalStatus":this.martialstatus});
	PersonalDetailsJson.PersonalDetails.push({"NameOfSpouse":this.nameofspouse});
	PersonalDetailsJson.PersonalDetails.push({"WeddingDate":this.weddingdate});
	PersonalDetailsJson.PersonalDetails.push({"Literate":this.literate});  
       

	ContactAddressJson.ContactAddress.push({"DoorNumber":this.cdoornumber});
	ContactAddressJson.ContactAddress.push({"BuildingNumber":this.cbuildingnumber}); 
	ContactAddressJson.ContactAddress.push({"BuildingName":this.cbuildingname});
	ContactAddressJson.ContactAddress.push({"Street":this.cstreet}); 
	ContactAddressJson.ContactAddress.push({"Area":this.carea});
	ContactAddressJson.ContactAddress.push({"Taluk":this.ctaluk});
	ContactAddressJson.ContactAddress.push({"District":this.cdistrict});
	ContactAddressJson.ContactAddress.push({"Pincode":this.cpincode});  
	ContactAddressJson.ContactAddress.push({"State":this.cstate});    

	PermanentAddressJson.PermanentAddress.push({"DoorNumber":this.pdoornumber});
	PermanentAddressJson.PermanentAddress.push({"BuildingNumber":this.pbuildingnumber}); 
	PermanentAddressJson.PermanentAddress.push({"BuildingName":this.pbuildingname});
	PermanentAddressJson.PermanentAddress.push({"Street":this.pstreet}); 
	PermanentAddressJson.PermanentAddress.push({"Area":this.parea});
	PermanentAddressJson.PermanentAddress.push({"Taluk":this.ptaluk});
	PermanentAddressJson.PermanentAddress.push({"District":this.pdistrict});
	PermanentAddressJson.PermanentAddress.push({"Pincode":this.ppincode});  
	PermanentAddressJson.PermanentAddress.push({"State":this.pstate});    

	EducationDetailsJson.EducationDetails.push({"Graduate":this.graduate});
	EducationDetailsJson.EducationDetails.push({"PostGraduate":this.postgraduate}); 
	EducationDetailsJson.EducationDetails.push({"Others":this.others}); 

	OccupationDetailsJson.OccupationDetails.push({"Salaried":this.salaried});
	OccupationDetailsJson.OccupationDetails.push({"Professional":this.professional}); 
	OccupationDetailsJson.OccupationDetails.push({"Business":this.business}); 
	OccupationDetailsJson.OccupationDetails.push({"Agriculture":this.agriculture});
	OccupationDetailsJson.OccupationDetails.push({"Retired":this.retired}); 
	OccupationDetailsJson.OccupationDetails.push({"Student":this.student}); 	
	OccupationDetailsJson.OccupationDetails.push({"HouseWife":this.housewife}); 
	OccupationDetailsJson.OccupationDetails.push({"Others":this.others}); 
	OccupationDetailsJson.OccupationDetails.push({"Organisation":this.organisation}); 
	OccupationDetailsJson.OccupationDetails.push({"Designation":this.designation});

	FinanceDetailsJson.FinanceDetails.push({"LessThanOneLakh":this.leonelakh}); 	
	FinanceDetailsJson.FinanceDetails.push({"OneToTwoLakh":this.onetotwolakh}); 
	FinanceDetailsJson.FinanceDetails.push({"TwoToFiveLakh":this.twotofivelakh}); 
	FinanceDetailsJson.FinanceDetails.push({"AboveFiveLakh":this.above5lakh}); 

	LiabilityDetailsJson.LiabilityDetails.push({"VechicleLoan":this.vechicleloan}); 	
	LiabilityDetailsJson.LiabilityDetails.push({"HomeLoan":this.homeloan}); 
	LiabilityDetailsJson.LiabilityDetails.push({"PersonalLoan":this.personalloan}); 
	LiabilityDetailsJson.LiabilityDetails.push({"EducationalLoan":this.educationalloan});
	LiabilityDetailsJson.LiabilityDetails.push({"BusinessLoan":this.businessloan});

	AssetsDetailsJson.AssetsDetails.push({"FourWheeler":this.fourwheeler}); 	
	AssetsDetailsJson.AssetsDetails.push({"TwoWheeler":this.twowheeler}); 
	AssetsDetailsJson.AssetsDetails.push({"OwnHouse":this.ownhouse}); 


	HealthDetailsJson.HealthDetails.push({"PolicyHolder":this.policyholderyes}); 	
	HealthDetailsJson.HealthDetails.push({"NoPolicy":this.policyholderno}); 

	});
	
	customerBasicData={"Name":name,"PhoneNumber":phoneNumber};
	var finalEmployeeObject = $.extend(customerBasicData,PersonalDetailsJson,ContactAddressJson, PermanentAddressJson,EducationDetailsJson,OccupationDetailsJson,FinanceDetailsJson,LiabilityDetailsJson,AssetsDetailsJson,HealthDetailsJson);
	var finalEmployeeObjectStringify = JSON.stringify(finalEmployeeObject); 

	var xhr = new XMLHttpRequest();
	var url = "http://192.168.2.66:1337/parse/classes/CustomerProfile";
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("X-Parse-Application-Id", "gdmp_app");
	xhr.setRequestHeader("X-Parse-Master-Key", "gdmp_master");
	xhr.setRequestHeader("Content-Type", "application/json"); 

	xhr.onreadystatechange = function() {             
		if (xhr.readyState == 4) {
			if(xhr.responseText.length != 0){
				var result = JSON.parse(xhr.responseText);
				console.log(xhr.responseText);
				alert('successfully submitted');
				if (result.objectId) {										
				}
			}
		}
	}
	xhr.send(finalEmployeeObjectStringify); 
}

function search(){
        var a = document.getElementById('tfnewsearch');
        a.addEventListener('submit',function(e) {
        e.preventDefault();
        var b = document.getElementById('tftextinput').value;
        
      var xhr = new XMLHttpRequest();
      var q = 'where={"Number":'+ b +'}';
 
      var z = q.concat(sq);
     
p = encodeURI('where={"Number":""}');

 var replace7B =  p.replace('%7B','{');
 var replace7D = replace7B.replace('%7D','}');
  //   parS = encodeURIComponent(JSON.stringify(params));
      
	var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/EmployeeProfile"+"?"+replace7D;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
	xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
	xhr.setRequestHeader("Content-Type", "application/json"); 
	xhr.send();  

		xhr.onreadystatechange = function() {             
					if (xhr.readyState == 4) {
						if(xhr.responseText.length != 0){
									var result = JSON.parse(xhr.responseText);
									console.log(xhr.responseText);	
									var PhoneNumber;	
									var EmployeeName;		
									for (var i=0;i<result.results.length;i++)
									{  
									        PhoneNumber = result.results[i].Number;
									        EmployeeName = result.results[i].Profile.Name;
									}					
										document.getElementById('employeename').value = EmployeeName;		
										document.getElementById('phonenumber').value = PhoneNumber;//"8248198568";									
							}
			}
		
	}  
      });
}
function showInput() {
        document.getElementById('employeename').innerHTML = 
                    document.getElementById("employeename").value;
    }

function showEmployeeProfile(){ 
    var xhr = new XMLHttpRequest();
    var parameter = "EmployeeID=1001";

p = encodeURI('where={"Number":8248198568}');

 var replace7B =  p.replace('%7B','{');
 var replace7D = replace7B.replace('%7D','}');
  //   parS = encodeURIComponent(JSON.stringify(params));
      
	var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Test"+"?"+"-G "+replace7D;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
	xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
	xhr.setRequestHeader("Content-Type", "application/json"); 
	 
	xhr.onreadystatechange = function() {             
		if (xhr.readyState == 4) {
			if(xhr.responseText.length != 0){
				var result = JSON.parse(xhr.responseText);
				console.log(xhr.responseText);
				alert('successfully submitted');
				if (result.objectId) {										
				}
			}
		}
	}
	xhr.send(); 
	/*
		xhr.onreadystatechange = function() {             
					if (xhr.readyState == 4) {
						if(xhr.responseText.length != 0){
									var result = JSON.parse(xhr.responseText);
									console.log(xhr.responseText);	
									var PhoneNumber;	
									var EmployeeName;		
									for (var i=0;i<result.results.length;i++)
									{  
									        PhoneNumber = result.results[i].Number;
									        EmployeeName = result.results[i].Profile.Name;
									}					
										document.getElementById('employeeName').value = EmployeeName;		
										document.getElementById('phonenumber').value = PhoneNumber;//"8248198568";									
							}
			}
		
	}    */
}
/*
function stateChanged(){ 
    if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){ 
        var showdata = xmlHttp.responseText; 
        var strar = showdata.split(":");
        if(strar.length>1){
            var strname = strar[1];
            document.getElementById("vendor_address").value= strar[1];
            document.getElementById("vendor_contact_no").value= strar[2];
            document.getElementById("currency").value= strar[3];
            document.getElementById("po_value_rs").value= strar[4];
        }
      }
    }
*/
function InitialiseParse(){
//	Parse.initialize("gdp_app","gdp_javascript");
//	Parse.serverURL = 'https://gdp-parse-server-example.herokuapp.com/parse/';
 //   var Ad = Parse.Object.extend("CustomerInfo");
//    console.log(Ad.length);   


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile", true);
xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);

xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		var result = JSON.parse(xhr.responseText);
		console.log(xhr.responseText);
		if (result.objectId) {
			alert("saved an object with id: " + result.objectId);
		}
	}
}
	
	}

