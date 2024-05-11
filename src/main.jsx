import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ground from './Ground.jsx';
import Warship from './Warship.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/plane' element={<App/>}/>
        <Route path='/tank' element={<Ground/>}/>
        <Route path='/warship' element={<Warship/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

