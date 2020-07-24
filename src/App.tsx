import React, { useState } from 'react'
import TodoList from './todoList/todoList';
import EditTodoForm from './todoList/editTodoForm';
import Menu from './Menu/Menu';
import styled from 'styled-components';

const initialTodos: Array<Todo> = [
    { id: 1, text: "Trăm năm trong cõi người ta", complete: true },
    { id: 2, text: "Chữ tài chữ mệnh khéo là ghét nhau", complete: false },
    { id: 3, text: "Trải qua một cuộc bể dâu", complete: false },
    { id: 4, text: "Những điều trông thấy mà đau đớn lòng", complete: false },
    { id: 5, text: "Lạ gì bỉ sắc tư phong", complete: false },
    { id: 6, text: "Trời xanh quen thói má hồng đánh ghen", complete: false },
    { id: 7, text: "Cảo thơm lần giở trước đèn", complete: false }
];

const FormTodo = styled.div`
    display: flex;
    border: 1px solid #333333;
    width: 800px;
    justify-content:space-between;
    margin: 0 auto;
`;

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);
    const temptodos = [...initialTodos]

    const [editing, setEditing] = useState<any>({ id: 0, text: "", complete: false });
    const toggleComplete: ToggleComplete = selectedTodo => {
        const updatedTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const addTodo: AddTodo = (newTodo, id) => {
        newTodo.trim() !== "" &&
            setTodos([...todos, { id: id, text: newTodo, complete: false }])
    };

    const editTodo: EditTodo = todo => {
        setEditing(todo);
    };

    const pushedit: PushEdit = (id, text, complete) => {
        let newTodo = [...todos];
        newTodo.forEach((value, key) => {
            if (value.id === id) {
                value.text = text
                value.complete = complete
            }
        })
        setTodos(newTodo);
    };

    const deleteTodo: DeleteTodo = selectedTodo => {
        const index = todos.findIndex(x => x.id === selectedTodo.id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const onSearch: Search = (search) => {
        console.log(search);
        if (search === "") {
            setTodos(temptodos);
        } else {
            const newTodos = todos.filter(todo =>
                todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
            setTodos(newTodos);
        }
    };
    return (
        <div>
            <EditTodoForm editing={editing}
                pushedit={pushedit}
            />
            <FormTodo>
                <Menu />
                <TodoList todos={todos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    onSearch={onSearch}
                    addTodo={addTodo}
                />
            </FormTodo>

        </div>
    );
}
export default App;
