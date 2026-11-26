import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddContact from "./pages/AddContact";
import AddDeduction from "./pages/AddDeduction";
import AddItem from "./pages/AddItem";
import Calendar from "./pages/Calendar";
import ContactPage from "./pages/ContactPage";
import Dedutions from "./pages/Deductions";
import DonationLog from "./pages/DonationLog";
import Inventory from "./pages/Inventory";
import Home from "./pages/Home"; 
import Homepage from "./pages/homepage";
import HomeLayout from "./pages/HomeLayout"
import AddItemType from "./pages/AddItemType";
import EditItemType from "./pages/EditItemType";
import ItemTypes from "./pages/ItemTypes";
import Login from "./pages/Login"
import "./style.css"


function App() {
  return ( // allow for page to update based on path
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>}/>
	        <Route path="/AddItem/" element={<AddItem/>}/>
	        <Route path="/AddItemType" element={<AddItemType/>}/>
	        <Route path="/EditItemType/:type_name" element={<EditItemType/>}/>
	        <Route path="/ItemTypes" element={<ItemTypes/>}/>
          <Route path="/login/:role" element={<Login/>}/>
          <Route path="/home" element={<HomeLayout/>}> {/* Put dashboard links under this line, make sure routes are the same as routes in Sidebar.jsx */}
            <Route index element={<Home/>}/>
            <Route path='calendar' element={<Calendar/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='contact/:type' element={<ContactPage/>}/>
            <Route path='donations' element={<DonationLog/>}/>
          </Route>
	        {/* <Route path="/Inventory" element={<Inventory/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
