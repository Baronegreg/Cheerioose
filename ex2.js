var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 3000;

var url = "https://www.indeed.com/cmp/Printed-Leggings/jobs/Ecommerce-Web-Developer-fe629dfc763dac96?q=web+development";

request(url, function(err, res, body) {
    var $ = cheerio.load(body);

    // Original method
    // =================================================================

    var companyName = $('.company');
    var companyNameText = companyName.text();

    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();

    var location = $('.location');
    var locationText = location.text();

    var summary = $('#job_summary p');
    var summaryText = summary.text();


    // Filter method:
    // ================================================================

    // $('.company').filter(function() {
    //     var companyName = $(this);
    //     var companyNameText = companyName.text();


    //     $('.jobtitle font').filter(function() {
    //         var jobTitle = $(this);
    //         var jobTitleText = jobTitle.text();

    //         $('.location').filter(function() {
    //             var location = $(this);
    //             var locationText = location.text();

    //             $('#job_summary p').filter(function() {
    //                 var summary = $(this);
    //                 var summaryText = summary.text();

                    var job = {
                        companyName: companyNameText,
                        jobTitle: jobTitleText,
                        location: locationText,
                        summary: summaryText
                    };

                    console.log(job);
                })
            // })
//         })
//     })
// })












//Listen on Port 8000
//=================================================
app.listen(port);
console.log("Listening on Port " + port);
