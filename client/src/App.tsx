import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Topnav from './nav/topnav';
import Home from './pages/home';
import Results from './pages/results';
import Traits from './pages/traits';


function App() {
  return (
    <div className="h-screen w-screen">
    <Router>
    <Topnav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/traits" element={<Traits/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
    </Router>
    </div>

  );
}

export default App;
