import styled from 'styled-components';


export const ConfirmationButtons = styled.div`
	display: flex;
    justify-content: center;
    margin-top:160px;
`;

export const Message = styled.div`
	font-size: 0.9rem;
	margin-bottom: 10px;
	text-align: center;
`;

export const Button = styled.button`
    height: 30px;
    width:100px;
    margin: 0 10px 5px;

    border:none;
    border-radius:5px;

    color: white;
    background: green;
    &:hover{
        opacity:0.7
    }cursor: pointer;
`;

export const NoButton = styled(Button)`
    margin-left: 10px;
    background: #C32C0E;
`;
export const Input = styled.input`
    width : 95%;
    margin: 10px auto 10px;
    padding-top: 10px;
    border: 1px solid #333333;

`;
