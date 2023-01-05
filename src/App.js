import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Gallery1 from "./routes/Gallery1";
import Teams from './routes/Teams'
import Events  from "./routes/Events";
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Team" element={<Teams/>} />
        <Route path="/Gallery" element={<Gallery1/>}/>
        <Route path="*" element={<Home/>}/>
     </Routes>
    </>
  );
}

export default App;
