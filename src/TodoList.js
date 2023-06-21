import React from 'react';
import TodoListItem from './TodoListItem';
const todoList = [
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
function TodoList() {
    return(
        <ul>
      {todoList.map(item => <TodoListItem key={item.id} todo={item}/>)}
      
      
      {/*<li key={item.id}>
        {item.id} {item.title}   
        
        </li>*/}

      </ul>
    );
};






export default TodoList;
