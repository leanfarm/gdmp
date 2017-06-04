function edit(index) {
    $('#save,#update').toggle();
    $('#name').val(jPut.users.data[index].name);
    $('#email').val(jPut.users.data[index].email);
    $('#phone').val(jPut.users.data[index].phone);
    $('#update').attr('data-id', index);
}
$(document).ready(function () {

    //Date picker
    $('#scheduleddate').datepicker({
        autoclose: true
    });

    //Timepicker
    $(".timepicker").timepicker({
        showInputs: false
    });
  
    //on update user
    $('#update').click(function () {
        //defining new user
        var user = Object();
        user['name'] = $('#name').val();
        user['email'] = $('#email').val();
        user['phone'] = $('#phone').val();

        //appening to jput variable
        /*
           update(index,newdata)
        */
        jPut.users.update($('#update').attr('data-id'), user);

        $('#save,#update').toggle();
    });
    //   var user=Object();
    //   user['name']=$('#CustomerName').val();
    //   user['email']=$('#PhoneNumber').val();
    //   user['phone']=$('#Address').val();
    //jPut.users.data=[{"name":"Shabeer","email":"user@gmail.com","phone":"+51 23126"},{"name":"Shibu","email":"user@gmail.com","phone":"+51 23126"},{"name":"Shabeer","email":"user@gmail.com","phone":"+51 23126"}];
});
function GetCustomerData() {

    var name = "\"Name\"" + ":";
    var phoneNumber = "\"PhoneNumber\"" + ":";

    var nameValue = "manikandan";
    var phoneValue = "8248298568";

    var targetName = name + "\"" + nameValue + "\"";
    var targetPhone = phoneNumber + "\"" + phoneValue + "\"";
    var whereQuery = 'where={' + targetName + ',' + targetPhone + '}';
    var toEncodUriQuery = encodeURI(whereQuery);
    "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,

	$.ajax({
	    url: "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,
	    type: 'GET',
	    contentType: 'application/json',
	    headers: {
	        'X-Parse-Application-Id': 'gdp_app',
	        'X-Parse-Master-Key': 'gdp_master'
	    },

	    error: function (data) {
	        alert("error");
	        console.log('error');
	    },
	    success: function (data) {
	        console.log('success', data)
	        var employee = JSON.stringify(data);
	        alert(employee);
	    }
	});
}

