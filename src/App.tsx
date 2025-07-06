import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { tableData } from "./data/tableData";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-white text-sm overflow-hidden">
      <TopBar />
      <Toolbar />
      <div className="flex-1 overflow-auto">
        <Table data={tableData} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
