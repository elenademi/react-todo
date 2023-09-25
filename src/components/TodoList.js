import React from 'react';
import TodoListItem from './TodoListItem';
import style from '../App.module.css';
import PropTypes from 'prop-types';


function TodoList({todoList,onRemoveTodo}) {
 
        return(
        <ul >
            {/* { props.todoList.map((item) => <TodoListItem key={item.id} todo={item}/>)}  */}
            {todoList.map(function(todo) {
              return <TodoListItem  key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
             
              })}
           
        </ul>
    );
};


TodoList.propTypes= {


  todoList:PropTypes.array,
  onRemoveTodo: PropTypes.func


}








export default TodoList
