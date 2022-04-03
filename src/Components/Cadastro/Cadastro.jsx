import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import ContainerLogin from '../Styleds-Globais/ContainerLogin';
import Logo from '../Styleds-Globais/Logo';
import Inputs from '../Styleds-Globais/Inputs'


const Cadastro = () => {
    const navigate = useNavigate();
    const [dadosCadastro, setDadosCadastro] = useState({email:"", senha:"", nome:"", imagem:""});
    const [alerta, setAlerta] = useState(null);
    const [load, setLoad] = useState(false);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
    function cadastrarUsuario(event) {
        event.preventDefault();
        setLoad(true);
        const requisicaoPost = axios.post(URL,{
            email: dadosCadastro.email,
            name: dadosCadastro.nome,
            image: dadosCadastro.imagem,
            password: dadosCadastro.senha
        });requisicaoPost.then(resposta => {
            setLoad(false);
            navigate('/')
        }); requisicaoPost.catch(err => { 
            console.log('Se vira ai programador')
            setLoad(false);
            setAlerta('Email já cadastrado');
        });
    }

    return(
        <ContainerLogin>
            <Logo src="/Assets/img/logo.svg" alt="logo" />
            <Inputs onSubmit={cadastrarUsuario}>
                <input type="email" name="email" placeholder='email' 
                    onChange={e => setDadosCadastro({...dadosCadastro,email: e.target.value})}
                    disabled={load ? true : false} required/>
                <Label>{alerta}</Label>
                <input type="password" name="password" placeholder='senha'
                    onChange={e => setDadosCadastro({...dadosCadastro,senha: e.target.value})}
                    disabled={load ? true : false} required/>
                <input type="name" name="name" placeholder='nome'
                    onChange={e => setDadosCadastro({...dadosCadastro,nome: e.target.value})}
                    disabled={load ? true : false} required/>
                <input type="url" name="url" pattern="https://.*" placeholder='foto'
                    onChange={e => setDadosCadastro({...dadosCadastro,imagem: e.target.value})}
                    disabled={load ? true : false} required/>
                <Botao type="submit">{load ? <ThreeDots color="#fff" height={13}/> : "Cadastrar"}</Botao>
            </Inputs>
            <Div>
                <Link to= {`/`}>
                    <span>Já tem uma conta? Faça login!</span>
                </Link>  
            </Div>  
        </ContainerLogin>
    );
}

const Botao = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77%;
    height: 45px;
    background: #52B6FF;
    border: none;
    margin-top: 6px;

    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;  
    cursor: pointer;  
`
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

export default Cadastro;