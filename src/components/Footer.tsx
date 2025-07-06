import React, { useState } from "react";

const Footer: React.FC = () => {
  const [selected, setSelected] = useState<string>("allOrders");
  const [sheets, setSheets] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const isSelected = (key: string) => selected === key;

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 1000);
  };

  const baseButtonClass = `
    h-[44px] flex items-center justify-center
    text-gray-700 font-medium cursor-pointer
    transition-colors duration-200 ease-in-out
    pt-[10px] pb-[10px] focus:outline-none
  `;

  const defaultButtons = [
    { key: "allOrders", label: "All Orders" },
    { key: "pending", label: "Pending" },
    { key: "reviewed", label: "Reviewed" },
    { key: "arrived", label: "Arrived" },
  ];

  const allButtons = [
    ...defaultButtons.map((btn) => ({
      ...btn,
      className: `
        w-[100px] pl-[16px] ${baseButtonClass}
        ${
          isSelected(btn.key)
            ? "border-t-2 border-t-[#4B6A4F] bg-gray-300"
            : "border-t-2 border-t-transparent bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-400"
        }
      `,
    })),
    ...sheets.map((sheet) => ({
      key: sheet,
      label: sheet,
      className: `
        w-[100px] pl-[16px] ${baseButtonClass}
        ${
          isSelected(sheet)
            ? "border-t-2 border-t-[#4B6A4F] bg-gray-300"
            : "border-t-2 border-t-transparent bg-[#E8F0E9] hover:bg-[#C3D7C6] active:bg-[#92B27D] active:border-t-[#2E4627] focus:bg-[#92B27D] focus:border-t-[#2E4627]"
        }
      `,
    })),
  ];

  const plusButton = {
    key: "plus",
    label: "+",
    className: `
      w-[40px] pl-[8px] ${baseButtonClass}
      ${
        isSelected("plus")
          ? "border-t-2 border-t-[#4B6A4F] bg-gray-300"
          : "border-t-2 border-t-transparent bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-400"
      }
    `,
  };

  const handleClick = (key: string, label: string) => {
    setSelected(key);
    if (key !== "plus") {
      showToast(`${label} clicked`);
    } else {
      const nextSheetNumber = sheets.length + 4;
      const newSheet = `Sheet ${nextSheetNumber}`;
      setSheets([...sheets, newSheet]);
      setSelected(newSheet);
      showToast(`${newSheet} created`);
    }
  };
  return (
    <>
      {toast && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow text-sm z-50 transition-opacity duration-300">
          {toast}
        </div>
      )}

      <tfoot className="sticky bottom-0 z-10 bg-white border-t border-[#EEEEEE]">
        <tr className="h-[48px] text-sm text-gray-700">
          <td
            colSpan={10}
            className="w-[1440px] px-[32px] pt-[4px] bg-[#FFFFFF] border-t border-[#EEEEEE] opacity-100 flex items-center"
          >
            {allButtons.map((btn) => (
              <button
                key={btn.key}
                onClick={() => handleClick(btn.key, btn.label)}
                className={btn.className}
                style={{ transform: "rotate(0deg)", gap: "8px" }}
              >
                {btn.label}
              </button>
            ))}

            <button
              key="plus"
              onClick={() => handleClick("plus", "+")}
              className={plusButton.className}
              style={{ transform: "rotate(0deg)", gap: "8px" }}
            >
              +
            </button>
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default Footer
