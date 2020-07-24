import React from 'react';
import { List, CheckBox, Text, ButtonForm, PrimaryButton, Button } from '../Style/todoListItem.style';

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;

}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
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
                <PrimaryButton onClick={() => editTodo(todo)} >Sửa</PrimaryButton>
                <Button onClick={() => deleteTodo(todo)} >Xóa</Button>
            </ButtonForm>
        </List>
    );
}

export default TodoListItem;

