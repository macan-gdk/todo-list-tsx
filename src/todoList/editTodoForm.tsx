import React, { useState } from 'react';
import styled from 'styled-components';

interface EditTodoListProps {
    editing: Editing;
    pushedit: PushEdit;
}

const Editt = styled.div`
    text-align: center;
`;

const Button = styled.button`
    height: 30px;
    width:100px;
    margin: 0 10px 5px;

    border:none;
    border-radius:5px;

    color: white;
    background: #09BEC8; 
    &:hover{
        opacity:0.7
    }
    cursor: pointer;
`;
const Input = styled.input`
    width:300px;
    height:20px;
    ::placeholder{
        color: white;
    }
`;
const EditTodoForm: React.FC<EditTodoListProps> = ({ editing, pushedit }) => {
    const [text, setText] = useState("");
    const save = () => {
        let id = editing.id;
        let complete = editing.complete;
        pushedit(id, text, complete);
        setText("");
    }


    return (
        <Editt key={editing.id}>
            <Input
                defaultValue={editing.text}
                type="text"
                onChange={(e) => setText(e.target.value)} />
            <Button onClick={save} type="submit">Lưu</Button>
        </Editt>
    );
}

export default EditTodoForm;
