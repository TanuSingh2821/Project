import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// Imported SVG icons
import PlusIcon from "../assets/plus.svg";
import AbcIcon from "../assets/AbcIcon.svg";
import ShapeIcon from "../assets/Shape.svg";
import Calender from "../assets/Calendar.svg";
import Emogi from "../assets/Emoji.svg";
import Globe from "../assets/Globe.svg";
import CircularArrow from "../assets/CircularArrow.svg";
import Circle from "../assets/Chevron Circle.svg";
import Person from "../assets/Person.svg";
import LinkIcon from "../assets/Link.svg";
const Table = ({ data }) => {
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
    const renderCell = (rowIndex, colIndex, content = "") => (_jsx("td", { className: `px-2 py-2 border h-[40px] border-[#EEEEEE] cursor-pointer transition-all duration-150 ease-in-out ${selectedCell.row === rowIndex && selectedCell.col === colIndex
            ? "border-2 border-green-500"
            : ""}`, onClick: () => setSelectedCell({ row: rowIndex, col: colIndex }), children: _jsx("div", { contentEditable: true, suppressContentEditableWarning: true, className: "outline-none w-full h-full", children: content }) }, `cell-${rowIndex}-${colIndex}`));
    return (_jsx("div", { className: "w-full h-[700px] bg-[#F6F6F6] font-sans overflow-hidden", children: _jsx("div", { className: "h-full overflow-hidden", children: _jsxs("table", { className: "min-w-full table-fixed border-separate border-spacing-y-[1px]", children: [_jsxs("thead", { children: [_jsxs("tr", { className: "text-xs text-gray-700 top-0 z-20 bg-[#F6F6F6]", children: [_jsx("th", { className: "bg-white px-2 py-2 text-left" }), _jsx("th", { className: "bg-[#E2E2E2] px-2 py-2 text-left", colSpan: 4, children: _jsxs("div", { className: "flex px-2 py-1 text-sm truncate gap-2 items-center bg-[#E2E2E2]", style: { width: "710px" }, children: [_jsxs("div", { className: "flex items-center gap-1 bg-[#EEEEEE] py-2.5 px-1.5 rounded-md h-[24px] cursor-pointer w-[250px]", children: [_jsx("img", { src: LinkIcon, alt: "", className: "w-5 h-5" }), _jsx("span", { className: "text-gray-500", children: "Q3 Financial Overview" })] }), _jsx("img", { src: CircularArrow, alt: "", className: "w-4 h-4" })] }) }), _jsx("th", { className: "bg-white" }), _jsx("th", { className: "bg-[#D2E0D4] px-2 py-1 text-left", children: _jsxs("div", { className: "flex px-2 py-1 text-sm text-gray-600 truncate items-center justify-center gap-1 bg-[#D2E0D4] cursor-pointer", style: { width: "130px" }, children: [_jsx("img", { src: AbcIcon, alt: "", className: "w-5 h-5" }), _jsx("span", { className: "font-medium tracking-wide", children: "ABC" }), _jsx("span", { className: "text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]", children: "..." })] }) }), _jsx("th", { colSpan: 2, className: "bg-[#DCCFFC] px-2 py-2 text-left", children: _jsxs("div", { className: "px-2 py-1 text-sm text-gray-600 truncate flex items-center justify-center gap-1 bg-[#DCCFFC] cursor-pointer", style: { width: "150px" }, children: [_jsx("span", { className: "font-medium tracking-wide ml-2", children: "Answer a question" }), _jsx("span", { className: "text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]", children: "..." })] }) }), _jsx("th", { className: "bg-[#FAC2AF] px-2 py-2 text-left", children: _jsxs("div", { className: "px-2 py-1 text-sm text-gray-700 truncate flex items-center justify-center bg-[#FAC2AF] gap-1 cursor-pointer", style: { width: "150px" }, children: [_jsx("img", { src: ShapeIcon, alt: "", className: "w-5 h-5" }), _jsx("span", { className: "font-[500] tracking-wide", children: "Extract" }), _jsx("span", { className: "text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]", children: "..." })] }) }), _jsx("th", { className: "bg-[#EEEEEE] px-2 py-2 text-left border border-[#EEEEEE]", children: _jsx("div", { className: "px-2 py-1 text-sm text-gray-700 truncate bg-[#EEEEEE] flex items-center justify-center cursor-pointer", style: { width: "150px" }, children: _jsx("img", { src: PlusIcon, alt: "Plus", className: "w-3 h-4" }) }) })] }), _jsx("tr", { className: "bg-white text-left text-sm text-gray-600 sticky top-[42px] z-10", children: [
                                    { label: "#", icon: null },
                                    { label: "Job Request", icon: null },
                                    { label: "Submitted", icon: Calender },
                                    { label: "Status", icon: Circle },
                                    { label: "Submitter", icon: Person },
                                    { label: "URL", icon: Globe },
                                    { label: "Assigned", icon: Emogi },
                                    { label: "Priority", icon: null },
                                    { label: "Due Date", icon: null },
                                    { label: "Est. Value", icon: null },
                                ].map(({ label, icon }) => (_jsx("th", { className: "px-2 py-2 font-medium border border-[#EEEEEE] bg-white", children: icon ? (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx("img", { src: icon, alt: "", className: "w-4 h-4" }), _jsx("span", { children: label })] })) : (label) }, label))) })] }), _jsxs("tbody", { children: [data.map((row, rowIndex) => (_jsxs("tr", { className: "bg-white text-sm text-gray-800", children: [renderCell(rowIndex, 0, row.id), renderCell(rowIndex, 1, row.jobRequest), renderCell(rowIndex, 2, row.submitted), renderCell(rowIndex, 3, _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${row.status.bg} ${row.status.color}`, children: row.status.text })), renderCell(rowIndex, 4, row.submitter), renderCell(rowIndex, 5, _jsx("span", { className: "underline text-blue-600", children: row.url })), renderCell(rowIndex, 6, row.assigned), renderCell(rowIndex, 7, _jsx("span", { className: `${row.priority.color} font-medium`, children: row.priority.text })), renderCell(rowIndex, 8, row.dueDate), renderCell(rowIndex, 9, row.estValue), renderCell(rowIndex, 10, "")] }, `row-${row.id}`))), Array.from({ length: 100 }).map((_, rowIndex) => (_jsx("tr", { className: "bg-white text-sm text-gray-800", children: Array.from({ length: 11 }).map((_, colIndex) => renderCell(data.length + rowIndex, colIndex)) }, `empty-${rowIndex}`)))] })] }) }) }));
};
export default Table;
