import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Index from './component/Index';
import Register from './component/Register';
import Home from "./component/Home";
import Profile1 from "./component/Profile1";
import Dashboard from "./component/Dashboard";
import Userhome from "./component/Userhome";
import LoginDon from "./Doner/LoginDon";
import RegisterDon from "./Doner/RegisterDon";
import ProfileDon from "./Doner/ProfileDon";
import DashDon from "./Doner/DashDon";
import DonerHome from "./Doner/DonerHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index></Index>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile1" element={<Profile1></Profile1>}></Route>
        <Route path="/dashboard1" element={<Dashboard></Dashboard>}></Route>
        <Route path="/home2" element={<Userhome></Userhome>}></Route>
        <Route path="/LoginDon" element={<LoginDon></LoginDon>}></Route>
        <Route path="/RegisterDon" element={<RegisterDon></RegisterDon>}></Route>
        <Route path="/profiledon" element={<ProfileDon></ProfileDon>}></Route>
        <Route path="/dashdon" element={<DashDon></DashDon>}></Route>
        <Route path="/homeDoner" element={<DonerHome></DonerHome>}></Route>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
