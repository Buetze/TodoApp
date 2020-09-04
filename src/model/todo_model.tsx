import { Action, action } from "easy-peasy"
import todoDataList from '../data/TodoData'

import { Todo } from "./Todo"


export interface TodoModel {
    todos: Todo[];

    initData: Action<TodoModel>

    deleteTodo: Action<TodoModel, Todo>

    toggleTodo: Action<TodoModel, Todo>

    addTodo: Action<TodoModel, Todo>

}

export const todoModel: TodoModel = {
    todos: [],

    initData: action((state) => {
        state.todos = todoDataList
    }),

    deleteTodo: action((state, todo) => {
        state.todos = state.todos.filter(e => e.id !== todo.id)
    }),

    toggleTodo: action((state, todo) => {
        // state.todos.find(e => e.id === todo.id)
        for (let i = 0; i < state.todos.length; ++i) {
            if (state.todos[i].id === todo.id) {
                todo.completed = !todo.completed;
                state.todos[i] = { ...todo }
            }
        }
    }),

    addTodo: action((state, todo) => {
        state.todos.push(todo);
    })
}