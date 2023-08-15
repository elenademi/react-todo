import  React, { useState }  from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';



function App() {

  
  const [todoList, setTodoList]=useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData ()  {

    
    const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_PERSONAL_ACCESS_TOKEN}`
          
      }
      
     };
     const url=`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
   
    

    try {
      
  
      const response = await fetch(
        
          url, options
      );
  console.log(response)
      if (!response.ok) {
        const message = `Error has occurred:
                               ${response.status}`;
        throw new Error(message);
      }
  
      const data = await response.json();
      const todos = data.records.map((todo) => {

        const newTodo =  {
            id: todo.id,
            title: todo.fields.Title,
            
        }
  
        return newTodo
  
    });
    setTodoList(todos);
    setIsLoading(false);

      console.log(data);
      return data;
      
      
       } 

       
       
       catch (error) {
      console.log(error.message);
      return null;
      
    }

    

    
      };

   

      
     React.useEffect(()  =>{ fetchData()},[])


     

    


  

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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <>
     
     <h1 style={{ textAlign: 'center' }}>Todo List</h1>
     
     <AddTodoForm onAddTodo={addTodo}/>

     {isLoading ? (
       <p>Loading ...</p>

          ) : (
     
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)}

     
     
     
          
      </> 
      }
      />
      
      <Route path="/new" element={
        <h1>New Todo List</h1>
      }/>

      </Routes>
      </BrowserRouter>
  );

}


export default App