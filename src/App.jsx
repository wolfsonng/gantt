import React from 'react';
import GanttChart from './components/GanttChart';
import tasks from './data/tasks';

const App = () => {
  return (
    <div>
      <h1>Frappe Gantt - Employee Scheduler</h1>
      <GanttChart tasks={tasks} />
    </div>
  );
};

export default App;
