import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import Signature from './components/Signature';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>DigiTâches</h1>
        <h2>Votre application de gestion de tâches</h2>
      </div>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Signature />
    </div>
  );
};

export default App;