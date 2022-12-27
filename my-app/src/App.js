import logo from './logo.svg';
import './App.css';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/index'
import Travel from './pages/travel'
import Resume from './pages/resume'

function App() {
  return (
    <React.Fragment>
      <Router>
              <NavBar />
      <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
