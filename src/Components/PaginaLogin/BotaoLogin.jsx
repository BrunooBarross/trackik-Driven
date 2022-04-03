import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

const BotaoLogin = ({loadBotao}) =>{
    if(!loadBotao){
        return (
            <Botao type="submit">Entrar</Botao>
        );
    }  
        return (
            <Botao className='opaco' loadBotao={loadBotao}><ThreeDots color="#fff" height={13}/></Botao>
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
    opacity: ${props => props.loadBotao ? 0.7 : 1};
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;  
    cursor: pointer;
`
export default BotaoLogin;