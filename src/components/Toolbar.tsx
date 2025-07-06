import React from "react";
import ToolbarIcon from "../assets/Toolbar.svg";
import EyeIcon from "../assets/Eye.svg";
import SortIcon from "../assets/ArrowSort.svg";
import FilterIcon from "../assets/Filter.svg";
import CellIcon from "../assets/Arrow Autofit.svg";
import ImportIcon from "../assets/Arrow Download.svg";
import ExportIcon from "../assets/Arrow Upload.svg";
import DoubleArrow from "../assets/Shape.svg";
import ShareIcon from "../assets/Share.svg";

const Toolbar = () => {
  return (
    <div className="flex gap-2 px-3 py-1.5 justify-between border-b border-[#eeeeee] text-sm">
      {/* Left buttons group */}
      <div className="flex items-center gap-5">
        <button className="flex items-center justify-center gap-1 border-r-2 border-gray-300 px-3 py-1">
          <span>Tool bar</span>
          <img src={ToolbarIcon} alt="Arrow Icon" className="w-3 h-3" />
        </button>

        <button className="flex items-center justify-center gap-1 px-3 py-1 border-b-2 border-transparent hover:border-[#4B6A4F] transition-all duration-200 ease-in-out">
          <img src={EyeIcon} alt="Hide fields" className="w-4 h-4" />
          <span>Hide fields</span>
        </button>

        <button className="flex items-center justify-center gap-1 px-3 py-1 border-b-2 border-transparent hover:border-[#4B6A4F] transition-all duration-200 ease-in-out">
          <img src={SortIcon} alt="Sort" className="w-4 h-4" />
          <span>Sort</span>
        </button>

        <button className="flex items-center justify-center gap-1 px-3 py-1 border-b-2 border-transparent hover:border-[#4B6A4F] transition-all duration-200 ease-in-out">
          <img src={FilterIcon} alt="Filter" className="w-4 h-4" />
          <span>Filter</span>
        </button>

        <button className="flex items-center justify-center gap-1 px-3 py-1 border-b-2 border-transparent hover:border-[#4B6A4F] transition-all duration-200 ease-in-out">
          <img src={CellIcon} alt="Cell view" className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right buttons group */}
      <div className="flex items-center gap-2">
        <button className="group border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in">
          <img
            src={ImportIcon}
            alt="Import"
            className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition duration-200"
          />
          <span>Import</span>
        </button>

        <button className="group border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in">
          <img
            src={ExportIcon}
            alt="Export"
            className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition duration-200"
          />
          <span>Export</span>
        </button>

        <button className="group border border-gray-200 flex items-center justify-center gap-1 py-2 rounded-md px-2 text-gray-600 hover:bg-[#4B6A4F] hover:text-white duration-200 ease-in">
          <img
            src={ShareIcon}
            alt="Share"
            className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition duration-200"
          />
          <span>Share</span>
        </button>

        <button className="bg-[#4B6A4F] text-white flex items-center justify-center gap-1 py-2 rounded-md px-6">
          <img src={DoubleArrow} alt="New Action" className="w-4 h-4" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
