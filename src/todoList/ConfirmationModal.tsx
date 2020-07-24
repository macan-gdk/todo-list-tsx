import React, { useState } from 'react';
import { ConfirmationButtons, Message, Button, NoButton, Input } from '../Style/ConfirmationModal.style'
interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
    value: string;
    addTodo: AddTodo;
}
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel, message, addTodo }) => {
    const [newTodo, setNewtodo] = useState("");
    const handleSubmit = () => {
        let id: number = Math.trunc(Math.random() * 10000);
        addTodo(newTodo, id);
        setNewtodo("")
        onConfirm()

    }
    return (
        <React.Fragment>
            <Message>{message}</Message>
            <Input type="text" value={newTodo}
                placeholder="Nhập nội dung cần thêm..."
                onChange={e => setNewtodo(e.target.value)} />
            <ConfirmationButtons>
                <Button onClick={handleSubmit}>Thêm mới</Button>
                <NoButton onClick={onCancel}>Hủy</NoButton>
            </ConfirmationButtons>
        </React.Fragment>
    );
};