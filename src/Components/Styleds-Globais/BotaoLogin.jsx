import styled from 'styled-components';

const BotaoLogin = ({loadBotao}) =>{
    if(!loadBotao){
        return (
            <Botao type="submit">Entrar</Botao>
        );
    }  
        return (
            <BotaoLoad><div></div></BotaoLoad>
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
const BotaoLoad = styled.button`
    width: 77%;
    height: 45px;
    display: flex;
    justify-content: center;
    background: #52B6FF;
    border: none;
    margin-top: 6px;
    opacity: 0.10;

    div,
    div:before,
    div:after {
    border-radius: 50%;
    width: 2.4em;
    height: 2.4em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    }
    div {
    color: #ffffff;
    font-size: 5px;
    margin: 0px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    }
    div:before,
    div:after {
    content: '';
    position: absolute;
    top: 0;
    }
    div:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }
    div:after {
    left: 3.5em;
    }
    @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
        box-shadow: 0 2.5em 0 0;
    }
    }
    @keyframes load7 {
    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
        box-shadow: 0 2.5em 0 0;
    }
    }


`

export default BotaoLogin;