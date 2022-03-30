import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Container from '../Styleds-Globais/Container';
import Logo from '../Styleds-Globais/Logo';
import Inputs from '../Styleds-Globais/Inputs'
import BotaoLogin from '../Styleds-Globais/BotaoLogin';

const PaginaLogin = () =>{
    const navigate = useNavigate();
    const [loadBotao, setLoadBotao] = useState(false);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const [dadosLogin, setDadosLogin] = useState({email:"", senha:""})
    const [alerta, setAlerta] = useState(null)
    
    function fazerLogin(event) {
        setLoadBotao(true);
        event.preventDefault();
        const requisicaoPost = axios.post(URL,{
            email: dadosLogin.email,
            password: dadosLogin.senha
        });requisicaoPost.then(resposta => {
            navigate('/hoje')
        }); requisicaoPost.catch(err => { 
            console.log("Olha isso aqui programador")
            setAlerta('Email ou senha incorreto(s)');
            setLoadBotao(false);
        });
    }

    return(
        <Container>
            <Logo src="/Assets/img/logo.png" alt="logo" />
            <Inputs onSubmit={fazerLogin}>
                <Label>{alerta}</Label>   
                <input type="email" name="email" placeholder='email' 
                    onChange={e => setDadosLogin({...dadosLogin,email: e.target.value})}required/>
                <input type="password" name="password" placeholder='senha'
                    onChange={e => setDadosLogin({...dadosLogin,senha: e.target.value})} required/> 
                <BotaoLogin loadBotao={loadBotao}/>      
            </Inputs>
            <Div>
                <Link to= {`/cadastro`}>
                    <span>Não tem uma conta? Cadastre-se!</span>
                </Link>  
            </Div>  
        </Container>
    );
}
const Div = styled.div`
    margin-top: 25px;
    
    span{
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }
`
const Label = styled.label`
    font-size: 12px;
    color: red;  
    padding-top: 5px;
`

export default PaginaLogin;