import logo from './logo.svg';
import './style.css';

import { // import routes for requesting/getting data
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// import pages for frontend pages (make sure name is different than the route names)
import Homepage from "./pages/homepage";
import Login from "./pages/Login"

function App() {
  return ( // allow for page to update based on path
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login/:role" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;