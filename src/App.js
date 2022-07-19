import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "./History";

function App() {
  return (
    <div className="App">
      Black History App
      <Router>
        <Routes>
          <Route exact path="/History/:name" element={<History />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
