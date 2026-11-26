import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddContact from "./pages/AddContact";
import AddDeduction from "./pages/AddDeduction";
import AddItem from "./pages/AddItem";
import Calendar from "./pages/Calendar";
import ContactsListAll from "./pages/ContactsListAll";
import ContactsListInternal from "./pages/ContactsListInternal";
import Dedutions from "./pages/Deductions";
import DonationLog from "./pages/DonationLog";
import Inventory from "./pages/Inventory";
import Home from "./pages/Home"; 
import Homepage from "./pages/homepage";
import HomeLayout from "./pages/HomeLayout"
import AddItemType from "./pages/AddItemType";
import ItemTypes from "./pages/ItemTypes";
import Login from "./pages/Login"
import Sidebar from "./pages/Sidebar";
import "./style.css"


function App() {
  return ( // allow for page to update based on path
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login/:role" element={<Login/>}/>
          <Route path ='/sidebar_test' element={<Sidebar/>}/>
          <Route path="/home" element={<HomeLayout/>}/>
	        {/* <Route path="/Inventory" element={<Inventory/>}/>  */}
          <Route path="/AddItem/" element={<AddItem/>}/>
          <Route path="/AddItemType" element={<AddItemType/>}/>
          <Route path="/ItemTypes" element={<ItemTypes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
