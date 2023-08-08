import React from 'react';
import TodoListItem from './TodoListItem';

{/*const todoList = [
    {
      title: "Complete Assignment",
       id: 1,
    },
  
     {
      title: "Read More",
      id: 2,
     },
  
     {
      title: "Help Another Student",
      id: 3,
     }
    ];
  */}
  
  
  
function TodoList({todoList,onRemoveTodo}) {
  
        return(
        <ul>
            {/* { props.todoList.map((item) => <TodoListItem key={item.id} todo={item}/>)}  */}
            {todoList.map(function(todo) {
              return <TodoListItem  key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
              
              })}
           
        </ul>
    );
};






export default TodoList

  
  
  

