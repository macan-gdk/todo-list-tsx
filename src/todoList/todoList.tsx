import React, { useState, useRef } from 'react';
import TodoListItem from './todoListItem';
import { useModal } from '../useModal';
import ModalTodoForm from './ModalTodoForm';
import { ConfirmationModal } from './ConfirmationModal';
import { List, Header, Input, Button, Main } from '../Style/todoList.style';
interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
    onSearch: Search;
    addTodo: AddTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo, onSearch, addTodo }) => {
    const [searchTodo, setSearchTodo] = useState("");
    const { isShown, toggle } = useModal();
    const typingTimeoutRef = useRef(0);

    const onConfirm = () => toggle();
    const onCancel = () => toggle();
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTodo(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };
        typingTimeoutRef.current = setTimeout(() => {
            let search = value;
            onSearch(search)

        }, 400);
    }
    return (
        <React.Fragment>
            <ModalTodoForm
                isShown={isShown}
                hide={toggle}
                headerText="Thêm mới"
                modalContent={
                    <ConfirmationModal
                        addTodo={addTodo}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        message=""
                        value={""}
                    />
                }
            />
            <List>
                <Header>
                    <div></div>
                    <div>
                        <Input
                            placeholder="Nhập nội dung cần tìm..."
                            type="text" value={searchTodo}
                            onChange={handleSubmit} />
                    </div>
                    <Button onClick={toggle}>+</Button>
                </Header>
                <Main>
                    {todos.map(todo => {
                        return <TodoListItem
                            key={todo.id} todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={(todo) => editTodo(todo)} />
                    })}
                </Main>
            </List>
        </React.Fragment>
    );
}

export default TodoList;