function SaveCustomerData() {
    var PersonalDetailsJson = { PersonalDetails: [] };
    var ContactAddressJson = { ContactAddress: [] };
    var PermanentAddressJson = { PermanentAddress: [] };
    var ContactDetailsJson = { ContactDetails: [] };
    var EducationDetailsJson = { EducationDetails: [] };
    var OccupationDetailsJson = { OccupationDetails: [] };
    var FinanceDetailsJson = { FinanceDetails: [] };
    var LiabilityDetailsJson = { LiabilityDetails: [] };
    var AssetsDetailsJson = { AssetsDetails: [] };
    var HealthDetailsJson = { HealthDetails: [] };
    var WorkDetailsJson = { WorkDetails: [] };
    var ScheduleDetailsJson = { ScheduleDetails: [] };
    var FeedbackDetailsJson = { FeedbackDetails: [] };
    var name, employeeid, role, remarks;
    var employeeFormData = {};
    var ScheduledDate = null;
    var ScheduledTime = null;
    var Name = null;
    var PhoneNo = null;
    var CustomerId = generateUUID();
    var CustomerJson = null;
    var CustomerObject = {};

    $("form").serializeArray().map(function (x) { employeeFormData[x.name] = x.value; });
    var employeeFormDataJson1 = $(jQuery.parseJSON(JSON.stringify(employeeFormData))).each(function () {
      //  PersonalDetailsJson.PersonalDetails.push({ "Name": this.name });
       
        ScheduledDate = this.scheduleddate;
        ScheduledTime = this.scheduledtime;
        Name = this.name;
        PhoneNo = this.phone;

        // CustomerJson = { "CustomerId": CustomerId, "Name": Name, "Phone": this.phone };

        if (this.name.length > 0) { $.extend(CustomerObject, { "Name": this.name }); }
        if (this.phone.length > 0) { $.extend(CustomerObject, { "Phone": this.phone }); }

        if (this.fathername.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "FatherName": this.fathername }); }
        if (this.fathername.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "MotherName": this.mothername }); }
      //    if (this.phone.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Phone": this.phone }); }
        if (this.alternativephone.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "AlternatePhone": this.alternativephone }); }
        if (this.email.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Email": this.email }); }
        if (this.whatsapp.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "WhatsApp": this.whatsapp }); }
        if (this.skype.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Skype": this.skype }); }
        if (this.facebook.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Facebook": this.facebook }); }
        if (this.dob.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "DOB": this.dob }); }
        if (this.nationality.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Nationality": this.nationality }); }
        if (this.aadhar.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Aadhar": this.aadhar }); }
        if (this.pan.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Pan": this.pan }); }
        if (this.married != null) { PersonalDetailsJson.PersonalDetails.push({ "MaritalStatus": this.married }); }
        else if (this.single != null) { PersonalDetailsJson.PersonalDetails.push({ "MaritalStatus": this.single }); }
        if (this.nameofspouse.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "NameOfSpouse": this.nameofspouse }); }
        if (this.weddingdate.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "WeddingDate": this.weddingdate }); }
        if (this.Literate != null) { PersonalDetailsJson.PersonalDetails.push({ "Literate": this.Literate }); }

        //PersonalDetailsJson.PersonalDetails.push({"MotherName":this.mothername});
        //PersonalDetailsJson.PersonalDetails.push({"Phone":this.phone}); 
        //PersonalDetailsJson.PersonalDetails.push({"AlternatePhone":this.alternatephone});
        //PersonalDetailsJson.PersonalDetails.push({"Email":this.email});
        //PersonalDetailsJson.PersonalDetails.push({"WhatsApp":this.whatsapp});
        //PersonalDetailsJson.PersonalDetails.push({"Skype":this.skype});  
        //PersonalDetailsJson.PersonalDetails.push({"Facebook":this.facebook});
        //PersonalDetailsJson.PersonalDetails.push({"DOB":this.dob});
        //PersonalDetailsJson.PersonalDetails.push({"Nationality":this.nationality}); 
        //PersonalDetailsJson.PersonalDetails.push({"Aadhar":this.aadhar});
        //PersonalDetailsJson.PersonalDetails.push({"Pan":this.pan}); 
        //PersonalDetailsJson.PersonalDetails.push({"MaritalStatus":this.martialstatus});
        //PersonalDetailsJson.PersonalDetails.push({"NameOfSpouse":this.nameofspouse});
        //PersonalDetailsJson.PersonalDetails.push({"WeddingDate":this.weddingdate});
        //PersonalDetailsJson.PersonalDetails.push({"Literate":this.literate});  

        if (this.cdoornumber.length > 0) { ContactAddressJson.ContactAddress.push({ "DoorNumber": this.cdoornumber }); }
        if (this.cbuildingnumber.length > 0) { ContactAddressJson.ContactAddress.push({ "BuildingNumber": this.cbuildingnumber }); }
        if (this.cbuildingname.length > 0) { ContactAddressJson.ContactAddress.push({ "BuildingName": this.cbuildingname }); }
        if (this.cstreet.length > 0) { ContactAddressJson.ContactAddress.push({ "Street": this.cstreet }); }
        if (this.carea.length > 0) { ContactAddressJson.ContactAddress.push({ "Area": this.carea }); }
        if (this.ctaluk.length > 0) { ContactAddressJson.ContactAddress.push({ "Taluk": this.ctaluk }); }
        if (this.cdistrict.length > 0) { ContactAddressJson.ContactAddress.push({ "District": this.cdistrict }); }
        if (this.cpincode.length > 0) { ContactAddressJson.ContactAddress.push({ "Pincode": this.cpincode }); }
        if (this.cstate.length > 0) { ContactAddressJson.ContactAddress.push({ "State": this.cstate }); }

        //ContactAddressJson.ContactAddress.push({"DoorNumber":this.cdoornumber});
        //ContactAddressJson.ContactAddress.push({"BuildingNumber":this.cbuildingnumber}); 
        //ContactAddressJson.ContactAddress.push({"BuildingName":this.cbuildingname});
        //ContactAddressJson.ContactAddress.push({"Street":this.cstreet}); 
        //ContactAddressJson.ContactAddress.push({"Area":this.carea});
        //ContactAddressJson.ContactAddress.push({"Taluk":this.ctaluk});
        //ContactAddressJson.ContactAddress.push({"District":this.cdistrict});
        //ContactAddressJson.ContactAddress.push({"Pincode":this.cpincode});  
        //ContactAddressJson.ContactAddress.push({"State":this.cstate});    

        if (this.pdoornumber.length > 0) { PermanentAddressJson.PermanentAddress.push({ "DoorNumber": this.pdoornumber }); }
        if (this.pbuildingnumber.length > 0) { PermanentAddressJson.PermanentAddress.push({ "BuildingNumber": this.pbuildingnumber }); }
        if (this.pbuildingname.length > 0) { PermanentAddressJson.PermanentAddress.push({ "BuildingName": this.pbuildingname }); }
        if (this.pstreet.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Street": this.pstreet }); }
        if (this.parea.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Area": this.parea }); }
        if (this.ptaluk.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Taluk": this.ptaluk }); }
        if (this.pdistrict.length > 0) { PermanentAddressJson.PermanentAddress.push({ "District": this.pdistrict }); }
        if (this.ppincode.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Pincode": this.ppincode }); }
        if (this.pstate.length > 0) { PermanentAddressJson.PermanentAddress.push({ "State": this.pstate }); }


        //PermanentAddressJson.PermanentAddress.push({"DoorNumber":this.pdoornumber});
        //PermanentAddressJson.PermanentAddress.push({"BuildingNumber":this.pbuildingnumber}); 
        //PermanentAddressJson.PermanentAddress.push({"BuildingName":this.pbuildingname});
        //PermanentAddressJson.PermanentAddress.push({"Street":this.pstreet}); 
        //PermanentAddressJson.PermanentAddress.push({"Area":this.parea});
        //PermanentAddressJson.PermanentAddress.push({"Taluk":this.ptaluk});
        //PermanentAddressJson.PermanentAddress.push({"District":this.pdistrict});
        //PermanentAddressJson.PermanentAddress.push({"Pincode":this.ppincode});  
        //PermanentAddressJson.PermanentAddress.push({"State":this.pstate});    

        if (this.graduate != null) { EducationDetailsJson.EducationDetails.push("Graduate"); }
        if (this.postgraduate != null) { EducationDetailsJson.EducationDetails.push("PostGraduate"); }
        if (this.others != null) { EducationDetailsJson.EducationDetails.push("Others"); }

        //EducationDetailsJson.EducationDetails.push({"Graduate":this.graduate});
        //EducationDetailsJson.EducationDetails.push({"PostGraduate":this.postgraduate}); 
        //EducationDetailsJson.EducationDetails.push({"Others":this.others}); 

        if (this.salaried != null) { OccupationDetailsJson.OccupationDetails.push("Salaried"); }
        if (this.professional != null) { OccupationDetailsJson.OccupationDetails.push("Professional"); }
        if (this.business != null) { OccupationDetailsJson.OccupationDetails.push("Business"); }
        if (this.agriculture != null) { OccupationDetailsJson.OccupationDetails.push("Agriculture"); }
        if (this.retired != null) { OccupationDetailsJson.OccupationDetails.push("Retired"); }
        if (this.student != null) { OccupationDetailsJson.OccupationDetails.push("Student"); }
        if (this.housewife != null) { OccupationDetailsJson.OccupationDetails.push("HouseWife"); }
        if (this.others != null) { OccupationDetailsJson.OccupationDetails.push("Others"); }
        if (this.organisation.length > 0) { OccupationDetailsJson.OccupationDetails.push("Organisation"); }
        if (this.designation.length > 0) { OccupationDetailsJson.OccupationDetails.push("Designation"); }


        //OccupationDetailsJson.OccupationDetails.push({"Salaried":this.salaried});
        //OccupationDetailsJson.OccupationDetails.push({"Professional":this.professional}); 
        //OccupationDetailsJson.OccupationDetails.push({"Business":this.business}); 
        //OccupationDetailsJson.OccupationDetails.push({"Agriculture":this.agriculture});
        //OccupationDetailsJson.OccupationDetails.push({"Retired":this.retired}); 
        //OccupationDetailsJson.OccupationDetails.push({"Student":this.student}); 	
        //OccupationDetailsJson.OccupationDetails.push({"HouseWife":this.housewife}); 
        //OccupationDetailsJson.OccupationDetails.push({"Others":this.others}); 
        //OccupationDetailsJson.OccupationDetails.push({"Organisation":this.organisation}); 
        //OccupationDetailsJson.OccupationDetails.push({"Designation":this.designation});

        if (this.leonelakh != null) { FinanceDetailsJson.FinanceDetails.push("LessThanOneLakh"); }
        if (this.onetotwolakh != null) { FinanceDetailsJson.FinanceDetails.push("OneToTwoLakh"); }
        if (this.twotofivelakh != null) { FinanceDetailsJson.FinanceDetails.push("TwoToFiveLakh"); }
        if (this.above5lakh != null) { FinanceDetailsJson.FinanceDetails.push("AboveFiveLakh"); }

        //FinanceDetailsJson.FinanceDetails.push({"LessThanOneLakh":this.leonelakh}); 	
        //FinanceDetailsJson.FinanceDetails.push({"OneToTwoLakh":this.onetotwolakh}); 
        //FinanceDetailsJson.FinanceDetails.push({"TwoToFiveLakh":this.twotofivelakh}); 
        //FinanceDetailsJson.FinanceDetails.push({"AboveFiveLakh":this.above5lakh}); 

        if (this.vechicleloan != null) { LiabilityDetailsJson.LiabilityDetails.push("VechicleLoan"); }
        if (this.homeloan != null) { LiabilityDetailsJson.LiabilityDetails.push("HomeLoan"); }
        if (this.personalloan != null) { LiabilityDetailsJson.LiabilityDetails.push("PersonalLoan"); }
        if (this.educationalloan != null) { LiabilityDetailsJson.LiabilityDetails.push("EducationalLoan"); }
        if (this.businessloan != null) { LiabilityDetailsJson.LiabilityDetails.push("BusinessLoan"); }


        //LiabilityDetailsJson.LiabilityDetails.push({"VechicleLoan":this.vechicleloan}); 	
        //LiabilityDetailsJson.LiabilityDetails.push({"HomeLoan":this.homeloan}); 
        //LiabilityDetailsJson.LiabilityDetails.push({"PersonalLoan":this.personalloan}); 
        //LiabilityDetailsJson.LiabilityDetails.push({"EducationalLoan":this.educationalloan});
        //LiabilityDetailsJson.LiabilityDetails.push({"BusinessLoan":this.businessloan});

        if (this.fourwheeler != null) { AssetsDetailsJson.AssetsDetails.push("FourWheeler"); }
        if (this.twowheeler != null) { AssetsDetailsJson.AssetsDetails.push("TwoWheeler"); }
        if (this.ownhouse != null) { AssetsDetailsJson.AssetsDetails.push("OwnHouse"); }

        //AssetsDetailsJson.AssetsDetails.push({"FourWheeler":this.fourwheeler}); 	
        //AssetsDetailsJson.AssetsDetails.push({"TwoWheeler":this.twowheeler}); 
        //AssetsDetailsJson.AssetsDetails.push({"OwnHouse":this.ownhouse}); 

        if (this.policyholderyes != null) { HealthDetailsJson.HealthDetails.push("PolicyHolder"); }
        if (this.policyholderno != null) { HealthDetailsJson.HealthDetails.push("NoPolicy"); }
        //HealthDetailsJson.HealthDetails.push({"PolicyHolder":this.policyholderyes}); 	
        //HealthDetailsJson.HealthDetails.push({"NoPolicy":this.policyholderno}); 
    
    });

    //if (this.scheduleddatetime.length > 0) { HealthDetailsJson.HealthDetails.push("PolicyHolder"); }
    //if (this.landmark.length > 0) { HealthDetailsJson.HealthDetails.push("NoPolicy"); }

    //var finalEmployeeObject = $.extend(PersonalDetailsJson,ContactAddressJson, PermanentAddressJson,EducationDetailsJson,OccupationDetailsJson,FinanceDetailsJson,LiabilityDetailsJson,AssetsDetailsJson,HealthDetailsJson);

    var finalEmployeeObject = null;
    if (Object.keys(CustomerObject).length != 0) { finalEmployeeObject = CustomerObject };
    if (PersonalDetailsJson.PersonalDetails.length != 0) { $.extend(finalEmployeeObject, PersonalDetailsJson); }
    if (ContactAddressJson.ContactAddress.length != 0) { $.extend(finalEmployeeObject, ContactAddressJson); }
    if (PermanentAddressJson.PermanentAddress.length != 0) { $.extend(finalEmployeeObject, PermanentAddressJson); }
    if (EducationDetailsJson.EducationDetails.length != 0) { $.extend(finalEmployeeObject, EducationDetailsJson); }
    if (OccupationDetailsJson.OccupationDetails.length != 0) { $.extend(finalEmployeeObject, OccupationDetailsJson); }
    if (FinanceDetailsJson.FinanceDetails.length != 0) { $.extend(finalEmployeeObject, FinanceDetailsJson); }
    if (LiabilityDetailsJson.LiabilityDetails.length != 0) { $.extend(ffinalEmployeeObject, LiabilityDetailsJson); }
    if (AssetsDetailsJson.AssetsDetails.length != 0) { $.extend(finalEmployeeObject, AssetsDetailsJson); }
    if (HealthDetailsJson.HealthDetails.length != 0) { $.extend(finalEmployeeObject, HealthDetailsJson); }
    if (finalEmployeeObject != null) { $.extend(finalEmployeeObject, { "CustomerId": CustomerId }); }

    if (finalEmployeeObject != null)
    {
        var finalEmployeeObjectStringify = JSON.stringify(finalEmployeeObject);
        alert(finalEmployeeObjectStringify);

        var xhr = new XMLHttpRequest();
        var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
        xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.responseText.length != 0) {
                    var result = JSON.parse(xhr.responseText);
                    console.log(xhr.responseText);
                    SaveJob(Name, PhoneNo, CustomerId, ScheduledDate, ScheduledTime);
                    //alert('successfully submitted');
                    //if (result.objectId) {										
                    //}
                }
            }
        }
        xhr.send(finalEmployeeObjectStringify);
    }

}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function SaveJob(CustomerName, CustomerPhoneNo, CustomerId, ScheduledDate, ScheduledTime) {
    var JobDateTime = new Date(ScheduledDate + " " + ScheduledTime);
    var JobObject = {"JobId" : generateUUID() , "CustomerName": CustomerName, "PhoneNo": CustomerPhoneNo, "CustomerId": CustomerId, "JobDateTime": JobDateTime, "Status": "Open" }
    var finalEmployeeObjectStringify = JSON.stringify(JobObject);

    var xhr = new XMLHttpRequest();
    var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
    xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            alert("Job has been created Successfully.");
        }
    }
    xhr.send(finalEmployeeObjectStringify);

}

