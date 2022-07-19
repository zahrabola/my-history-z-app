import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "./History";
import HPage from "./HPage";

function App() {
  return (
    <div className="App">
      Black History App
      <Router>
        <Routes>
          <Route path="/" element={<History />} />
          <Route exact path="/History/:name" element={<HPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
