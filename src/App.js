import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Layout from "./components/Layout";


const App = () => {
    return (
       <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="/about" element={<About/>}/>
                    <Route path ="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
       </BrowserRouter>
    );   
};

export default App;