import React from 'react';



const TaskList = ({ tasks, setTasks }) => {
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const invalidateTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = false;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="task-card">
          <span className="task-title">{task.title}</span>
          <div className="task-buttons">
            <button onClick={() => completeTask(index)}>Valider</button>
            <button onClick={() => invalidateTask(index)}>Invalider</button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;