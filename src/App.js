import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Login from "./components/pages/Login"
import HomePage from "./components/pages/Home"
import RegisterPage from './components/pages/Register';

function App() {
  return (
  <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
