import React from 'react'
import { Todo } from '../../model/Todo';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { useStoreActions } from '../../store/StoreModel'

interface ITodoListItem {
    todo: Todo
}


const TodoListItem: React.FC<ITodoListItem> = ({ todo }) => {
    const deleteTodo = useStoreActions(actions => actions.todoModel.deleteTodo)
    const toggleTodo = useStoreActions(actions => actions.todoModel.toggleTodo)
    return (
        <ListItem dense key={todo.id}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onClick={() => toggleTodo(todo)}
                />

            </ListItemIcon>
            <ListItemText
                primary={todo.title}
                onClick={() => console.log('textclick')}
            />
            <IconButton edge="end" aria-label="comments"
                onClick={() => deleteTodo(todo)}
            >
                <Delete />
            </IconButton>
        </ListItem>
    )
}

export default TodoListItem;
