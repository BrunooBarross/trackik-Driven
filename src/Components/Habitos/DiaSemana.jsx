import styled from 'styled-components';
import { useState } from 'react';

const DiaSemana = ({ idDia, name, idSemana, setIdSemana}) =>{
    const [selecionado, setSelecionado] = useState(false);
    
    function selecionarDia(idDia){
        if(selecionado){
            const retiraId = idSemana.filter(item => item !== idDia);
            setIdSemana(retiraId);
            return setSelecionado(false);
        }
        const novosIds = [...idSemana, idDia];
        setIdSemana(novosIds);
        return setSelecionado(true);
    }

    return(
        <Div selecionado={selecionado} onClick={() => selecionarDia(idDia)}>
            {name}
        </Div>
    );
}

function corSelecionado(selecionado){
    if(selecionado){
        return "#CFCFCF"
    }
    return "#FFFFFF"
}

const Div = styled.div`
    background: ${(props) => corSelecionado(props.selecionado)};
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
export default DiaSemana;