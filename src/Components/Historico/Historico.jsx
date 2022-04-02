import Header from "../Header/Header";
import Container from '../Styleds-Globais/Container';
import Footer from "../Footer/Footer";
import Calendar from 'react-calendar';
import  'react-calendar/dist/Calendar.css' ;
import { useState } from 'react';
import styled from 'styled-components';

const Historico = () =>{
    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <Header />
            <Div>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Div>
            <Calendario>
                <div><Calendar onChange={onChange} value={value} /></div>
            </Calendario>
            <Footer />
        </Container>  
        
    );
}
export default Historico;

const Div = styled.div`
    width: 90%;
    h1{
        margin-top: 28px;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        margin-top: 17px;
        text-align: justify;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

const Calendario = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 11px;

    div{
        width: 100%;
    }
    
`