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
import AddItemType from "./pages/AddItemType";
import ItemTypes from "./pages/ItemTypes";
import Login from "./pages/Login";
import "./style.css"

function App() {
    return (
	    <div className="App">
	    <BrowserRouter>
	    <Routes>

	// change to login if not logged in, some sort of menu otherwise
	    <Route path="/" element={<Home/>}/>
	    <Route path="/Inventory" element={<Inventory/>}/>
	    <Route path="/AddItem/" element={<AddItem/>}/>
	    <Route path="/AddItemType" element={<AddItemType/>}/>
	    <Route path="/ItemTypes" element={<ItemTypes/>}/>
	    </Routes>
	    </BrowserRouter>
	    </div>
    );
}

export default App;
