import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";
import Protected from "./Protected";

const Index = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    return (
        <BrowserRouter>
            <Navbar/>
            {isLoggedIn ? <button onClick={() => {
                setIsLoggedIn(!isLoggedIn)
            }}> Log out</button> : <button onClick={() => {
                setIsLoggedIn(!isLoggedIn)
            }}>Log In</button>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-blog" element={<Protected isLoggedIn={isLoggedIn}>
                    <AddBlog/>
                </Protected>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<Error/>}/>
            
            </Routes>
        </BrowserRouter>
    
    );
};

export default Index;