import  React, { useState }  from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  // const [newTodo, setNewTodo]= React.useState('')
  const [todoList, setTodoList]= useState([])

  function addTodo (newTodo) {
    setTodoList([...todoList, newTodo])
  }



  
  return (
     <>
     
     <h1 style={{ textAlign: 'center' }}>Todo List</h1>

     <AddTodoForm onAddTodo={addTodo}/>
     <TodoList todoList={todoList}/>

     
     {/* <p> <strong>{newTodo}</strong></p> */}
     
          
      </>
  );

}

export default App;