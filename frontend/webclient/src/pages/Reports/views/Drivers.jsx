import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const DriversReportGenerator = (drivers) => {
    //console.log("🚀 ~ file: reportGenerator.js ~ line 9 ~ generatePDF ~ posts", posts)

    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = [
        "Driver Name",
        "Driver Email",
        "Driver Phone Number",
        "Driver Address",
        "Driver NIC",
        "Bus Number",
    ];

    // define an empty array of rows
    const tableRows = [];

    // for each ticket pass all its data into an array
    drivers.forEach((driver) => {
        const driverData = [
            driver.driverName,
            driver.dEmail,
            driver.dPhoneNumber,
            driver.dAddress,
            driver.dNic,
            driver.dBusNo,
            // called date-fns to format the date on the ticket
            // format(new Date(ticket.updatedat), "yyyy-MM-dd")
        ];
        // push each tickcet's info into a row
        tableRows.push(driverData);
    });

    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });

    // ticket title. and margin-top + margin-left
    doc.text(" Driver Report", 14, 15);
    // we define the name of our PDF file.
    doc.save("_Driver_Report_.pdf");
};

export default DriversReportGenerator;
