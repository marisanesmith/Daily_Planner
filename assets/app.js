$(document).ready(function() {

    //test flag
    const test = false;

    //show the date and time from the present moment
    const timeNow = moment().format('LLLL');
    console.log(timeNow)

    let $headingDate = $("#currentDay");
    $headingDate.text(timeNow);

    let nowHour24 = moment().format('H');
    console.log(nowHour24)
    let nowHour12 = moment().format('h');
    console.log(nowHour12)

    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    //using a save icon to save the event in the daily calendar
    const saveIcon = $("#display-icon")

    // Get the stored items from the to-do list from local storage
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
    if (test) {console.log(storedPlans)}

    //If the plans were retrieved from local storage, update the plan array to it

    //set variable referencing planner element
    let $plannerDiv = $("#formPlanner");
    $plannerDiv.empty();
   

    // build the calendar by row for a fixed number of hours
    for (let hour =9; hour <=17; hour ++) {
        let index = hour -9;
    }

    // build the row components in the calendar element

    let $rowDiv =$("<div>");
    $rowDiv.addClass("row");
    $rowDiv.addClass("plannerRow");
    $rowDiv.attr("hour-index", hour);


});