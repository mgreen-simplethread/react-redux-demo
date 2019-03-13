import React from 'react';
import PropTypes from 'prop-types';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TodoList = ({ tasks, addTask, removeTask }) => (
  <section className="tasks col">
    <TaskForm addTask={addTask} />
    <TaskList tasks={tasks} removeTask={removeTask} />
  </section>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
};

export default TodoList;
