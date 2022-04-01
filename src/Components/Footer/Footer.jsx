import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    const alternarTelas = (tela) =>{
        if(tela === 1){
            return navigate("/habitos")
        }else if(tela === 2){
            return navigate("/hoje")
        }
        navigate("/historico")
    }
    
    return(
        <Div>
            <span onClick={()=>alternarTelas(1)}>Hábitos</span>
            <div onClick={()=>alternarTelas(2)}><h3>Hoje</h3></div>
            <span onClick={()=>alternarTelas(3)}>Histórico</span>
        </Div>
    );
}
export default Footer;

const Div = styled.footer`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 390px;
    height: 70px;
    bottom: 0;
    background: #FFFFFF;

    span{
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
        cursor: pointer;
    }

    div{
        position: absolute;
        bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 50%;
        color: #FFFFFF;
        cursor: pointer;
    }
`