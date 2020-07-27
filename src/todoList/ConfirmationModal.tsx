import React, { useState } from 'react';
import { ConfirmationButtons, Button, NoButton, Input } from '../Style/ConfirmationModal.style';

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    value: string;
    addTodo: AddTodo;
    editing: Editing;
    pushedit: PushEdit;
    changeStatus: ChangeStatus;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onConfirm, onCancel, addTodo, editing, pushedit, changeStatus }) => {
    const [newTodo, setNewtodo] = useState("");
    const status: boolean = false;
    const handleSubmit = () => {
        if (changeStatus) {
            let id = editing.id;
            let complete = editing.complete;
            pushedit(id, newTodo, complete, status);
            onConfirm()
        } else {
            let id: number = Math.trunc(Math.random() * 10000);
            addTodo(newTodo, id);
            setNewtodo("")
            onConfirm()
        }
    }
    return (
        <React.Fragment>
            <Input type="text" defaultValue={changeStatus ? editing.text : newTodo}
                placeholder="Nhập nội dung cần thêm..."
                onChange={e => setNewtodo(e.target.value)} />
            <ConfirmationButtons>
                <Button onClick={handleSubmit}>{changeStatus ? "Sửa" : "Thêm mới"}</Button>
                <NoButton onClick={onCancel}>Hủy</NoButton>
            </ConfirmationButtons>
        </React.Fragment>
    );
};