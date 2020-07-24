type Todo = {
    id: number;
    text: string;
    complete: boolean;
}
type ToggleComplete = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string, id: number) => void;
type DeleteTodo = (selected: Todo) => void;
type EditTodo = (todo: Todo) => void;
type Editing = { id: number, text: string, complete: boolean };
type PushEdit = (id: number, text: string, complete: boolean) => void;
type Search = (searchTodo: string) => void;