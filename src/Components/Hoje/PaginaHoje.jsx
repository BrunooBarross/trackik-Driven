import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from "../Contexts/UserContext"
import { useContext } from 'react';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import { BallTriangle } from 'react-loader-spinner';

import Header from "../Header/Header";
import Container from '../Styleds-Globais/Container';
import Footer from "../Footer/Footer";
import styled from 'styled-components';
import ListaHoje from './ListaHoje';

const PaginaHoje = () =>{
    const[listarHoje, setListarHoje] = useState([])
    const[monitoraCheck, setMonitoraCheck] = useState(false)
    const[loadingPages, setLoadingPages] = useState(true)
    const { token, porcentagem, setPorcentagem } = useContext(UserContext);

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token.token}`}}
        const requisicaoGet = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
        requisicaoGet.then(resposta => {
           const {data} = resposta;
           const realizadosDia = data.filter(item => item.done === true);
           setPorcentagem((realizadosDia.length * 100) / data.length)
           setLoadingPages(false);
           setListarHoje(data);
        });
        requisicaoGet.catch(err => { 
            
        });
    }, [monitoraCheck,token]);

    return (
        <Container>
            <Header />
            { loadingPages ? <Load><BallTriangle  color="#126BA5" height={120} width={120}/></Load> :
                listarHoje.length === 0 && loadingPages === false ?  
                    <Aviso>
                        <span>Você não tem nenhum hábito para realizar hoje!</span>
                    </Aviso> 
                    :
                    <>
                        <Titulo porcentagem={porcentagem}>
                            <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
                            {porcentagem === 0 ? 
                                <h2>Nenhum hábito concluído ainda</h2>:
                                <h2>{Math.round(porcentagem)}% dos hábitos concluídos</h2>
                            }
                        </Titulo>
                        <HabitosHoje>
                            {listarHoje.map((item, key) =>
                                <ListaHoje
                                    key={key}
                                    id={item.id}
                                    name={item.name}
                                    done={item.done}
                                    sequencia={item.currentSequence}
                                    recorde={item.highestSequence}
                                    token={token}
                                    monitoraCheck={monitoraCheck}
                                    setMonitoraCheck={setMonitoraCheck}
                                />)}
                        </HabitosHoje>
                    </>     
            }
            <Footer />
        </Container>
        
    );
}
export default PaginaHoje;

const Titulo = styled.div`
    width: 89%;
    
    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    }

    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.porcentagem === 0 ? "#BABABA" : "#8FC549"};
    }
    
`
const HabitosHoje = styled.div`
   width: 89%;
   margin-bottom: 95px;
`
const Aviso = styled.div`
    width: 90%;
    margin-top: 29px;

    span{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`
const Load = styled.div`
   margin-top: 50%;
`