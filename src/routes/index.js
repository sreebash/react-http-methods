import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-blog" element={<AddBlog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<Error/>}/>
                
            </Routes>
        </BrowserRouter>
    
    );
};

export default Index;