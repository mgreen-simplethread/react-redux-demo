import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, removeTask } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = ({ tasks }) => ({
  tasks: Object.values(tasks),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addTask,
      removeTask,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
