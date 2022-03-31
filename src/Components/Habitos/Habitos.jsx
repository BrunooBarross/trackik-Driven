import styled from 'styled-components';

const Habitos = ({id,name,days}) =>{
    return (
        <Div>
            <DivFilho>
                <img src="/Assets/img/lixeira.svg" alt="" />
                <span>{name}</span>
            </DivFilho>
        </Div>
    );
}

export default Habitos;

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
`