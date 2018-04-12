import React from 'react';

const ToDoList = ({items}) => {
  return (
    <ul>
      { items.map((item, i) => {
          return <li key={i}>{item.task}</li>
        })
      }
    </ul>
  );
}

export default ToDoList;