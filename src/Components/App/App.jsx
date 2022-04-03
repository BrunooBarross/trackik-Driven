import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Contexts/UserContext"

import GlobalCss from "../GlobalCss/GlobalCss";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
import Cadastro from "../Cadastro/Cadastro";
import TelaHabitos from "../Habitos/TelaHabitos";
import PaginaHoje from "../Hoje/PaginaHoje";
import Historico from "../Historico/Historico"


const App = () =>{
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("userToken")));
    let[porcentagem, setPorcentagem] = useState(0);
    return (
        <UserContext.Provider value={{token, setToken,porcentagem,setPorcentagem}}>
            <BrowserRouter>
                <GlobalCss/>
                <Routes>
                    <Route path="/" element={<PaginaLogin />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/hoje" element={<PaginaHoje />}/>
                    <Route path="/habitos" element={<TelaHabitos />}/>
                    <Route path="/historico" element={<Historico />}/>
                </Routes>
            </BrowserRouter>  
        </UserContext.Provider>            
    );
}

export default App;