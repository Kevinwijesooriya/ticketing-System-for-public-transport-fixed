import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const RouteScheduleReportGenerator = (routeSchedules) => {
    //console.log("🚀 ~ file: reportGenerator.js ~ line 9 ~ generatePDF ~ posts", posts)

    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = [
        "Router ID",
        "Start Destination",
        "End Destination",
        "Arrival Time",
        "Departure Time",
        "Bus Number",
        "Available Dates",
    ];

    // define an empty array of rows
    const tableRows = [];

    // for each ticket pass all its data into an array
    routeSchedules.forEach((routeSchedule) => {
        const routeScheduleData = [
          routeSchedule.routerId,
          routeSchedule.startDestination,
          routeSchedule.endDestination,
          routeSchedule.arrivalTime,
          routeSchedule.departureTime,
          routeSchedule.busNumber.map((number) => number.number),
          routeSchedule.availableDates,
          // called date-fns to format the date on the ticket
          // format(new Date(ticket.updatedat), "yyyy-MM-dd")
        ];
        // push each tickcet's info into a row
        tableRows.push(routeScheduleData);
    });

    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });

    // ticket title. and margin-top + margin-left
    doc.text(" Route Schedule Report", 14, 15);
    // we define the name of our PDF file.
    doc.save("_Route Schedule_Report_.pdf");
};

export default RouteScheduleReportGenerator;
