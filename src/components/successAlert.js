import React from 'react';
import PropTypes from 'prop-types';

const SuccessAlert = props => {
	return (
        <div className="alert alert-success" role="alert">
        {props.message}
      </div>
				);
};

SuccessAlert.propTypes = {
	message: PropTypes.string.isRequired
};

export default SuccessAlert; 