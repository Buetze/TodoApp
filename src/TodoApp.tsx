import React from 'react';

import { useLocation } from 'react-router-dom'

import { useTodoInitDataHook } from './model/todo_data_init_hook'


import AppLayout from './component/application/AppLayout'
import TodoHeader from './component/todo/TodoHeader'
import TodoBodyPage from './component/todo/TodoBodyPage'
import PageNotFoundPage from './component/notfound/PageNotFoundPage'
import AboutPage from './component/about/AboutPage'

function TodoApp() {


  useTodoInitDataHook();

  let body = <PageNotFoundPage />

  switch (useLocation().pathname) {
    case '/':
    case '/todo':
      body = <TodoBodyPage />
      break;
    case '/about':
      body = <AboutPage />
      break;
  }

  return (
    <React.Fragment>
      <AppLayout
        header={<TodoHeader />}
        body={body}
      />
    </React.Fragment>
  );
}

export default TodoApp;
