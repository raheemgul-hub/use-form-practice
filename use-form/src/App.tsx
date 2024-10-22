import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/home/home';
import AddTable from './pages/add-table/AddTable';
import LayoutPage from './pages/layoutpage/LayoutPage';
import AddForm from './pages/add-form/AddForm';
import Employee from './pages/employee-axios/Emloyee';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<LayoutPage />}></Route>
          <Route path='addform' element={<AddForm />}></Route>
          <Route path='addtable' element={<AddTable />}></Route>
          <Route path='employee' element={<Employee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