function search() {
    var a = document.getElementById('tfnewsearch');
    a.addEventListener('submit', function (e) {
        e.preventDefault();
        var b = document.getElementById('tftextinput').value;

        var xhr = new XMLHttpRequest();
        var q = 'where={"Number":' + b + '}';

        var z = q.concat(sq);

        p = encodeURI('where={"Number":""}');

        var replace7B = p.replace('%7B', '{');
        var replace7D = replace7B.replace('%7D', '}');
        //   parS = encodeURIComponent(JSON.stringify(params));

        var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/EmployeeProfile" + "?" + replace7D;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
        xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.responseText.length != 0) {
                    var result = JSON.parse(xhr.responseText);
                    console.log(xhr.responseText);
                    var PhoneNumber;
                    var EmployeeName;
                    for (var i = 0; i < result.results.length; i++) {
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

function showEmployeeProfile() {
    var xhr = new XMLHttpRequest();
    var parameter = "EmployeeID=1001";

    p = encodeURI('where={"Number":8248198568}');

    var replace7B = p.replace('%7B', '{');
    var replace7D = replace7B.replace('%7D', '}');
    //   parS = encodeURIComponent(JSON.stringify(params));

    var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Test" + "?" + "-G " + replace7D;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
    xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.responseText.length != 0) {
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
function InitialiseParse() {
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

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            if (result.objectId) {
                alert("saved an object with id: " + result.objectId);
            }
        }
    }

}

