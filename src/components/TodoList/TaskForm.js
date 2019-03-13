import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskForm extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  state = {
    task: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ task: value });

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.task.length) return;
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <p className="task-form__field">
          <label htmlFor="task-input">Task:</label>{' '}
          <input id="task-input" placeholder="Buy milk" value={this.state.task} onChange={this.handleChange} />
        </p>
        <input type="submit" value="Add Task" disabled={!this.state.task.length} />
      </form>
    );
  }
}

export default TaskForm;
