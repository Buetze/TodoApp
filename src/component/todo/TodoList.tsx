import React from 'react'
import TodoListItem from './TodoListItem'
import { List } from '@material-ui/core'

import { useStoreState } from '../../store/StoreModel'

const TodoList: React.FC = () => {
    return (
        <List>
            {useStoreState((state) => { return state.todoModel.todos }).map((element) => (
                <TodoListItem key={element.id} todo={element}></TodoListItem>
            ))}
        </List>
    )
}



export default TodoList
