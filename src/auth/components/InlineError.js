import React from 'react';
import PropTypes from 'prop-types';

const InlineError = props => {
	return (
			<div role="alert" className="fade alert alert-danger show">
			{ props.message }
			</div>
				);
};

InlineError.propTypes = {
	message: PropTypes.string.isRequired
};

export default InlineError; 