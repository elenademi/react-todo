import React from 'react';

function AddTodoForm(props){
  const handleAddTodo =(event)=>{event.preventDefault();
  
  const todoTitle= event.target.title.value;
  props.onAddTodo(todoTitle)
  console.log(todoTitle);
 event.target.reset();
  }
  
    return(
        <form onSubmit={handleAddTodo} >
          <label htmlFor="todoTitle">Title </label>
          <input type="text" id="todoTitle" name="title" ></input>
          <button input type="submit">Add</button>
        </form>
    );
}







export default AddTodoForm;