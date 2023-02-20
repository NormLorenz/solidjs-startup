import { createSignal, createRoot } from "solid-js";

import { Task } from '../models/tasks.model';

const tasksState = () => {

  const initialTasks: Task[] = [
    { id: 'de5435fb-4c87-4f19-91e1-b0b3c761198c', name: 'vacuum kitchen', date: new Date('2022-11-10'), completed: false },
    { id: 'f514156a-1c0f-4173-b12d-b1adef669a11', name: 'clean toilet', date: new Date(), completed: true },
    { id: '9053c080-eff7-4135-be66-744915904796', name: 'wash face', date: new Date('2019-12-25'), completed: false },
    { id: '1e9f41e5-09e1-475f-99a9-38520061a1b3', name: 'write code', date: new Date('2021-03-07'), completed: false },
  ];

  const [tasks, setTasks] = createSignal(initialTasks);
  return { tasks, setTasks };

}

export default createRoot(tasksState);
