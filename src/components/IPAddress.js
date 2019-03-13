import React from 'react';
import PropTypes from 'prop-types';

const IPAddress = ({ address, loading, fetchIP, resetIP }) => (
  <section className="ip-address col">
    <h2>Your IP Address:</h2>
    <p className="ip-address__result">
      <em>{loading ? 'Loading...' : address}</em>
    </p>
    <button disabled={loading} onClick={fetchIP}>
      Get My IP Address
    </button>
    <button onClick={resetIP}>Clear IP</button>
  </section>
);

IPAddress.propTypes = {
  ipAddress: PropTypes.string,
  loading: PropTypes.bool,
  fetchIP: PropTypes.func.isRequired,
  resetIP: PropTypes.func.isRequired,
};

export default IPAddress;
