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

 // get data for the header date and show the present time and date
 function getHeaderDate() {
    const timeNow = moment().format('LLLL');
    console.log(timeNow);
    $("#currentDay").text(timeNow);
 }

//saves data to the localStorage
 function saveSchedule() {
     localStorage.setItem("myDay", JSON.stingify(myDay));
     console.log(myDay);
 }

 //sets any data in localStorage to the view
 function displaySchedule() {
     myDay.forEach(function (_thisHour) {
         $(`#${_thisHour.id}`).val(_thisHour.reminder);
         console.log(_thisHour.reminder)
     })
 }

 // set any existing localStorage data to the view if it exists
 function storage() {
     var savedDay = JSON.parse(localStorage.getItem("myDay"));
    console.log(savedDay);
     if (savedDay != null) {
         myDay = savedDay;
         console.log(myDay)
     }
     displaySchedule();
}

displaySchedule();

//loads header date
 getHeaderDate();

 //add in the elements of the scheduler body
 myDay.forEach(function(thisHour) {
     //create the row for the timeblocks
     let hourRow = $("<form>").attr({
         "class": "row"
     });

    $(".container").append(hourRow); 

     //creates the time field
     let hourIndex = $("<div>")
     .text(`${thisHour.hour}${thisHour.meridiem}`)
     .attr({
         "class": "col-md-2 hour"
     });

     //creates the area to add in events in the scheduler
     let eventEntry = $("<div>")
     .attr({
         "class": "col-md-9 description p-0"
     });

     // shows whether the time is past, present or future and is color coordinated
     var eventData = $("<textarea>");
     eventEntry.append(eventData);
     eventData.attr("id", thisHour.id);
     
     if (thisHour.time < moment().format("HH")) {
         hourRow.attr({
             "class": "row past"
         })
     } else if (thisHour.time === moment().format("HH")) {
         hourRow.attr({
             "class": "row present"
         })
     } else if (thisHour.time > moment().format("HH")) {
         hourRow.attr({
             "class": "row future"
         })
     }

     //creates save button
     let saveButton = $("<i class= 'far fa-save fa-lg'></i>")
     let saveEvent = $("<button>")
     .attr({
         "class": "col-md-1 saveBtn"
     });
     saveEvent.append(saveButton);
     hourRow.append(hourIndex, eventEntry, saveEvent);
     })

     //loads any existing localStorage data after the items are created
     storage();

     //saves data to be used in the localStorage
     $(".saveBtn").on("click", function(event) {
         event.preventDefault();
         let saveIndex = $(this).siblings(".description").children("textarea").attr("id");
         myDay[saveIndex].reminder = $(this).siblings(".description").children("textarea").val();
         console.log(saveIndex);
         saveSchedule();
         displaySchedule();
     })
 



