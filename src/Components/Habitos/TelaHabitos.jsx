import { useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from "../Contexts/UserContext"
import { useContext } from 'react';

import Header from "../Header/Header";
import Container from '../Styleds-Globais/Container';
import Footer from "../Footer/Footer";
import DiaSemana from './DiaSemana';
import Habitos from './Habitos';

import styled from 'styled-components';

const TelaHabitos = () => {   

    const { token } = useContext(UserContext);
    const config = { headers: { Authorization: `Bearer ${token.token}`}}
    useEffect(() => {
        const requisicaoGet = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config);
        requisicaoGet.then(resposta => {
            setListarHabitos(resposta.data)
        });
        requisicaoGet.catch(err => { 
            console.log('olha isso aqui programador') 
        });
    }, [token]);

    function criarHabito(event){
        event.preventDefault();
        if(idSemana.length === 0){
            return alert('Selecione pelo menos um dia da semana')
        }
        const requisicaoPost = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
            name: nomeHabito,
            days: idSemana
        },config);
        requisicaoPost.then(resposta => {
            const {data} = resposta;
            setListarHabitos([data,...listarHabitos]);
            zerarInput();
        });
        requisicaoPost.catch(err => { 
            console.log('Olha isso aqui programador')
        }); 
    }

    const diaSemana = [
        {idDia:7, name:"D"},
        {idDia:1, name:"S"},
        {idDia:2, name:"T"},
        {idDia:3, name:"Q"},
        {idDia:4, name:"Q"},
        {idDia:5, name:"S"},
        {idDia:6, name:"S"}]
    
    const[idSemana, setIdSemana] = useState([]);
    const [mostrarInput, setMostrarInput] = useState(false);
    const [listarHabitos, setListarHabitos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
   
    function zerarInput(){
        setNomeHabito("");
        setIdSemana([]);
        setMostrarInput(false); 
    }

    return (
        <Container>
            <Header />
            <Add onClick={()=>setMostrarInput(true)}>
                <h1>Meus hábitos</h1>
                <div>+</div>
            </Add>
            { mostrarInput ? 
                <Div> 
                    <DivForm onSubmit={criarHabito}>
                        <input type="text" name="text" placeholder="nome do habito" 
                            onChange={e => setNomeHabito(e.target.value)} required/>
                            <Dias>
                                {diaSemana.map((dia, key) =>
                                    <DiaSemana
                                        key={key}
                                        idDia={dia.idDia}
                                        name={dia.name}
                                        idSemana={idSemana}
                                        setIdSemana={setIdSemana}
                                    />)}
                            </Dias>
                        <Botoes>
                            <button onClick={()=>zerarInput()}>Cancelar</button>
                            <button type='submit'>Salvar</button>
                        </Botoes>
                    </DivForm>   
                </Div>  : <></>    
            }
            { listarHabitos.length ===0 ?  
                <Aviso>
                    <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                </Aviso> :
                <>
                    {listarHabitos.map((habitos, key) =>
                        <Habitos 
                            key={key}
                            id={habitos.id}
                            name={habitos.name}
                            day={habitos.days}
                            diaSemana={diaSemana}
                            listarHabitos={listarHabitos}
                            setListarHabitos={setListarHabitos}
                            config ={config}
                        />
                    )}
                </>
            }
            <Footer />
        </Container>      
    );
}
export default TelaHabitos;

const Add = styled.div`
    display: flex;
    width: 100%;
    margin-top: 22px;
    justify-content: space-between;

    h1{
        font-size: 22.976px;
        line-height: 29px;
        margin-left: 17px;
        color: #126BA5;
    }

    div{
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin-right: 18px;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;

        font-weight: 400;
        font-size: 26.976px;
        line-height: 30px;
        color: #FFFFFF;
    }
`

const Div = styled.div`
    width: 90%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    
`

const DivForm = styled.form`
    width: 89%;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    background: #FFFFFF;
    border-radius: 5px;
    
    input{
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }   

    input::placeholder{
        color: #DBDBDB;
        
    }
`
const Dias = styled.div`
    display: flex;
`
const Botoes = styled.div`
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    button{
        cursor: pointer;
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        border: none;
        font-size: 15.976px;
        line-height: 20px;
    }
    button:nth-child(1){
        background: #FFF;
        margin-right: 23px;
        color: #52B6FF;
    }
    button:nth-child(2){
        background: #52B6FF;
        color: #FFFFFF;
    }
    
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