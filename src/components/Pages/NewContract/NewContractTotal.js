import React from 'react';

const ContractTotal = (props) => (
    <div>
    <div className="contract-total">
        <div className="contract-total-subtotal">
            <div className="contract-total-amount">
                <p className="subtotal-text">Subtotal</p>
                <p className="subtotal-value">47.8</p>
            </div>
            <div className="contract-total-taxes">
                <p className="subtotal-text">Includes Tax 8.25%</p>
                <p className="subtotal-value">3.9435</p>
            </div>
        </div>
        <div className="contract-total-total">
            <p className="total-text">Total</p>
            <p className="total-value">47.8</p>
        </div>
    </div>
    <div className="clear">
    </div>
    </div>
);

export default ContractTotal;