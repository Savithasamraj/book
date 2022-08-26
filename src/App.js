
import './App.css';
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Register'; 
import Login from "./Login"
import Admin from './Admin';
import User from './User';
// import Dashboard from './Dashboard';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
  <Route path="/dashboard" element={<User/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;

