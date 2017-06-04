
$(document).ready(function () {
    GetAllJobsData();

    $("#JobTable").on('click', 'tr', function (e) {
        GetJobData($(this).find('td:eq(7)').attr('id'));
    });
});


function GetAllJobsData() {
    $('#JobTable tbody').remove();

    var SearchPhone = $("#txtPhoneSrch").val();
    var Joburl = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job";
    //var whereQuery = 'where={"Status":"Open"}';
    //var toEncodUriQuery = encodeURI(whereQuery);
    //// "https://gdp-parse-server-example.herokuapp.com/parse/classes/CustomerProfile" + "?" + toEncodUriQuery,
    if (SearchPhone.length > 0) {
        var whereQuery = 'where={"PhoneNo":"' + SearchPhone + '"}';
        var toEncodUriQuery = encodeURI(whereQuery);
        Joburl = "https://gdp-parse-server-example.herokuapp.com/parse/classes/Job" + "?" + toEncodUriQuery;
    }
    $.ajax({
        url: Joburl,
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

function Search() {
    GetAllJobsData();
}

function BindJobsTable(data) {
    var jobs = data.results;
    var tr;
    for (var i = 0; i < jobs.length; i++) {
        var EmployeeName = "";
        if (jobs[i].EmployeeName != null) {
            EmployeeName = jobs[i].EmployeeName;
        }
        tr = $("<tr>");
        tr.append("<td id='" + jobs[i].CustomerId + "'>" + (i + 1) + "</td>");
        tr.append("<td>" + jobs[i].JobId + "</td>");
        tr.append("<td>" + jobs[i].CustomerName + "</td>");
        tr.append("<td>" + jobs[i].PhoneNo + "</td>");
        tr.append("<td>" + new Date( jobs[i].JobDateTime).toLocaleString()  + "</td>");
        tr.append("<td>" + EmployeeName + "</td>");

        if (jobs[i].Status == "Open") {
        }
        if   (jobs[i].Status == "Assigned"){
            tr.append("<td><span class='label label-primary'>Assigned</span></td>");
        }
        else if (jobs[i].Status == "In Progress") {
            tr.append("<td><span class='label label-warning'>In Progress</span></td>");
        } else if (jobs[i].Status == "Completed") {
            tr.append("<td><span class='label label-success'>Assigned</span></td>");
        }
        else {
            tr.append("<td><span class='label label-info'>Open</span></td>");
        }
        tr.append("<td id='" + jobs[i].JobId + "' ><a href='#'  data-toggle='modal' data-target='#JobDetails'>View</a></td>");
        tr.append("</tr>")
        $("#JobTable").append(tr);
    }

}


function GetJobData(JobId) {
    var whereQuery = 'where={"JobId":"' + JobId + '"}';
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
            //var data = JSON.stringify(obj);
            var jobs = data.results;

            $("#lblJobNo").html(jobs[0].JobId);
            $("#lblScheduledTime").html(jobs[0].JobDateTime);
            $("#lblStatus").html(jobs[0].Status);

            if (jobs[0].JobDetails.StartDateTime != null) { $("#lblStartTime").html(jobs[0].JobDetails.StartDateTime) };
            if (jobs[0].JobDetails.EndDateTime != null) { $("#lblEndTime").html(jobs[0].JobDetails.EndDateTime) };
            if (jobs[0].JobDetails.CancelDateTime != null) { $("#lblCancelledTime").html(jobs[0].JobDetails.CancelDateTime) };
            
        }
    });
}


