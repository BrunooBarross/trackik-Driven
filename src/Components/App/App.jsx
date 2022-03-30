import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCss from "../GlobalCss/GlobalCss";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
import Cadastro from "../Cadastro/Cadastro";
import Habitos from "../Habitos/Habitos";
import Hoje from "../Hoje/Hoje";
import Historico from "../Historico/Historico"
//import { useState } from "react";


const App = () =>{
    return (
        <BrowserRouter>
            <GlobalCss/>
            <Routes>
                <Route path="/" element={<PaginaLogin />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/habitos" element={<Habitos />}/>
                <Route path="/hoje" element={<Hoje />}/>
                <Route path="/historico" element={<Historico />}/>
            </Routes>
        </BrowserRouter>        
    );
}

export default App;