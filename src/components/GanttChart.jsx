import React, { useEffect, useRef } from 'react';
import Gantt from 'frappe-gantt';

const GanttChart = ({ tasks }) => {
  const ganttRef = useRef(null);

  useEffect(() => {
    if (ganttRef.current) {
      new Gantt(ganttRef.current, tasks);
    }
  }, [tasks]);

  return <svg ref={ganttRef}></svg>;
};

export default GanttChart;
