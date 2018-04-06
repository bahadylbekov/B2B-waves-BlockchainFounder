import React from 'react';
import { Link } from 'react-router-dom';

const ContractsButton = (props) => (
    <Link to="/dashboard-contracts"><button
        // onClick={(e) => { props.handleClick(2); }}
        className="button col-md-4 col-lg-4 col-xl-4">
        <div className="button-card">
        <span className="contracts-icon" />
        <div className="button-info">
            <h1 className="button-title">4</h1>
            <p className="button-subtitle">Sales and Purchases</p>
        </div>
        </div>
    </button></Link>
)

export default ContractsButton;