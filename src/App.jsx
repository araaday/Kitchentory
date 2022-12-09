import Navbar from "./components/NavBar";
import Bar from "./components/Bar";
import Table from "./components/Table";
import ThresholdTable from "./components/ThresholdTable";
import AddThreshold from "./components/AddThreshold";
import EditThreshold from "./components/EditThreshold";

const App = () => {
  return <div>
    <Navbar />
    <Bar />
    <Table />
    <br>
    </br>
    <AddThreshold />
    <EditThreshold />
    <ThresholdTable />
  </div>;
};

export default App;