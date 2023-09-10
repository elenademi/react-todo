import React from 'react';
import style from '../App.module.css';

import PropTypes from 'prop-types';

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


TodoListItem.propTypes= {

    todo:PropTypes.object,
    onRemoveTodo: PropTypes.func
  
  }




export default TodoListItem