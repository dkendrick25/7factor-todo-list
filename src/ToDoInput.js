import React from 'react';

const ToDoList = ({taskText, updateInputTask, handleAddTask}) => {
    return (
      <div> 
        <input type='text' value={taskText} onChange={(e) => updateInputTask(e)}/>
        <button type="button" onClick={() => handleAddTask()}>Add Task!</button>
      </div>
    );
}

export default ToDoList;