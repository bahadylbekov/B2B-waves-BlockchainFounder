import React from 'react';

const FinanceButton = (props) => (
    <div className="button col-md-4 col-lg-4 col-xl-4">
        <div className="button-card active-finance">
        <span className="finance-icon" />
        <div className="button-info">
            <h1 className="button-title">450.85 $</h1>
            <p className="button-subtitle">Finance Result</p>
        </div>
        </div>
    </div>
);

export default FinanceButton;