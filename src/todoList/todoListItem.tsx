import React from 'react';
import { List, CheckBox, Text, ButtonForm, PrimaryButton, Button } from '../Style/todoListItem.style';

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
    changeStatus: ChangeStatus;
    toggle: () => void;

}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo, changeStatus, toggle }) => {

    const edit = () => {
        editTodo(todo);
        toggle()
    }
    return (
        <List>
            <CheckBox type="checkbox"
                onChange={() => toggleComplete(todo)}
                checked={todo.complete}
            />
            <Text>
                {todo.text}
            </Text>
            <ButtonForm>
                <PrimaryButton onClick={() => edit()} >Sửa</PrimaryButton>
                <Button onClick={() => deleteTodo(todo)} >Xóa</Button>
            </ButtonForm>
        </List>
    );
}

export default TodoListItem;

