import React from 'react';

const PurchasesSubMenu = (props) => (
    <ul className="submenu">
        <li className="subtitle">
            <a href="#">All Purchases</a>
        </li>
        <li className="subtitle">
            <a href="#">Draft</a>
        </li>
        <li className="subtitle">
            <a href="#">Paid</a>
        </li>
        <li className="subtitle">
            <a href="#">Awaiting Payment</a>
        </li>
        <li className="subtitle">
            <a href="#">Overdue</a>
        </li>
        <li className="subtitle">
            <a href="#">Canceled</a>
        </li>
    </ul>
);

export default PurchasesSubMenu;