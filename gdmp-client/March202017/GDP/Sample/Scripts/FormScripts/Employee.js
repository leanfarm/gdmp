
function edit(index) {
    $('#save,#update').toggle();
    $('#name').val(jPut.users.data[index].name);
    $('#email').val(jPut.users.data[index].email);
    $('#phone').val(jPut.users.data[index].phone);
    $('#update').attr('data-id', index);

}

$(document).ready(function () {

    //Date picker
    $('#joiningdate').datepicker({
        autoclose: true
    });

    $('#leavingdate').datepicker({
        autoclose: true
    });

    $('#dob').datepicker({
        autoclose: true
    });

});

function SubmitEmployeeData() {
    var PersonalDetailsJson = { PersonalDetails: [] };
    var ContactAddressJson = { ContactAddress: [] };
    var PermanentAddressJson = { PermanentAddress: [] };
    var EducationDetailsJson = { EducationDetails: [] };
    var EmployeeDetailsJson = { EmployeeDetails: [] };
    var name, employeeid, role, remarks;
    var employeeFormData = {};
    var EmployeeJson = null;
    var EmployeeObject = {};
    $("form").serializeArray().map(function (x) { employeeFormData[x.name] = x.value; });
    var employeeFormDataJson1 = $(jQuery.parseJSON(JSON.stringify(employeeFormData))).each(function () {
        name = this.Name;
        employeeid = this.EmployeeID;
        role = this.Role;
        remarks = this.remarks;

        var male = this.Male;
        var female = this.Female;
        var others = this.Others;

        if (this.name.length > 0) { $.extend(EmployeeObject,{ "Name": this.name }); }
        if (this.phone.length > 0) { $.extend(EmployeeObject,{ "PhoneNo": this.phone }); }
        if (this.employeeid.length > 0) { $.extend(EmployeeObject,{ "EmployeeId": this.employeeid }); }

        if (this.alternatephone.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "AlternatePhone": this.alternatephone }); }
        if (this.emergencyphone.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "EmergencyPhone": this.emergencyphone }); }
        if (this.emergencycontactname.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "EmergencyContactName": this.emergencycontactname }); }

        if (this.email.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "Email": this.email }); }
        if (this.dob.length > 0) { PersonalDetailsJson.PersonalDetails.push({ "DOB": this.dob }); }
        
        if (this.cdoornumber.length > 0) { ContactAddressJson.ContactAddress.push({ "DoorNumber": this.cdoornumber }); }
        if (this.cbuildingnumber.length > 0) { ContactAddressJson.ContactAddress.push({ "BuildingNumber": this.cbuildingnumber }); }
        if (this.cbuildingname.length > 0) { ContactAddressJson.ContactAddress.push({ "BuildingName": this.cbuildingname }); }
        if (this.cstreet.length > 0) { ContactAddressJson.ContactAddress.push({ "Street": this.cstreet }); }
        if (this.carea.length > 0) { ContactAddressJson.ContactAddress.push({ "Area": this.carea }); }
        if (this.ctaluk.length > 0) { ContactAddressJson.ContactAddress.push({ "Taluk": this.ctaluk }); }
        if (this.cdistrict.length > 0) { ContactAddressJson.ContactAddress.push({ "District": this.cdistrict }); }
        if (this.cpincode.length > 0) { ContactAddressJson.ContactAddress.push({ "Pincode": this.cpincode }); }
        if (this.cstate.length > 0) { ContactAddressJson.ContactAddress.push({ "State": this.cstate }); }

        if (this.pdoornumber.length > 0) { PermanentAddressJson.PermanentAddress.push({ "DoorNumber": this.pdoornumber }); }
        if (this.pbuildingnumber.length > 0) { PermanentAddressJson.PermanentAddress.push({ "BuildingNumber": this.pbuildingnumber }); }
        if (this.pbuildingname.length > 0) { PermanentAddressJson.PermanentAddress.push({ "BuildingName": this.pbuildingname }); }
        if (this.pstreet.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Street": this.pstreet }); }
        if (this.parea.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Area": this.parea }); }
        if (this.ptaluk.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Taluk": this.ptaluk }); }
        if (this.pdistrict.length > 0) { PermanentAddressJson.PermanentAddress.push({ "District": this.pdistrict }); }
        if (this.ppincode.length > 0) { PermanentAddressJson.PermanentAddress.push({ "Pincode": this.ppincode }); }
        if (this.pstate.length > 0) { PermanentAddressJson.PermanentAddress.push({ "State": this.pstate }); }
        
        if (this.degree.length > 0) { EducationDetailsJson.EducationDetails.push({ "Degree": this.degree }); }
        if (this.YearOfCompletion.length > 0) { EducationDetailsJson.EducationDetails.push({ "YearOfCompletion": this.YearOfCompletion }); }
        if (this.University.length > 0) { EducationDetailsJson.EducationDetails.push({ "University": this.University }); }

        if (this.Organisation.length > 0) { EmployeeDetailsJson.EmployeeDetails.push({ "Organisation": this.Organisation }); }
        if (this.Designation.length > 0) { EmployeeDetailsJson.EmployeeDetails.push({ "Designation": this.Designation }); }
        if (this.JoingingDate.length > 0) { EmployeeDetailsJson.EmployeeDetails.push({ "JoingingDate": this.JoingingDate }); }
        if (this.LeavingDate.length > 0) { EmployeeDetailsJson.EmployeeDetails.push({ "LeavingDate": this.LeavingDate }); }
    });

   // PernonalDetails = { "EmployeeID": employeeid, "Role": role };

    var finalEmployeeObject = null;
    if (Object.keys(EmployeeObject).length != 0) { finalEmployeeObject = EmployeeObject }; 
    if (ContactAddressJson.ContactAddress.length != 0) { $.extend(finalEmployeeObject, ContactAddressJson); }
    if (PermanentAddressJson.PermanentAddress.length != 0) { $.extend(finalEmployeeObject, PermanentAddressJson); }
    if (EducationDetailsJson.EducationDetails.length != 0) { $.extend(finalEmployeeObject, EducationDetailsJson); }
    if (EmployeeDetailsJson.EmployeeDetails.length != 0) { $.extend(finalEmployeeObject, EmployeeDetailsJson); }
    
    if (finalEmployeeObject != null) {
        //var finalEmployeeObject = $.extend(PernonalDetails, PresentAddressJson, PermanentAddressJson, ContactDetailsJson, EducationDetailsJson, WorkDetailsJson);
        var finalEmployeeObjectStringify = JSON.stringify(finalEmployeeObject);

        var xhr = new XMLHttpRequest();
        var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/EmployeeProfile";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
        xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.responseText.length != 0) {
                    //var result = JSON.parse(xhr.responseText);
                    //console.log(xhr.responseText);
                    alert('Employee created sucessfully.');
                    
                }
            }
        }
        xhr.send(finalEmployeeObjectStringify);
    }  
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

