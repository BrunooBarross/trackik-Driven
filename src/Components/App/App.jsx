import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../Contexts/UserContext"

import GlobalCss from "../GlobalCss/GlobalCss";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
import Cadastro from "../Cadastro/Cadastro";
import Habitos from "../Habitos/Habitos";
import Hoje from "../Hoje/Hoje";
import Historico from "../Historico/Historico"


const App = () =>{
    const [token, setToken] = useState(null)
    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <GlobalCss/>
                <Routes>
                    <Route path="/" element={<PaginaLogin />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/hoje" element={<Hoje />}/>
                    <Route path="/habitos" element={<Habitos />}/>
                    <Route path="/historico" element={<Historico />}/>
                </Routes>
            </BrowserRouter>  
        </UserContext.Provider>            
    );
}

export default App;