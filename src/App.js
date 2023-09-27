import  React, { useState }  from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import style from './App.module.css';



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

   
     
  async function addTodo(newTodo) {
    
    const title = newTodo.title; 
    const newTodoItem = {
      fields: {
        Title: title,
      },
    };
  
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(newTodoItem),
    };
  
    
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Error has occurred: ${response.status}`);
      }
  
            
      setTodoList([...todoList, newTodo])
      localStorage.setItem('savedTodoList', JSON.stringify([...todoList, newTodo]));
      
    } catch (error) {
      console.error(error.message);
   }
  }
  


  

  async function removeTodo(id) {
    
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
      },
    };
  
    
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Error has occurred: ${response.status}`);
      }
  
      
      const data = await response.json();
  
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
  
      
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <>
     
     <h1 >Todo List</h1>
     <div className={style.main}>
     
     <AddTodoForm onAddTodo={addTodo}/>

     {isLoading ? (
       <p>Loading ...</p>

          ) : (
     
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>)}

     
     </div>
     
          
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

          
     

       
      
   

    


  



       
      



    
    
  
    
    

    
      

    


  

   
   
  
    

  
     
      
