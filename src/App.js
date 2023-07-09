import  React, { useState }  from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  
  const [todoList, setTodoList]= useState(JSON.parse(localStorage.getItem('savedTodoList')))

  React.useEffect(function() {localStorage.setItem('savedTodoList', JSON.stringify(todoList));},[todoList])
    
  
  
  return([todoList, setTodoList]


)}

function App() {
  
  // const [todoList, setTodoList]= useState(JSON.parse(localStorage.getItem('savedTodoList')))

  const [todoList, setTodoList]= useSemiPersistentState(JSON.parse(localStorage.getItem('savedTodoList')))

  // React.useEffect(function() {localStorage.setItem('savedTodoList', JSON.stringify(todoList));},[todoList])
    

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