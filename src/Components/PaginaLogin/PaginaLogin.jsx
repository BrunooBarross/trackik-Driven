import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Container from '../Styleds-Globais/Container';
import Logo from '../Styleds-Globais/Logo';
import Inputs from '../Styleds-Globais/Inputs'

const PaginaLogin = () =>{
    return(
        <Container>
            <Logo src="/Assets/img/logo.png" alt="logo" />
            <Inputs>   
                <input type="email" name="email" placeholder='email' required/>
                <input type="password" name="password" placeholder='senha'required/>       
            </Inputs>
            <Botao>Entrar</Botao>
            <Div>
                <Link to= {`/cadastro`}>
                    <span>Não tem uma conta? Cadastre-se!</span>
                </Link>  
            </Div>  
        </Container>
    );
}
const Botao = styled.button`
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

export default PaginaLogin;