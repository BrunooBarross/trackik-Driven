import styled from 'styled-components';
const Loading = () =>{
    return(
        <Preloader>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Preloader>
    );
}
const Preloader = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: 100vh;
    
    span{
        display:block;
        bottom:0px;
        width: 9px;
        height: 5px;
        background:#9b59b6;
        position:absolute;
        animation: Preloader 1.5s  infinite ease-in-out;
    }
 
    span:nth-child(2){
        left:11px;
        animation-delay: .2s; 
    }
    span:nth-child(3){
        left:22px;
        animation-delay: .4s;
    }
    span:nth-child(4){
        left:33px;
        animation-delay: .6s;
    }
    span:nth-child(5){
        left:44px;
        animation-delay: .8s;
    }
    @keyframes Preloader{
    0% {height:5px;transform:translateY(0px);background:#9b59b6;}
    25% {height:30px;transform:translateY(15px);background:#3498db;}
    50% {height:5px;transform:translateY(0px);background:#9b59b6;}
    100% {height:5px;transform:translateY(0px);background:#9b59b6;}
    }
`
export default Loading;