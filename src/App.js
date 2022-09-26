import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Read from "./pages/Read";
import Home from "./pages/Home";
import Sponsors from "./components/Sponsor";


function App() {
  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/read/:id" element={<Read />} /> 
          <Route path="/read/detail" element={<Sponsors />} /> 
          
      </Routes>
  );
}

export default App;
