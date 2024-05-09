import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from "./components/Login"
import HomePage from "./components/Home"

function App() {
  return (
  <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
