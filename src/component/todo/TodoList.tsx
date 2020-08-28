import React from 'react'
import TodoListItem from './TodoListItem'
import { List } from '@material-ui/core'

import todos from '../../data/TodoData'



const TodoList: React.FC = () => {
    return (
        <List>
            {todos.map((element) => (
                <TodoListItem key={element.id} todo={element}></TodoListItem>
            ))}
        </List>
    )
}



export default TodoList
