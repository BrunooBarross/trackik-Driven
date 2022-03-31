import styled from 'styled-components';
import axios from 'axios';

const Habitos = ({ id, name, day, diaSemana, listarHabitos, setListarHabitos, config }) => {

    function deletarHabito(id) {

        const requisicaoDelete = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        requisicaoDelete.then(resposta => {
            const novoArray = listarHabitos.filter(item => item.id !== id);
            setListarHabitos(novoArray);
        });
        requisicaoDelete.catch(err => {
            alert('deu ruim')
        });
    }

    return (
        <Div>
            <DivFilho>
                <img onClick={() => deletarHabito(id)} src="/Assets/img/lixeira.svg" alt="" />
                <span>{name}</span>
                <div>
                    {diaSemana.map((dia, key) =>
                        <Dias key={key} dia={dia.idDia} day={day}>{dia.name}</Dias>
                    )}
                </div>
            </DivFilho>
        </Div>
    );
}

export default Habitos;

function corSelecionado(dia, day) {
    if (day.includes(dia)) {
        return "#CFCFCF"
    }
    return "#FFF"
}

const Div = styled.div`
    position: relative;
    width: 90%;
    height: 91px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
`

const DivFilho = styled.div`
    width: 89%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    background: #FFFFFF;
    border-radius: 5px;

    img{
        position: absolute;
        width: 13px;
        height: 15px;
        top: 11px;
        right: 10px;
        cursor: pointer;
    }

    span{     
        display: flex;
        align-items: center ;
        width: 100%;
        height: 25px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    div{
        display:  flex;

    }
`

const Dias = styled.div`
    background: ${(props) => corSelecionado(props.dia, props.day)};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    cursor: pointer;

    :nth-child(n+2){
        margin-left: 4px;
    }
    
`