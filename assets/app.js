// variable to store and loop through scheduler
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
]
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


