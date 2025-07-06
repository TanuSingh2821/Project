import React from 'react'
import UserIcon from "../assets/User.svg";
import PanelIcon from "../assets/Panel.svg";
import SearchBar from "../assets/search2.svg";
import Notification from "../assets/Alert.svg"
const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-white border-b-2 border-gray-200 text-sm">
      <div className="font-semibold flex items-center gap-2">
        <img alt="Sidebar Icon" className="px-2" src={PanelIcon} />
        <span className="text-[#afafaf] cursor-pointer hover:underline">WorkSpace</span>
        <span className="text-[#afafaf]">{'>'}</span>
        <span className="text-[#afafaf] cursor-pointer hover:underline">Folder 2</span>
        <span className="text-[#afafaf]">{'>'}</span>
        <span className="cursor-pointer hover:underline">Spreadsheet 3</span>
        <span className="text-[#afafaf] text-lg tracking-wider ml-1 -translate-y-1" style={{ lineHeight: 1 }}>
          ...
        </span>
      </div>

      {/* Search + Notifications + Profile */}
      <div className="flex items-center gap-2 pr-3">
        {/* Search box */}
        <div className="bg-[#F6F6F6] flex items-center gap-2 p-2.5 rounded-lg text-gray-500 w-[150px]">
         <img src={SearchBar} alt="" className='w-5 h-5'/>
          <input
            placeholder="Search within sheet"
            className="text-xs bg-transparent outline-none placeholder:text-gray-400 w-[105px]"
            type="text"
          />
        </div>

        {/* Notifications icon */}
        <img alt="Notifications" className="cursor-pointer" src={Notification} />

        {/* Profile */}
        <img alt="Profile" className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer" src={UserIcon} />
        <div className="flex flex-col leading-tight cursor-pointer">
          <div className="text-xs">John Doe</div>
          <div className="text-[#afafaf] text-[10px]">john.doe...</div>
        </div>
      </div>
      
    </div>
  )
}

export default TopBar
