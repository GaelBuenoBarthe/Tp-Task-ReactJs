import React from "react";

const TaskList = ({ tasks, setTasks }) => {
    const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    };

    const invalidateTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = false   
    setTasks(newTasks);
    };

    const deleteTask = (index) => {
        if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
            const newTasks = tasks.filter((_, i) => i !== index);
            setTasks(newTasks);
        }
    };

    return (
    <div>
        {tasks.map((task, index) => (
            <div key={index} className="task-card">
                <span className={`task-title ${task.completed ? "completed" : ""}`}>
                    {task.title}
                </span>
            <div className="task-buttons">
                {task.completed ? (
                    <button className="invalidate-button" onClick={() => invalidateTask(index)}>
                    Invalider
                    </button>
                ) : (
                    <button className="complete-button" onClick={() => completeTask(index)}>
                    Valider
                    </button>)
                }
                <button className="delete-button" onClick={() => deleteTask(index)}>
                    Supprimer
                </button>
            </div>
        </div>
        ))}
    </div>
    );
};

export default TaskList;
