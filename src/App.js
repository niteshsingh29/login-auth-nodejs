import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
