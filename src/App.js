import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Layout from "./layout/Layout";
import LocationPage from "./pages/LocationPage";



const App = () => {
    return (
       <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="/about" element={<About/>}/>
                    <Route path ={`/location-page/:id`} element={<LocationPage/>}/>
                    <Route path ="*" element={<Error404/>}/>
                </Routes>
            </Layout>
       </BrowserRouter>
    );   
};

export default App;




