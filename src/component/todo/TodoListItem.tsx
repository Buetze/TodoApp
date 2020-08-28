import React from 'react'
import { Todo } from '../../model/Todo';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface ITodoListItem {
    todo: Todo
}


const TodoListItem: React.FC<ITodoListItem> = (props) => {
    return (
        <ListItem dense key={props.todo.id}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={props.todo.completed}
                    onClick={handleToggle}
                />

            </ListItemIcon>
            <ListItemText>{props.todo.title}</ListItemText>
            <IconButton edge="end" aria-label="comments">
                <Delete />
            </IconButton>
        </ListItem>
    )
}

export default TodoListItem;

// function Hello(props: any) {
//     return <p>hello {props.title}</p>
// }

const handleToggle = (value: any) => {
    return value.target.checked = !value.target.checked
}
