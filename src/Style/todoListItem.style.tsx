import styled from 'styled-components';
export const List = styled.li`
    display:flex;
    padding-top:10px;
   
    border-bottom: 1px solid #333;
    list-style-type:none;
`;
export const Button = styled.button`
    height: 30px;
    width:70px;
    margin: 0 5px 5px;

    border:none;
    border-radius:5px;

    color: white;
    background: #C32C0E;
    &:hover{
        opacity:0.7
    }
    cursor: pointer;
`;
export const PrimaryButton = styled(Button)`
    background: #09BEC8;`
    ;
export const ButtonForm = styled.div`
     display:flex;
     justify-content: flex-end;
`;
export const Text = styled.div`
    width:25em;
`;
export const CheckBox = styled.input`
    width:15px;
    height:15px;

    cursor: pointer;
    &:hover{
        color:#2196F3;
        opacity:0.7
    }
`;