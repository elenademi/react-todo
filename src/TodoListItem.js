import React from 'react';
import style from './App.module.css';



function TodoListItem({todo,onRemoveTodo}) {
    
      
    
    return(
        
        <li className={style.ListItem}>
        {todo.title} 
        <button type="button" className={style.button} onClick={() => onRemoveTodo(todo.id)}>
        Remove
 </button> 
        </li>
        
    )
}







export default TodoListItem