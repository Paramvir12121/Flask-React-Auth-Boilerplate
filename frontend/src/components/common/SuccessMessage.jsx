import React from 'react';

const SuccessMessage = ({ message }) => {
    return (
        <div className="success-message">
            <p>{message}</p>
        </div>
    );
};

export default SuccessMessage;