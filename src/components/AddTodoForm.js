import React from 'react'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import style from '../App.module.css';
import PropTypes from 'prop-types'


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

          <InputWithLabel  value={todoTitle} onChange={handleTitleChange} >Title</InputWithLabel>
          {/* <label htmlFor="todoTitle">Title </label>  */}
          {/* <input type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} name="title" ></input> */}
          <button type="submit" className={style.button}>Add</button>
        </form>
    );
    }


     AddTodoForm.propTypes= {

      onAddToDo: PropTypes.func

    }







export default AddTodoForm; 


   


