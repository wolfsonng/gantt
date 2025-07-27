const tasks = [
  {
    id: 'Task 1',
    name: 'Design Interface',
    start: '2025-04-01',
    end: '2025-04-05',
    progress: 60,
    dependencies: ''
  },
  {
    id: 'Task 2',
    name: 'Develop Backend',
    start: '2025-04-06',
    end: '2025-04-12',
    progress: 30,
    dependencies: 'Task 1'
  },
  {
    id: 'Task 3',
    name: 'Testing',
    start: '2025-04-13',
    end: '2025-04-18',
    progress: 0,
    dependencies: 'Task 2'
  }
];

export default tasks;
