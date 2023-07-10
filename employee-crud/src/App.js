
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='emp/employees' element={<EmployeeList />} />
        <Route path='emp/addEmployee' element={<AddEmployee />}/>
        <Route path='emp/edit:code' element={<UpdateEmployee />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
