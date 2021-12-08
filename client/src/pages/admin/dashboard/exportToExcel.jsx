import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(apiData);
        console.log("ws", ws)
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        console.log("wb", wb)
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        console.log("excelBuffer", excelBuffer)
        const data = new Blob([excelBuffer], { type: fileType });
        console.log("data", data)
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button>
    );
};

export default ExportToExcel