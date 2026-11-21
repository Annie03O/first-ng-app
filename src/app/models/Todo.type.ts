export type TodoContent = {
    id: number;
    userId: number;
    completed: boolean;
    todo: string;
}

export type Todo = {
    todos: TodoContent[],
    total: number,
    skip: number,
    limit: number
}