import logo from './logo.svg';
import './style.css';

import { // import routes for requesting/getting data
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// import pages for frontend pages (make sure name is different than the route names)
import Mainpage from "./pages/frontpage";

function App() {
  return ( // allow for page to update based on path
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/frontpage" element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;