import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
    const [newTodo, setNewTodo]= React.useState('');
  
  return (
     <div>
     
     <h1 style={{ textAlign: 'center' }}>Todo List</h1>
     <AddTodoForm onAddTodo={setNewTodo}/>
     <p> <strong>{newTodo}</strong></p>
     < TodoList/>
     
     
      </div>
  );

}

export default App;
