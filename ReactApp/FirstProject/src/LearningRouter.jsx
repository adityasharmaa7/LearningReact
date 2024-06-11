import React from "react";
import { Routes,Route } from "react-router-dom";
import Photos from "./Photos";
import Albums from "./Albums";


const Home =()=>{
    return <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/photos/:id" element={<Photos />}/>
    </Routes>
}
export default Home;