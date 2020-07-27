import styled from 'styled-components';

export const List = styled.ul`
    width: 600px;
    min-height:400px;
    margin: 0;
    padding : 0px;
    margin: 0 auto;
    border: 1px solid #333333;
    border-radius: 5px;
    
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px 0;
    border-bottom: 1px solid #333;

    background-color:#C32C0E;
`;
export const Main = styled.div`
    padding: 0 10px;
`;
export const Input = styled.input`
    background:#C32C0E;
    color: white;
    border: none;
    width:150%;
    height:25px;
    ::placeholder{
        color: white;
    }
`;
export const Button = styled.button`
     background:#C32C0E;
     width :25px;
     height: 25px;
     color: white;
    border: none;
    &:hover{
        color: #FFF;
    }
    cursor: pointer;
`;