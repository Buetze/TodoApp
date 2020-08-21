import React from 'react'
import { Link } from 'react-router-dom'

const TodoHeader : React.FC = () => {
    return (
        <>
            <h1>Header</h1>
            <ul>
                <li><Link to="/todo" >Todo</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </>
    )
}

export default TodoHeader