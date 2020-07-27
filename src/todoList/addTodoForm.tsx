// import React, { useState } from 'react';
// import styled from 'styled-components';
// interface AddTodoFormProps {
//     addTodo: AddTodo;
// }F
// const Form = styled.div`
//     text-align: center;
// `;
// const Button = styled.button`
//     height: 30px;
//     width:100px;
//     margin: 0 10px 5px;

//     border:none;
//     border-radius:5px;

//     color: white;
//     background: green;
//     &:hover{
//         opacity:0.7
//     }cursor: pointer;
// `;
// const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
//     const [newTodo, setNewtodo] = useState("");

//     const handleSubmit = () => {
//         let id: number = Math.random();
//         addTodo(newTodo, id);
//         setNewtodo("")
//     }

//     return (
//         <Form>
//             <input
//                 placeholder="Nhập nội dung cần thêm..."
//                 type="text" value={newTodo}
//                 onChange={e => setNewtodo(e.target.value)} />
//             <Button type="submit" onClick={handleSubmit}>  Thêm mới</Button>
//         </Form>
//     );
// }

// export default AddTodoForm;
export { };