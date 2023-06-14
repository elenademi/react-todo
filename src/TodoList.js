import React from 'react';
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
      {todoList.map(function (item) {
      return  <li key={item.id}>
        {item.id} {item.title}   
        
        </li>;
})}
      </ul>
    );
};






export default TodoList;
