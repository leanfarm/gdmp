
$(document).ready(function () {
    GetOpenJobsData();
    BindSalesAgents();

    $("#JobTable").on('click', 'tr', function (e) {
        sessionStorage.setItem("ObjectId", $(this).find('td:eq(5)').attr('id'));
        sessionStorage.setItem("CustomerId", $(this).find('td:eq(0)').attr('id'));
        $("#lblJobNo").html($(this).find('td:eq(1)').html());
        $("#lblCustName").html($(this).find('td:eq(2)').html());
        $("#lblPhoneNo").html($(this).find('td:eq(3)').html());
        $("#lblScheduledTime").html($(this).find('td:eq(4)').html());
        GetCustomerData($(this).find('td:eq(0)').attr('id'));
    });
});

function JobAssign()
{
    var ObjectId = sessionStorage.getItem("ObjectId");
    var EmpId = $("#DdlSalesAgent").val();
    var EmployeeName = $("#DdlSalesAgent :selected").text();
    var Remarks = $("#Remarks").text();
    var UpdatedJobJson = {"Status":"Assigned", "EmployeeName": EmployeeName, EmpId: EmpId, "Remarks" : Remarks };
    var finalEmployeeObject = UpdatedJobJson;
   
    var xhr = new XMLHttpRequest();
    var url = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job/" + ObjectId;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("X-Parse-Application-Id", "gdp_app");
    xhr.setRequestHeader("X-Parse-Master-Key", "gdp_master");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            GetOpenJobsData();
            alert('Job Assigned Successfully.');
        }
    }
    var UpdatedJobJsonStringify = JSON.stringify(UpdatedJobJson);
    xhr.send(UpdatedJobJsonStringify);
}

function Search() {
    GetOpenJobsData();
}

function GetOpenJobsData() {
    $('#JobTable tbody').remove();
    var SearchPhone = $("#txtPhoneSrch").val();
    var Joburl = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job";
    var whereQuery;
    if (SearchPhone.length > 0) {
        whereQuery = 'where={"Status":"Open", "PhoneNo":"' +SearchPhone + '"}';

    }
    else {
        whereQuery = 'where={"Status":"Open"}';
    }
   // var whereQuery = 'where={"Status":"Open"}';
    var toEncodUriQuery = encodeURI(whereQuery);
   // "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,

	$.ajax({
	    url: "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job" + "?" + toEncodUriQuery,
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
	        var Jobs = JSON.stringify(data);
	        BindJobsTable(data);
	    }
	});
}

function GetCustomerData(customerId) {
    var whereQuery = 'where={"CustomerId":"' + customerId + '"}';
    var toEncodUriQuery = encodeURI(whereQuery);
    // "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,

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
            var Address = "";

            $("#lblAddress").html("NA");
            var ContactDetails = data.results[0].ContactAddress;

            if (ContactDetails[0] != null) { Address = Address + "DoorNumber - " + ContactDetails[0].DoorNumber + "<br/>" };
            if (ContactDetails[1] != null) { Address = Address + "BuildingNumber - " + ContactDetails[1].BuildingNumber + "<br/>" };
            if (ContactDetails[2] != null) { Address = Address + "BuildingName - " + ContactDetails[2].BuildingName + "<br/>" };
            if (ContactDetails[3] != null) { Address = Address + "Street - " + ContactDetails[3].Street + "<br/>" };
            if (ContactDetails[4] != null) { Address = Address + "Area - " + ContactDetails[4].Area + "<br/>" };
            if (ContactDetails[5] != null) { Address = Address + "Taluk - " + ContactDetails[5].Taluk + "<br/>" };
            if (ContactDetails[6] != null) { Address = Address + "District - " + ContactDetails[6].District + "<br/>" };
            if (ContactDetails[7] != null) { Address = Address + "Pincode - " + ContactDetails[7].Pincode + "<br/>" };
            if (ContactDetails[8] !=null) { Address = Address + "State - " + ContactDetails[8].State + "<br/>" };


            //var Address = "DoorNumber - " + Customer[0].DoorNumber + "<br/>" +
            //              "BuildingNumber - " + Customer[1].BuildingNumber + "<br/>" +
            //              "BuildingName - " + Customer[2].BuildingName + "<br/>" +
            //              "Street - " + Customer[3].Street + "<br/>" +
            //              "Area - " + Customer[4].Area + "<br/>" +
            //              "Taluk - " + Customer[5].Taluk + "<br/>" +
            //              "District - " + Customer[6].District + "<br/>" +
            //              "Pincode - " + Customer[9].Pincode + "<br/>" +
            //              "State - " + Customer[10].State + "<br/>" ;
            $("#lblAddress").html(Address);
        }
    });
}


function BindJobsTable(data) {
    var jobs = data.results;
    var tr;
    for (var i = 0; i < jobs.length; i++) {
        tr = $("<tr>");
        tr.append("<td id='" + jobs[i].CustomerId +"'>" +  (i + 1 ) + "</td>");
        tr.append("<td>" + jobs[i].JobId + "</td>");
        tr.append("<td>" + jobs[i].CustomerName + "</td>");
        tr.append("<td>" + jobs[i].PhoneNo + "</td>");
        tr.append("<td>" + new Date(jobs[i].JobDateTime).toLocaleString() + "</td>");
        tr.append("<td id='" + jobs[i].objectId + "' ><a href='#'  data-toggle='modal' data-target='#JobDetails'>Assign</a></td>");
        tr.append("</tr>")
        $("#JobTable").append(tr);
    }
   
}

function BindSalesAgents()
{
    $.ajax({
        url: "https://gdp-parse-server-example.herokuapp.com/parse/classes/EmployeeProfile",
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
            var employees = data.results;
            for (var i = 0; i < employees.length; i++) {
                var option = $('<option>').attr('value', employees[i].EmployeeId).html(employees[i].Name);
                $('#DdlSalesAgent').append(option);
            }
        }
    });
}
