import logo from './logo.svg';
import Navbar from './Components/Navbar'
import './App.css';
import Adduser from './Components/Adduser';
import Alluser from './Components/Alluser';
import Crud from './Components/Crud';
import EditUser from './Components/EditUser'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Routes>
  <Route  path='/' index element={<Crud/>} />
  <Route  path='/add' element ={<Adduser/>}  />
  <Route  path='all' element={ <Alluser/>}  />
  <Route path='/edit/:id' element={<EditUser/>} />
  </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
