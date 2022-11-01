import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = (props) => {
  const defaultTask = new Task('Example', 'Default Task', false, LEVELS.NORMAL);

  return (
    <div>
      <div>Your Task: </div>
      {/* TODO: Aplicar un for/map para renderizar una lista. */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;
