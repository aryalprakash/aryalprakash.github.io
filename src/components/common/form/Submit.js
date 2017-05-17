import React from 'react';

const Submit = ({ label, isLoading, type }) => {
  return (
    <div className="form-group" style={{marginTop: 10}}>
      <button
        disabled={isLoading}
        className={`btn btn-lg btn-block btn-${type}`}
        type="submit"
      >
        {label}
      </button>
    </div>
  );
};

Submit.propTypes = {
  label: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool,
  type: React.PropTypes.string
};

Submit.defaultProps = {
  isLoading: false,
  type: 'success'
};

export default Submit;