import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/home';


function App() {
  const filess = useSelector((state) => state.files);
  const dispatch = useDispatch();
  console.log(filess);
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
