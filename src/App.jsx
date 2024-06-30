import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gender from './Gender';
import BridesPage from './BridesPage';
import GroomsPage from './GroomsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Gender />} />
                <Route path="/brides" element={<BridesPage />} />
                <Route path="/grooms" element={<GroomsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
