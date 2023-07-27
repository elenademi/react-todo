import  React, { useState }  from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {

  
  const [todoList, setTodoList]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')||[]) } });
      }, 2000);
    });

    getData.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false); 
    });
  }, []);

   React.useEffect(function() { 

      if(!isLoading) { 

    localStorage.setItem('savedTodoList', JSON.stringify(todoList));}},[todoList])

   
  
    

  function addTodo (newTodo) {
    setTodoList([...todoList, newTodo])
  }


  function removeTodo(id) {
    const newTodoList = todoList.filter((item) => item.id !==id)
      setTodoList(newTodoList)
      
  }

  
  return (
     <>
     
     <h1 style={{ textAlign: 'center' }}>Todo List</h1>

     <AddTodoForm onAddTodo={addTodo}/>

     {isLoading ? (
       <p>Loading ...</p>

          ) : (
     
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)}

     
     
     
          
      </>
  );

}

export default App