import { BrowserRouter as Router } from 'react-router-dom';
import Vcq from "./components/Vcq";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Vcq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

