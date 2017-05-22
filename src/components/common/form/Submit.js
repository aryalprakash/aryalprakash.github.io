import React from 'react';

const Submit = ({ label, isLoading, type }) => {
  return (
    <div className="form-group">
      <div className="col-md-3 col-md-offset-9" >
        <button
          disabled={isLoading}
          className={`btn btn-block btn-${type}`}
          type="submit"
        >
          {label}
        </button>
      </div>
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