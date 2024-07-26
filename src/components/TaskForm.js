import React, { useState } from 'react';

const TaskForm = ({ tasks, setTasks }) => {
    const [task, setTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, { title: task, completed: false }]);
            setTask('');
        }
    };

    return (
        <form className="task-form" onSubmit={addTask}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Description de la tâche"
            />
            <button type="submit">Ajouter une tâche</button>
        </form>
    );
};

export default TaskForm;