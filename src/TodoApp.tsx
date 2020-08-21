import React from 'react';
import AppLayout from './component/application/AppLayout'
import TodoHeader from './component/todo/TodoHeader'
import TodoBody from './component/todo/TodoBody'

function TodoApp() {
  return (
    <React.Fragment>
      <AppLayout 
        header={<TodoHeader />}
        body={<TodoBody />}
      />
    </React.Fragment>
  );
}

export default TodoApp;
