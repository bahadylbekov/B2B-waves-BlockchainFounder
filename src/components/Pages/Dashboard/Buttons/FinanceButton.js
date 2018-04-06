import React from 'react';
import { Link } from 'react-router-dom';

const FinanceButton = (props) => (
    <Link to="/">
    <button
        // onClick={(e) => { props.handleClick(1); }}
        className="button col-md-4 col-lg-4 col-xl-4">
        <div className="button-card active-finance">
        <span className="finance-icon" />
        <div className="button-info">
            <h1 className="button-title">450.85 $</h1>
            <p className="button-subtitle">Finance Result</p>
        </div>
        </div>
    </button></Link>
);

export default FinanceButton;