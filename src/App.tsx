import React, { useState } from 'react'
import TodoList from './todoList/todoList';


const initialTodos: Array<Todo> = [
    { id: 1, text: "Trăm năm trong cõi người ta", complete: true },
    { id: 2, text: "Chữ tài chữ mệnh khéo là ghét nhau", complete: false },
    { id: 3, text: "Trải qua một cuộc bể dâu", complete: false },
    { id: 4, text: "Những điều trông thấy mà đau đớn lòng", complete: false },
    { id: 5, text: "Lạ gì bỉ sắc tư phong", complete: false },
    { id: 6, text: "Trời xanh quen thói má hồng đánh ghen", complete: false },
    { id: 7, text: "Cảo thơm lần giở trước đèn", complete: false }
];



const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);
    const temptodos = [...initialTodos]
    const [editing, setEditing] = useState<any>({ id: 0, text: "", complete: false });
    const [changeStatus, setChangeStatus] = useState<any>(false);

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
        setChangeStatus(changeStatus);
    };

    const editTodo: EditTodo = todo => {
        setEditing(todo);
        setChangeStatus(!changeStatus);
    };

    const pushedit: PushEdit = (id, text, complete, status) => {
        let newTodo = [...todos];
        newTodo.forEach((value, key) => {
            if (value.id === id) {
                value.text = text
                value.complete = complete
            }
        })
        setTodos(newTodo);
        setChangeStatus(!changeStatus);
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
    console.log(changeStatus);
    return (
        <TodoList todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            onSearch={onSearch}
            addTodo={addTodo}
            editing={editing}
            pushedit={pushedit}
            changeStatus={changeStatus}
        />
    );
}
export default App;
