import React, { useState } from "react";
import { TableRow } from "../data/tableData";

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

interface Props {
  data: TableRow[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [selectedCell, setSelectedCell] = useState<{
    row: number | null;
    col: number | null;
  }>({ row: null, col: null });

  const renderCell = (
    rowIndex: number,
    colIndex: number,
    content: React.ReactNode = ""
  ) => (
    <td
      key={`cell-${rowIndex}-${colIndex}`}
      className={`px-2 py-2 border h-[40px] border-[#EEEEEE] cursor-pointer transition-all duration-150 ease-in-out ${
        selectedCell.row === rowIndex && selectedCell.col === colIndex
          ? "border-2 border-green-500"
          : ""
      }`}
      onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
    >
      <div
        contentEditable
        suppressContentEditableWarning
        className="outline-none w-full h-full"
      >
        {content}
      </div>
    </td>
  );

  return (
    <div className="w-full h-[700px] bg-[#F6F6F6] font-sans overflow-hidden">
      <div className="h-full overflow-hidden">
        <table className="min-w-full table-fixed border-separate border-spacing-y-[1px]">
          {/* Table Header Start */}
          <thead>
            <tr className="text-xs text-gray-700 top-0 z-20 bg-[#F6F6F6]">
              <th className="bg-white px-2 py-2 text-left"></th>
              <th className="bg-[#E2E2E2] px-2 py-2 text-left" colSpan={4}>
                <div
                  className="flex px-2 py-1 text-sm truncate gap-2 items-center bg-[#E2E2E2]"
                  style={{ width: "710px" }}
                >
                  <div className="flex items-center gap-1 bg-[#EEEEEE] py-2.5 px-1.5 rounded-md h-[24px] cursor-pointer w-[250px]">
                    <img src={LinkIcon} alt="" className="w-5 h-5" />
                    <span className="text-gray-500">Q3 Financial Overview</span>
                  </div>
                  <img src={CircularArrow} alt="" className="w-4 h-4" />
                </div>
              </th>
              <th className="bg-white"></th>
              <th className="bg-[#D2E0D4] px-2 py-1 text-left">
                <div
                  className="flex px-2 py-1 text-sm text-gray-600 truncate items-center justify-center gap-1 bg-[#D2E0D4] cursor-pointer"
                  style={{ width: "130px" }}
                >
                  <img src={AbcIcon} alt="" className="w-5 h-5" />
                  <span className="font-medium tracking-wide">ABC</span>
                  <span className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]">...</span>
                </div>
              </th>
              <th colSpan={2} className="bg-[#DCCFFC] px-2 py-2 text-left">
                <div
                  className="px-2 py-1 text-sm text-gray-600 truncate flex items-center justify-center gap-1 bg-[#DCCFFC] cursor-pointer"
                  style={{ width: "150px" }}
                >
                  <span className="font-medium tracking-wide ml-2">Answer a question</span>
                  <span className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]">...</span>
                </div>
              </th>
              <th className="bg-[#FAC2AF] px-2 py-2 text-left">
                <div
                  className="px-2 py-1 text-sm text-gray-700 truncate flex items-center justify-center bg-[#FAC2AF] gap-1 cursor-pointer"
                  style={{ width: "150px" }}
                >
                  <img src={ShapeIcon} alt="" className="w-5 h-5" />
                  <span className="font-[500] tracking-wide">Extract</span>
                  <span className="text-[#afafaf] text-lg tracking-wider ml-2 -translate-y-[1px]">...</span>
                </div>
              </th>
              <th className="bg-[#EEEEEE] px-2 py-2 text-left border border-[#EEEEEE]">
                <div
                  className="px-2 py-1 text-sm text-gray-700 truncate bg-[#EEEEEE] flex items-center justify-center cursor-pointer"
                  style={{ width: "150px" }}
                >
                  <img src={PlusIcon} alt="Plus" className="w-3 h-4" />
                </div>
              </th>
            </tr>

            {/* Second Row: Column Labels */}
            <tr className="bg-white text-left text-sm text-gray-600 sticky top-[42px] z-10">
              {[
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
              ].map(({ label, icon }) => (
                <th
                  key={label}
                  className="px-2 py-2 font-medium border border-[#EEEEEE] bg-white"
                >
                  {icon ? (
                    <div className="flex items-center gap-1">
                      <img src={icon} alt="" className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                  ) : (
                    label
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={`row-${row.id}`} className="bg-white text-sm text-gray-800">
                {renderCell(rowIndex, 0, row.id)}
                {renderCell(rowIndex, 1, row.jobRequest)}
                {renderCell(rowIndex, 2, row.submitted)}
                {renderCell(
                  rowIndex,
                  3,
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${row.status.bg} ${row.status.color}`}
                  >
                    {row.status.text}
                  </span>
                )}
                {renderCell(rowIndex, 4, row.submitter)}
                {renderCell(
                  rowIndex,
                  5,
                  <span className="underline text-blue-600">{row.url}</span>
                )}
                {renderCell(rowIndex, 6, row.assigned)}
                {renderCell(
                  rowIndex,
                  7,
                  <span className={`${row.priority.color} font-medium`}>
                    {row.priority.text}
                  </span>
                )}
                {renderCell(rowIndex, 8, row.dueDate)}
                {renderCell(rowIndex, 9, row.estValue)}
                {renderCell(rowIndex, 10, "")}
              </tr>
            ))}

            {/* Empty rows for extra space */}
            {Array.from({ length: 100 }).map((_, rowIndex) => (
              <tr key={`empty-${rowIndex}`} className="bg-white text-sm text-gray-800">
                {Array.from({ length: 11 }).map((_, colIndex) =>
                  renderCell(data.length + rowIndex, colIndex)
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
