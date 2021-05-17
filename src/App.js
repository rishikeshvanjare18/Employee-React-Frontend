import './App.css';
import Employee from './components/Employee';
import EmployeeAdd from './components/EmployeeAdd';
import UpdateEmp from './components/UpdateEmp';

function App() {
  return (
    <div className="App">
        <Employee/>
        <EmployeeAdd/>
        {/* <UpdateEmp/> */}
    </div>
  );
}

export default App;
