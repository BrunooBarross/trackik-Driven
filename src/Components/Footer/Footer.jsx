import styled from 'styled-components';

const Footer = () => {
    return(
        <Div>
            <span>Hábitos</span>
            <div><h3>Hoje</h3></div>
            <span>Histórico</span>
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
    }
`