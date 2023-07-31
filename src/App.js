import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Layout from "./components/Layout";
import FicheLogement from "./pages/FicheLogement";



const App = () => {
    return (
       <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path ="/" element={<Home />}/>
                    <Route path ="/about" element={<About/>}/>
                    <Route path ={`/fiche-logement/:id`} element={<FicheLogement/>}/>
                    <Route path ="*" element={<Error404/>}/>
                </Routes>
            </Layout>
       </BrowserRouter>
    );   
};

export default App;




