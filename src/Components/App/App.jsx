import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
//import { useState } from "react";


const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaLogin />}/>
            </Routes>
        </BrowserRouter>        
    );
}

export default App;