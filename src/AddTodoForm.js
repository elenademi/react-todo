 
import React from 'react'
import { useState } from 'react'

function AddTodoForm({onAddTodo}){

  // const [todoTitle, setTodoTitle]= React.useState('')
  const [todoTitle, setTodoTitle]= useState('')

  function handleTitleChange(event){
    const newTodoTitle =event.target.value;
    setTodoTitle(newTodoTitle)
  }

    function handleAddTodo (event){
      event.preventDefault();
       {/*const todoTitle= event.target.title.value;*/}
        onAddTodo({

        title: todoTitle,
        id: Date.now()
      })

   console.log(todoTitle)
   
   {/*event.target.reset();*/}
   setTodoTitle('');
  
   }
  
  

  
    return(
        <form onSubmit={handleAddTodo} >
          <label htmlFor="todoTitle">Title </label>
 
          <input type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} name="title" ></input>
          <button type="submit">Add</button>

        </form>
    );
    }







export default AddTodoForm;