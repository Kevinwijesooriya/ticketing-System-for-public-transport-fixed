import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const InspectorReportGenerator = (inspectors) => {
    //console.log("🚀 ~ file: reportGenerator.js ~ line 9 ~ generatePDF ~ posts", posts)

    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = [
        "Inspector ID",
        "NIC Number",
        "Name",
        "Email",
        "Phone Number",
        "Address",
        "Bus Number",
    ];

    // define an empty array of rows
    const tableRows = [];

    // for each ticket pass all its data into an array
    inspectors.forEach((inspector) => {
        const inspectorData = [
            inspector.inspectorId,
            inspector.NicNumber,
            inspector.name,
            inspector.email,
            inspector.phoneNumber,
            inspector.address,
            inspector.busNumber,
            // called date-fns to format the date on the ticket
            // format(new Date(ticket.updatedat), "yyyy-MM-dd")
        ];
        // push each tickcet's info into a row
        tableRows.push(inspectorData);
    });

    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });

    // ticket title. and margin-top + margin-left
    doc.text(" Inspector Report", 14, 15);
    // we define the name of our PDF file.
    doc.save("_Inspector_Report_.pdf");
};

export default InspectorReportGenerator;
