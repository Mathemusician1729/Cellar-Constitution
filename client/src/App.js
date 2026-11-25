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
import Homepage from "./pages/Home.jsx";
import AddItemType from "./pages/AddItemType";
import ItemTypes from "./pages/ItemTypes";
import LoginPage from "./pages/Login.jsx";
import EditItemType from "./pages/EditItemType.jsx"
import "./style.css"

function App() {
  return ( // allow for page to update based on path
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login/:role" element={<LoginPage/>}/>
	  <Route path="/Inventory" element={<Inventory/>}/>
	    <Route path="/AddItem/" element={<AddItem/>}/>
	  <Route path="/AddItemType" element={<AddItemType/>}/>
	  <Route path="/EditItemType/:type_name" element={<EditItemType/>}/>
	    <Route path="/ItemTypes" element={<ItemTypes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
