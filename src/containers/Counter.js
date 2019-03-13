import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = ({ counter }) => ({
  counter,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      incrementCounter,
      decrementCounter,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
