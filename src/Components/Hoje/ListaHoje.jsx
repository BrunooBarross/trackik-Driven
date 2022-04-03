import styled from 'styled-components';
import axios from 'axios';

const ListaHoje = ({id, name, done, sequencia, recorde,token,monitoraCheck,setMonitoraCheck}) => {

    function marcarCheck(id, done){
        const config = { headers: { Authorization: `Bearer ${token.token}`}}
        if(done){
            const requisicaoPost = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
            requisicaoPost.then(resposta => {
                setMonitoraCheck(!monitoraCheck);
            });
            requisicaoPost.catch(err => {
                console.log('erro aqui programador')
            });
        }
        if(!done){
            const requisicaoPost = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);
            requisicaoPost.then(resposta => {
                setMonitoraCheck(!monitoraCheck);
            });
            requisicaoPost.catch(err => {
                console.log('erro aqui programador')
            });
        }
       
    }

    return(
        <Habito>
            <Icone done={done} onClick={() => marcarCheck(id, done)}><ion-icon name="checkbox"></ion-icon></Icone>
            <h2>{name}</h2>
            <Span>Sequência atual: 
                <Sequencia sequencia={sequencia}> {sequencia}
                    {sequencia > 1 || sequencia === 0 ? " dias" : " dia"}</Sequencia> Seu recorde:
                <Recorde sequencia={sequencia} recorde={recorde}> {recorde}
                    {recorde > 1 || recorde === 0 ? " dias" : " dia"}</Recorde>
            </Span>
        </Habito>
    );
}
export default ListaHoje;

const Icone = styled.div`
    position: absolute;
    right: 13px;
    top: 13px;
    font-size: 69px;
    color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    cursor: pointer;

`
const Habito = styled.div`
    width: 100%;
    height: 94px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    background: #FFFFFF;
    border-radius: 5px;
    
    h2{
        margin-left: 15px;
        margin-top: 13px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

   
`
const Span = styled.span`
    margin-top: 7px;
    margin-left: 15px;
    width: 45%;
    height: 32px;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666

`
const Sequencia = styled.label`
    color: ${props => props.sequencia > 0 ? "#8FC549" : "#666666"};

`
const Recorde = styled.label`
    color: ${props => props.sequencia = props.recorde ? "#8FC549" : "#666666"};

`

