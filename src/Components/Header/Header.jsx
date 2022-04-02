import UserContext from "../Contexts/UserContext"
import { useContext } from 'react';
import styled from 'styled-components';

const Header = () =>{
    const { token } = useContext(UserContext);

    if(token !== null){
        return(
            <DivHeader>
                <Logo src="/Assets/img/trackit.svg" alt="logo"/>
                <Perfil src={token.image} alt="" />
            </DivHeader>
        );
    }

}
export default Header;

const DivHeader = styled.div`
    position: sticky;
    top: 0; 
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
`
const Logo = styled.img`
    width: 97px;
    height: 49px;
    margin-left: 18px;
`
const Perfil = styled.img`
    width: 51px;
    height: 51px;
    margin-right: 18px;
    background-color: #fff;
    border-radius: 98.5px;

`