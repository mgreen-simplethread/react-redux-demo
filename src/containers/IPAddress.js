import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchIP, resetIP } from '../actions';
import IPAddress from '../components/IPAddress';

const mapStateToProps = ({ ipAddress: { value, loading } }) => ({
  address: value.length ? value : 'unknown',
  loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchIP,
      resetIP,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IPAddress);
