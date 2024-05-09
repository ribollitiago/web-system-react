import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from "./components/Login"

function App() {
  return (
  <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
