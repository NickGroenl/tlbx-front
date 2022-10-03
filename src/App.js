import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/home';
import CsvData from './routes/csvData';


function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/:id" element={<CsvData/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
