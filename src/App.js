import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { tableData } from "./data/tableData";
function App() {
    return (_jsxs("div", { className: "w-screen h-screen flex flex-col bg-white text-sm overflow-hidden", children: [_jsx(TopBar, {}), _jsx(Toolbar, {}), _jsx("div", { className: "flex-1 overflow-auto", children: _jsx(Table, { data: tableData }) }), _jsx(Footer, {})] }));
}
export default App;
