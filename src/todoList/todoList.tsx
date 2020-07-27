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
    editing: Editing;
    pushedit: PushEdit;
    changeStatus: ChangeStatus

}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo, onSearch, addTodo, editing, pushedit, changeStatus }) => {
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
    const hienthiform = () => {
        if (changeStatus) {
            return <ModalTodoForm
                isShown={isShown}
                hide={toggle}
                headerText="Sửa "
                modalContent={
                    <ConfirmationModal
                        addTodo={addTodo}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        value={""}
                        editing={editing}
                        changeStatus={changeStatus}
                        pushedit={pushedit}
                    />
                }
            />
        } else {
            return <ModalTodoForm
                isShown={isShown}
                hide={toggle}
                headerText="Thêm mới"
                modalContent={
                    <ConfirmationModal
                        addTodo={addTodo}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        value={""}
                        editing={editing}
                        changeStatus={changeStatus}
                        pushedit={pushedit}
                    />

                }
            />;
        }
    }

    return (
        <React.Fragment>
            <List>
                <Header>
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
                            editTodo={(todo) => editTodo(todo)}
                            changeStatus={changeStatus}
                            toggle={toggle}
                        />
                    })}
                    {hienthiform()}
                </Main>
            </List>

        </React.Fragment>
    );
}

export default TodoList;
