import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Travel from './pages/travel';
import Resume from './pages/resume';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/travel' element={<Travel />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </Router>
    );
}
 
export default App;