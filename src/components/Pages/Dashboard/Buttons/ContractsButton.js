import React from 'react';

const ContractsButton = (props) => (
    <button
        onClick={(e) => { props.handleClick(2); }}
        className="button col-md-4 col-lg-4 col-xl-4">
        <div className="button-card">
        <span className="contracts-icon" />
        <div className="button-info">
            <h1 className="button-title">250</h1>
            <p className="button-subtitle">Sales and Purchases</p>
        </div>
        </div>
    </button>    
)

export default ContractsButton;